# Deployment Guide: How Your Next.js App Becomes HTML

## Understanding Static Export

Your Math Companion Pro is configured with `output: 'export'` in `next.config.ts`. This tells Next.js to generate a complete static website during the build process.

## What Happens During Build

When you run `npm run build`:

1. **Page Conversion**: All React pages are converted to static HTML files
   - `src/app/page.tsx` → `out/index.html`
   - `src/app/lessons/[id]/page.tsx` → `out/lessons/1.html`, `out/lessons/2.html`, etc.
   - `src/app/tools/page.tsx` → `out/tools.html`

2. **Asset Optimization**: CSS, JavaScript, and images are bundled
   - Minified CSS files in `out/_next/static/css/`
   - Optimized JavaScript in `out/_next/static/chunks/`
   - Images copied to `out/` (unoptimized for static hosting)

3. **Client-Side Hydration**: React still works on the client
   - Interactive features like the Gouneiber Engine tools work perfectly
   - No server needed - all interactivity is client-side

## GitHub Pages Deployment

### The GitHub Actions Workflow

The `.github/workflows/deploy.yml` file automates deployment:

```yaml
# On every push to main branch:
1. Checks out your code
2. Installs Node.js and dependencies
3. Runs npm run build (generates /out folder with HTML files)
4. Uploads the /out folder to GitHub Pages
5. Deploys to your github.io URL
```

### Setup Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings > Pages
   - Source: Select "GitHub Actions"
   - Save

3. **Wait for Deployment**
   - Go to the "Actions" tab
   - Watch the deployment workflow
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Verifying the HTML Files

To see the generated HTML files locally:

```bash
# Build the site
npm run build

# Check the output
ls out/
# You'll see:
# - index.html
# - lessons/ (folder with lesson HTML files)
# - tools.html
# - _next/ (optimized assets)
# - All static files
```

You can open `out/index.html` directly in your browser to test the static site!

## Why This Works

- **No Server Needed**: All pages are pre-rendered to HTML at build time
- **Fast Loading**: Static HTML loads instantly
- **Free Hosting**: GitHub Pages hosts static sites for free
- **React Still Works**: Client-side JavaScript provides interactivity
- **SEO Friendly**: Search engines can crawl the static HTML

## Troubleshooting

**Issue**: Images not loading  
**Solution**: All images use `unoptimized: true` in config - already configured ✓

**Issue**: Routes not working  
**Solution**: GitHub Pages needs trailing slashes for folders. Use Link component from next/link ✓

**Issue**: 404 on refresh  
**Solution**: Static export handles this automatically with HTML files ✓

---

Your site is fully configured for static HTML export and GitHub Pages deployment!
