# Break Your Own Site — Hardening Review

## Project

**Project:** Irina Safronova Portfolio  
**Live URL:** https://irina-ai-portfolio-nine.vercel.app/

This review focuses on deliberately testing failure cases, browser differences, findability, speed, and known limitations before launch.

## Where It Breaks

### Fix Now

#### SEO metadata
The initial Lighthouse audit showed an SEO score of 90 because the page was missing a meta description.

**Fix:**
- Added a descriptive page title.
- Added a meta description.
- Added Open Graph metadata for social sharing:
  - `og:title`
  - `og:description`
  - `og:type`
  - `og:url`

**Result:** Lighthouse SEO improved from 90 to 100.

#### Mobile usability
Some mobile spacing, typography, and control sizing needed additional polish.

**Fix:**
- Improved mobile spacing.
- Adjusted headline sizing.
- Improved form readability.
- Increased interactive control sizes.
- Improved footer spacing.

#### Keyboard accessibility
Keyboard focus needed to be clearly visible.

**Fix:**
- Added visible `:focus-visible` styling.
- Tested the primary flow using Tab, Shift+Tab, and Enter.

**Result:** Keyboard-only navigation passed.

#### Motion accessibility
Animations and smooth scrolling could affect users who prefer reduced motion.

**Fix:**
- Added `prefers-reduced-motion` support.

---

## Known Limitations

### Contact form dependency
The contact form depends on an external email/form delivery service.

If that external service is unavailable, form delivery may fail even though the portfolio itself is online.

### PDF resume
WAVE reports one alert because the Resume link opens a PDF document.

This is intentional and is not treated as an accessibility error.

### AI interaction
The portfolio presents AI-related work but does not contain a live streamed AI chat interface.

Streaming-specific accessibility features such as `aria-live` announcements and a Stop Generation control are therefore not applicable to the current deployed portfolio.

### Search engine indexing
SEO metadata is present, but search engines may require time to crawl and index a newly updated deployment.

### Social preview image
Open Graph title, description, URL, and type are implemented. A custom `og:image` is not currently included.

This is documented as a known limitation rather than blocking launch.

---

## Break Tests Performed

The portfolio was tested beyond the normal happy path, including:

- Empty form submission
- Invalid form input
- Rapid repeated interaction
- Keyboard-only navigation
- External links
- Resume link
- Responsive/mobile layout
- Production build
- Lighthouse Mobile audit
- WAVE accessibility audit

## Speed Check

Final Lighthouse Mobile results:

| Metric | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

The production build also completed successfully with Vite.

## Accessibility Check

WAVE results:

- Errors: 0
- Contrast Errors: 0
- Alerts: 1
- AIM Score: 10/10

The single alert is the intentional PDF Resume link.

## Hardening Review

A structured hardening review was performed covering:

- Failure cases
- Mobile usability
- Accessibility
- Keyboard navigation
- SEO
- Performance
- Browser-facing issues
- Known limitations

### Must-fixes identified

- Missing SEO description
- Generic metadata
- Mobile readability and spacing
- Keyboard focus visibility
- Reduced-motion support

### Status

All must-fix items identified during the review were addressed.

Remaining limitations are documented rather than hidden.

## Final Result

The site is ready to proceed toward launch with:

- Performance: 100
- Accessibility: 100
- SEO: 100
- WAVE errors: 0
- Keyboard navigation: PASS

The remaining limitations are known, non-blocking, and documented.