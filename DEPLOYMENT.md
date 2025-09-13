# Deployment Guide

This guide will help you deploy your Energy Footprint app to GitHub and Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (free tier available)
- Git installed on your computer

## Step 1: Deploy to GitHub

### 1.1 Create a new repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `energy-footprint` (or your preferred name)
5. Make it public (required for free Vercel deployment)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

### 1.2 Initialize Git and push to GitHub

Open your terminal/command prompt in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Energy Footprint app"

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/energy-footprint.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Select your `energy-footprint` repository
5. Click "Import"

### 2.2 Configure Vercel settings

Vercel should automatically detect this as a static site. The settings should be:

- **Framework Preset**: Other
- **Root Directory**: `./` (leave as default)
- **Build Command**: Leave empty (no build needed)
- **Output Directory**: Leave empty (serves from root)
- **Install Command**: Leave empty

### 2.3 Deploy

1. Click "Deploy"
2. Wait for deployment to complete (usually 1-2 minutes)
3. Your app will be available at `https://energy-footprint.vercel.app`

## Step 3: Custom Domain (Optional)

If you want a custom domain:

1. In your Vercel dashboard, go to your project
2. Click on "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Step 4: Automatic Deployments

Once connected, Vercel will automatically deploy your app whenever you push changes to your GitHub repository:

```bash
# Make changes to your files
# Then commit and push
git add .
git commit -m "Update app features"
git push origin main
```

Vercel will automatically detect the changes and redeploy your app.

## File Structure

Your deployed app will include:

```
energy-footprint/
├── index.html          # Main application
├── app.js             # Application logic
├── style.css          # Styles and mobile optimizations
├── test.html          # Test suite
├── README.md          # Documentation
├── package.json       # Project configuration
├── vercel.json        # Vercel deployment config
├── .gitignore         # Git ignore rules
└── DEPLOYMENT.md      # This file
```

## Troubleshooting

### Common Issues

1. **Build fails**: Make sure all file paths are correct and files exist
2. **App doesn't load**: Check browser console for errors
3. **Styling issues**: Ensure all CSS files are properly linked
4. **JavaScript errors**: Check that all dependencies (Chart.js, Tailwind) are loading

### Local Testing

Before deploying, test locally:

```bash
# Install serve (if not already installed)
npm install -g serve

# Serve the app locally
serve .

# Or use the npm script
npm start
```

Visit `http://localhost:3000` to test your app.

## Performance Optimization

Your app is already optimized for production:

- ✅ Static files (no server required)
- ✅ CDN delivery via Vercel
- ✅ Gzip compression
- ✅ Browser caching
- ✅ Mobile-optimized
- ✅ Accessibility compliant

## Security

The app includes basic security headers via `vercel.json`:

- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## Support

If you encounter issues:

1. Check the Vercel deployment logs
2. Test locally first
3. Verify all files are committed to GitHub
4. Check browser console for JavaScript errors

## Next Steps

After successful deployment:

1. Share your app URL with others
2. Consider adding analytics (Google Analytics, etc.)
3. Set up custom domain if desired
4. Monitor usage and performance in Vercel dashboard
