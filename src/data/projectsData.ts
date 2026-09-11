export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  label?: string;
};

export type Project = {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;

  problem?: string;
  built?: string;
  role?: string;
  tech: string;

  engineering?: string[];
  impact?: string[];

  github?: string;
  live?: string;

  status?: string;

  media: ProjectMedia[];
};

export const projects: Project[] = [
  {
    id: "glowi",

    title: "Glowi — Product System",

    badge: "iOS · Web · AI Product",

    shortDesc:
      "Multi-platform product system that brings athlete schedules, competitions, payments, and parent priorities into one structured mobile and web experience.",

    problem:
      "Parents of rhythmic gymnasts often manage schedules, competition deadlines, payments, and coach requests across fragmented tools. Important actions can become difficult to track, especially when a parent manages more than one athlete.",

    built:
      "Designed and developed a product system that centralizes athlete context, competitions, schedules, payments, and parent workflows while exploring constrained AI-assisted prioritization.",

    role:
      "Product Design · Frontend Development · iOS Development · AI Integration",

    tech:
      "SwiftUI · MVVM · Angular · PHP · MySQL · REST APIs · JSON · AI SDK · Groq · Zod · Tool Calling",

    engineering: [
      "MVVM architecture separating UI, business logic, and data responsibilities",
      "Explicit athlete context across competitions, payments, and schedules",
      "Structured tool calling for competition and payment data",
      "Zod validation for AI tool inputs and outputs",
      "Dynamic payment lifecycle: Paid, Pending, Due Soon, and Overdue",
      "Competition deadline and action-required logic",
      "Loading, empty, success, and error UI states",
      "Reusable component system designed for product growth",
    ],

    impact: [
      "Centralized fragmented parent workflows into one product experience",
      "Made competition deadlines and payment status easier to prioritize",
      "Expanded the project from individual screens into a structured product system",
      "Introduced a constrained read-only AI workflow grounded in application data",
    ],

    status: "In active development",

    github:
      "https://github.com/rabbitrunout/Glowi_mobile",

    media: [
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/1.png",
      },
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/2.png",
      },
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/3.png",
      },
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/4.png",
      },
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/5.png",
      },
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/6.png",
      },
      {
        type: "image",
        src: "/projects/mobile/glowi_mobile/7.png",
      },
      {
        type: "video",
        src: "/projects/mobile/glowi_mobile/demo_glowi_mobile.mp4",
      },
    ],
  },

  {
    id: "fluidex",

    title: "FluiDex Drive",

    badge: "iOS · SwiftUI · Product",

    shortDesc:
      "Vehicle maintenance application that tracks service history and prioritizes upcoming and overdue maintenance using mileage- and time-based reminders.",

    problem:
      "Vehicle owners can lose track of maintenance schedules, service history, and upcoming work when information is spread across receipts, notes, and separate reminders.",

    built:
      "Designed and developed a SwiftUI vehicle maintenance application with structured service history, vehicle records, reminder workflows, and dashboard-based prioritization.",

    role:
      "iOS Developer · Product Design · UI/UX",

    tech:
      "SwiftUI · Core Data · MVVM · iOS",

    engineering: [
      "MVVM architecture with separation of UI and business logic",
      "Core Data persistence for local vehicle and maintenance records",
      "Mileage-based and time-based reminder logic",
      "State-driven SwiftUI interface",
      "CRUD workflows for vehicles and service records",
      "Relational maintenance-history data model",
      "Reusable mobile UI components",
      "Priority logic for upcoming and overdue maintenance",
    ],

    impact: [
      "Created one structured place for vehicle maintenance history",
      "Made overdue and upcoming service items easier to identify",
      "Combined mileage and time-based maintenance reminders",
      "Built the app around scalable SwiftUI and MVVM patterns",
    ],

    status: "Portfolio project",

    github:
      "https://github.com/rabbitrunout/FluiDex_DriveApp",

    media: [
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/2.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/3.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/4.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/5.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/6.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/7.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/8.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/9.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/10.png",
      },
      {
        type: "image",
        src: "/projects/mobile/FluiDex_DriveApp/11.png",
      },
    ],
  },

  {
    id: "anna-vorobkalo",

    title: "Anna Vorobkalo — Premium Event Website",

    badge: "Client · Frontend",

    shortDesc:
      "Responsive redesign and modernization of a real-world event-host website with premium visual hierarchy, interactive media, and mobile-first UX.",

    problem:
      "The original website had an outdated structure, inconsistent visual hierarchy, and limited mobile responsiveness, reducing the premium feel of the brand.",

    built:
      "Redesigned and rebuilt the frontend with responsive layouts, stronger typography, interactive media sections, social contact actions, improved mobile behavior, and a clearer booking journey.",

    role:
      "Frontend Developer · UI/UX Redesign · Responsive Frontend Engineering",

    tech:
      "HTML · CSS · JavaScript · Responsive Design · UI/UX",

    engineering: [
      "Responsive mobile-first layout",
      "Reusable frontend content sections",
      "Interactive video presentation",
      "Floating social contact actions",
      "Responsive gallery and testimonial layouts",
      "Production deployment workflow",
    ],

    impact: [
      "Modernized an outdated promotional website",
      "Improved mobile responsiveness and visual consistency",
      "Created a clearer contact and booking journey",
      "Built a stronger frontend foundation for future content",
    ],

    github:
      "https://github.com/rabbitrunout/anna-vorobkalo-website",

    live:
      "https://www.vorobkaloevent.store/",

    media: [
      {
        type: "image",
        src: "/projects/client/anna/before.png",
        label: "Original Website · 2024",
      },
      {
        type: "image",
        src: "/projects/client/anna/after.png",
        label: "Premium Redesign · 2026",
      },
      {
        type: "video",
        src: "/projects/client/anna/demo.mp4",
        label: "Interactive Website Demo",
      },
      {
        type: "image",
        src: "/projects/client/anna/1.png",
        label: "Hero Section",
      },
      {
        type: "image",
        src: "/projects/client/anna/2.png",
        label: "Responsive Mobile Experience",
      },
      {
        type: "image",
        src: "/projects/client/anna/3.png",
        label: "Frontend UI",
      },
    ],
  },

  {
    id: "reservation-system",

    title: "Reservation System",

    badge: "React · REST API",

    shortDesc:
      "Reservation application with role-based access, REST API integration, CRUD workflows, and dynamic React views.",

    problem:
      "Booking interfaces become difficult to use when user roles, data visibility, and available actions are not clearly represented in the UI.",

    built:
      "Built a React reservation interface with role-based access, backend-connected CRUD flows, modal details, and dynamic data rendering.",

    role:
      "Frontend Developer · React · API Integration",

    tech:
      "React · JavaScript · REST API · MySQL",

    engineering: [
      "React component architecture",
      "Role-based user and admin flows",
      "REST API integration",
      "CRUD operations connected to backend data",
      "Modal-based detail views",
      "Frontend state management",
      "MySQL-backed data structure",
    ],

    impact: [
      "Implemented separate user and admin interaction flows",
      "Connected frontend views to backend data",
      "Created a structured reservation workflow",
    ],

    github:
      "https://github.com/rabbitrunout/ReactApp2",

    media: [
      {
        type: "image",
        src: "/projects/WebApp/reserve/4.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/1.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/2.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/3.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/5.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/6.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/7.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/8.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/reserve/9.png",
      },
    ],
  },

  {
    id: "booking-system",

    title: "Booking System",

    badge: "Angular · Full-Stack",

    shortDesc:
      "Full-stack booking platform with authentication, CRUD operations, REST communication, and role-based workflows.",

    problem:
      "A booking system needs predictable authentication, reservation management, validation, and clear user flows across frontend and backend layers.",

    built:
      "Developed an Angular, PHP, and MySQL booking platform with authentication, reservation management, validation, and structured user workflows.",

    role:
      "Full-Stack Developer · Angular · PHP · MySQL",

    tech:
      "Angular · TypeScript · PHP · MySQL",

    engineering: [
      "Angular component architecture",
      "REST API communication with PHP backend",
      "Authentication and validation flows",
      "CRUD reservation management",
      "Relational MySQL database",
      "Form handling and UI state updates",
      "Responsive frontend layouts",
    ],

    impact: [
      "Built complete booking workflows from frontend to database",
      "Connected Angular, PHP, and MySQL into one working application",
      "Implemented authentication and reservation CRUD flows",
    ],

    github:
      "https://github.com/rabbitrunout/AngularApp2",

    media: [
      {
        type: "image",
        src: "/projects/WebApp/booking/1.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/booking/2.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/booking/3.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/booking/4.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/booking/5.png",
      },
      {
        type: "image",
        src: "/projects/WebApp/booking/6.png",
      },
    ],
  },

  {
    id: "superpodcast",

    title: "SuperPodcast",

    badge: "Android · Kotlin",

    shortDesc:
      "Android podcast application with API search, playback controls, filtering, and a Jetpack Compose interface.",

    built:
      "Built an Android podcast application with podcast discovery, filtering, episode playback, and state-driven Compose UI.",

    role:
      "Android Developer",

    tech:
      "Kotlin · Jetpack Compose · MVVM · Retrofit · Media3 · Coroutines",

    engineering: [
      "MVVM Android architecture",
      "Jetpack Compose state-driven UI",
      "iTunes Search API integration",
      "Retrofit and Gson networking",
      "Media3 / ExoPlayer playback",
      "Coroutine-based asynchronous workflows",
    ],

    impact: [
      "Integrated remote podcast data into a native Android interface",
      "Implemented episode playback and mini-player controls",
      "Built the interface with modern Compose patterns",
    ],

    github:
      "https://github.com/rabbitrunout/AndroidApp5",

    media: [
      {
        type: "image",
        src: "/projects/mobile/sound/1.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/2.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/3.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/4.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/5.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/6.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/7.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/8.png",
      },
      {
        type: "image",
        src: "/projects/mobile/sound/9.png",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) =>
  ["glowi", "fluidex"].includes(project.id)
);

export const moreProjects = projects.filter((project) =>
  [
    "anna-vorobkalo",
    "reservation-system",
    "booking-system",
    "superpodcast",
  ].includes(project.id)
);