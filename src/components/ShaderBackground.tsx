import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec2 u_mouse;

  // Small pseudo-random function used for grain.
  float random(vec2 st) {
    return fract(
      sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123
    );
  }

  void main() {
    // Convert the current pixel position into normalized UV coordinates.
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;

    // Center the coordinates around 0.
    vec2 p = uv - 0.5;

    // Correct the X axis so the effect does not stretch on wide screens.
    p.x *= u_resolution.x / u_resolution.y;

    // Mouse position is normalized from 0–1 and then centered.
    vec2 mouse = u_mouse - 0.5;
    mouse.x *= u_resolution.x / u_resolution.y;

    // Make the field gently lean toward the cursor.
    float mouseDistance = length(p - mouse);
    float mouseInfluence = exp(-mouseDistance * 2.8);

    // Slow animated flow.
    float waveA = sin(
      p.x * 3.4 +
      p.y * 2.2 +
      u_time * 0.22 +
      mouseInfluence * 1.4
    );

    float waveB = cos(
      p.y * 4.0 -
      p.x * 1.8 -
      u_time * 0.16
    );

    float flow = (waveA + waveB) * 0.5;

    // Portfolio palette.
    vec3 navy = vec3(0.027, 0.078, 0.15);
    vec3 blue = vec3(0.22, 0.34, 0.95);
    vec3 violet = vec3(0.48, 0.31, 1.0);
    vec3 pink = vec3(0.76, 0.38, 0.95);

    // Mix the palette using the animated field.
    float mixA = smoothstep(-1.0, 1.0, flow);
    vec3 color = mix(navy, blue, mixA * 0.55);

    float glow = exp(-length(p - vec2(0.35, 0.12)) * 2.1);
    color = mix(color, violet, glow * 0.42);

    float cursorGlow = mouseInfluence * 0.28;
    color = mix(color, pink, cursorGlow);

    // Keep the center-left darker so hero text stays readable.
    float textZone = 1.0 - smoothstep(
      0.0,
      0.75,
      length(p - vec2(-0.3, 0.0))
    );

    color *= 1.0 - textZone * 0.22;

    // Very subtle grain prevents the gradient feeling too synthetic.
    float grain =
      random(gl_FragCoord.xy + u_time * 10.0) - 0.5;

    color += grain * 0.018;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function ShaderBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReduceMotion(media.matches);
    };

    updatePreference();
    media.addEventListener("change", updatePreference);

    return () => {
      media.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !containerRef.current) return;

    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.Camera();

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    });

    // Limit pixel density so high-DPI devices do not render unnecessary pixels.
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    container.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(1, 1) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    // A fullscreen plane gives the fragment shader one surface to paint.
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const clock = new THREE.Clock();

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height, false);

      uniforms.u_resolution.value.set(
        width * renderer.getPixelRatio(),
        height * renderer.getPixelRatio(),
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();

      uniforms.u_mouse.value.set(
        (event.clientX - rect.left) / rect.width,
        1 - (event.clientY - rect.top) / rect.height,
      );
    };

    let animationFrame = 0;
    let isVisible = !document.hidden;

    const render = () => {
      if (!isVisible) return;

      uniforms.u_time.value = clock.getElapsedTime();

      renderer.render(scene, camera);

      animationFrame = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;

      if (isVisible) {
        clock.start();
        cancelAnimationFrame(animationFrame);
        render();
      } else {
        cancelAnimationFrame(animationFrame);
      }
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      renderer.domElement.remove();
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div
        className="shader-background shader-background-static"
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="shader-background"
      aria-hidden="true"
    />
  );
}