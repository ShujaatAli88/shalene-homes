# Shalene KJ Brostek - Real Estate Website

Personal real estate website for **Shalene KJ Brostek**, Licensed REALTOR at **KW Reserve**, Palm Beach County, Florida.

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18 |
| Vite | 5 |
| React Router | 7 |
| CSS (custom properties) | - |

No external UI libraries. All styles are hand-crafted CSS with custom properties.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
- components/
  - layout/
    - Navbar/          # Fixed navbar - glass on hero, solid on scroll
    - TopBar/          # Top contact bar - hides on scroll
    - Footer/          # Dark navy footer with teal accents
  - sections/
    - Hero/            # Full-viewport video hero
    - About/           # Parallax about with stats & credentials
    - Listings/        # Featured property cards
    - Services/        # 3-card services section
    - Stats/           # Parallax statistics strip
    - Testimonials/    # Glassmorphism review carousel
    - Blog/            # Latest blog posts
    - Neighborhoods/   # Neighborhood showcase
    - Valuation/       # Home valuation CTA
    - Contact/         # Home-page CTA with "Let's Connect" button
  - ui/
    - MarqueeStrip/    # Scrolling credential/logo strip
    - SectionHeader/   # Reusable eyebrow + title + subtitle
    - SocialIcons/     # Social media icon row
    - PageHero/        # Inner page parallax hero banner
- pages/
  - HomePage.jsx
  - AboutPage.jsx        # Cinematic hero, tabs, timeline, CTA
  - ListingsPage.jsx
  - PortfolioPage.jsx
  - NeighborhoodsPage.jsx
  - ValuationPage.jsx    # Multi-step home valuation form
  - TestimonialsPage.jsx
  - BlogPage.jsx
  - ContactPage.jsx      # Immersive 3-step contact form
- data/
  - agent.js             # Update with real client info
  - listings.js          # Replace with real MLS data
  - neighborhoods.js
  - testimonials.js
  - blog.js
- hooks/
  - useScrollReveal.js   # IntersectionObserver scroll animations
- styles/
  - global.css           # CSS variables, resets, shared utilities
```

---

## Color Scheme

| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` | `#1c2940` | Primary dark background |
| `--navy-mid` | `#2d3f5e` | Mid-tone navy |
| `--gold` | `#00C4CC` | Teal accent - buttons, underlines, borders |
| `--gold-light` | `#33D0D5` | Light teal - eyebrows, labels |
| `--gold-pale` | `#E0F7F8` | Pale teal - focus rings, backgrounds |

---

## Updating Client Data

All agent details live in one file - **`src/data/agent.js`**:

```js
export const agent = {
  name:     'Shalene KJ Brostek',
  title:    'Licensed REALTOR',
  license:  'FL-BK3421897',
  brokerage:'KW Reserve',
  phone:    'example number',
  email:    'example@gmail.com',
  photo:    'example',
  ...
}
```

Replace listing/neighborhood data in `src/data/listings.js` and `src/data/neighborhoods.js` with real MLS content.

---

## Deployment

### Connect GitHub Remote

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Deploy to Vercel (recommended)

1. Push to GitHub
2. Import repo at vercel.com
3. Framework: **Vite** - Vercel auto-detects it
4. Build command: `npm run build`
5. Output directory: `dist`

### Deploy to Netlify

1. Push to GitHub
2. Import at netlify.com
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## Key Features

- **Parallax sections** - `background-attachment: fixed` on Hero, About, Valuation, Stats
- **Scroll-reveal animations** - IntersectionObserver with staggered delays
- **Multi-step contact form** - 3-step with interest selection and slide transitions
- **Interactive About page** - Tab story, year-by-year timeline, cinematic hero
- **Responsive** - Mobile-first breakpoints at 640px, 860px, 1100px
- **Marquee strip** - Seamless credential/logo loop

---

## License

Private project. All rights reserved - Shalene KJ Brostek / KW Reserve.
