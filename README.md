Good Food — Animated Food Landing Page (Vite + React + Tailwind)

A pixel-accurate, modern, responsive food landing page built with Vite + React + TailwindCSS. It features polished animations using Framer Motion and GSAP (with ScrollTrigger), accessible semantics, and responsive design across breakpoints.

Tech stack
- Vite (React)
- React 18 (JavaScript)
- Tailwind CSS (JIT)
- Framer Motion — staggered reveals, micro-interactions
- GSAP + ScrollTrigger — hero sequences, floats, parallax
- ESLint + Prettier
- Jest + React Testing Library (1 basic test)

Project structure
- public/
  - images/ (SVG placeholders for hero, menu items, avatars, etc.)
  - demo/ (add a short demo GIF or MP4 of the animations)
- src/
  - components/
    - Header.jsx
    - Footer.jsx
    - MenuCard.jsx
    - Rating.jsx
    - MobileMenu.jsx
  - sections/
    - Hero.jsx
    - Features.jsx
    - About.jsx
    - MenuGrid.jsx
    - TakeawayCTA.jsx
    - Testimonial.jsx
    - Contact.jsx
  - hooks/
    - useInViewAnimate.js
  - App.jsx
  - main.jsx
  - index.css
- tailwind.config.cjs
- postcss.config.cjs
- vite.config.mjs
- jest.config.cjs
- .eslintrc.cjs, .prettierrc

Live demo (recording)
- Place a 6–10s GIF/MP4 showing the hero entrance, scroll reveals, and menu hover interactions at public/demo/demo.gif or public/demo/demo.mp4.
- A placeholder README.txt is included in public/demo with guidance.

Getting started
1) Install dependencies
   npm install

2) Run dev server
   npm run dev
   Open http://localhost:5173

3) Build for production
   npm run build

4) Preview production build
   npm run preview

5) Lint and test
   npm run lint
   npm test

Deploy notes
- The app is a static site (Vite build outputs to dist/). You can deploy to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
- Add a sitemap and robots.txt as needed for SEO.

Where to customize brand colors & fonts
- Tailwind theme extensions in tailwind.config.cjs:
  extend: {
    colors: {
      primary: '#ca7a1f',
      beige: '#f4f2f2',
      soft: '#caafa8',
      text: '#1f1f1f',
      muted: '#6b6b6b',
      footer: '#121214'
    },
    fontFamily: {
      heading: ['"Playfair Display"', 'Georgia', 'serif'],
      body: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
    }
  }
- Fonts are loaded via Google Fonts in index.html. Swap to self-hosted if preferred.

Design & animation details
- Layout: hero with right-aligned floating pan/food, large soft decorative shape, clean white cards, responsive grid, mobile app mock CTA, testimonials carousel, and footer.
- Animations
  - Framer Motion: text/section reveals, hover/tap micro-interactions.
  - GSAP + ScrollTrigger: hero timeline (headline words fade in with 0.04s stagger, subheading/buttons slide-up, hero image pieces pop and then float in a loop), parallax on the decorative soft shape.
  - Prefers reduced motion respected (reduced animations if user requests).
- Performance: images are SVG and lazy-loaded (loading="lazy"), minimal CSS with Tailwind utilities.
- Accessibility
  - Semantic HTML tags: header, main, section, footer, nav, figure/figcaption/blockquote.
  - Descriptive alt text on images.
  - Keyboard accessible mobile menu (escape to close, focus trap, aria roles and labels).
  - Buttons/links have focus-visible outlines.
  - Color contrast meets AA on light backgrounds.

Testing
- A basic test is provided for MenuCard to ensure the title and price render.

What’s included (by section)
- Header: sticky nav with shadow on scroll, logo mark, navigation links, primary CTA. Mobile hamburger with accessible side drawer.
- Hero: headline with word-by-word reveal, subheading, two CTAs, parallax soft shape, GSAP floating hero images.
- Features: three feature cards with circular icons and subtle reveals.
- About: image + copy with soft background shape and a Read More CTA.
- MenuGrid: responsive 1–3 column card grid; hover lift effect and image zoom; stagger-in.
- TakeawayCTA: two-column text + phone mock with GSAP entry and store buttons.
- Testimonial: basic carousel with auto-advance and pause on hover; accessible controls.
- Contact: simple email capture with validation and aria-live feedback.
- Footer: dark background with link columns and social icons.

Production checklist (next steps)
- Replace placeholder SVGs with optimized production assets (WebP/AVIF where possible).
- Compress images and serve via a CDN (set long cache headers, revisioned filenames from Vite build already included).
- Add a sitemap.xml and robots.txt for SEO.
- Add analytics and consent banner if required.
- Enable HTTP caching and compression on the server/CDN.
- Consider using font-display: swap and preloading critical assets.

Notes
- This project uses plain JavaScript (not TypeScript) as requested.
- Animations split of responsibilities: Framer Motion for simple component-level animations and interactive hovers; GSAP for complex hero sequences, continuous motion, and scroll-based parallax.
