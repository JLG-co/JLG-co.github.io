# Math Companion Pro - Gouneiber Edition

النظام التعليمي الشامل لطلبة 2AS و 3AS في الرياضيات والفيزياء.

## How It Works: Next.js to Static HTML

This Next.js app automatically generates static HTML files when built. The configuration `output: 'export'` in `next.config.ts` converts all React pages into standalone HTML files that work on any static hosting service.

**When you build:**
- `src/app/page.tsx` becomes `out/index.html`
- `src/app/lessons/[id]/page.tsx` becomes `out/lessons/1.html`, `out/lessons/2.html`, etc.
- All interactive features (Gouneiber Engine tools) work via client-side JavaScript

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Instructions

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Source: Select "GitHub Actions"
   - Save and wait for the workflow to complete

3. **Access Your Site**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   - The workflow automatically builds and deploys on every push to main

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build Static Site Locally

```bash
npm run build
```

This generates a complete static website in the `out` directory with all HTML files. You can test it by opening `out/index.html` in your browser.

## Features

- Full 2AS/3AS Mathematics curriculum with comprehensive lessons
- Full 2AS/3AS Physics curriculum with detailed explanations
- Gouneiber Engine computational tools:
  - Interactive graphing calculator with differentiation
  - Physics simulator with work-energy calculations
  - Complex number analyzer with visual representation
- Step-by-step problem solvers with olympiad-level challenges
- Fully bilingual (Arabic/English) interface

## Technology Stack

- Next.js 15 with Static Export
- React 19 with TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Framer Motion for animations
- Math.js for computational engine

## Credits

**Conceptualized and Developed by Abdeldjalil Gouneiber (عبدالجليل قنيبر)**

© 2025 All Rights Reserved
