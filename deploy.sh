#!/bin/bash

# Energy Footprint Deployment Script
# This script helps deploy your app to GitHub and Vercel

echo "🚀 Energy Footprint Deployment Script"
echo "====================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
fi

# Check if files are staged
if [ -z "$(git status --porcelain)" ]; then
    echo "✅ No changes to commit"
else
    echo "📝 Adding files to Git..."
    git add .
    
    echo "💾 Committing changes..."
    git commit -m "Deploy Energy Footprint app - $(date)"
fi

# Check if remote origin exists
if git remote get-url origin >/dev/null 2>&1; then
    echo "🔄 Pushing to GitHub..."
    git push origin main
    echo "✅ Successfully pushed to GitHub!"
else
    echo "⚠️  No GitHub remote found. Please set up your GitHub repository first:"
    echo "   1. Create a new repository on GitHub"
    echo "   2. Run: git remote add origin https://github.com/YOUR_USERNAME/energy-footprint.git"
    echo "   3. Run: git branch -M main"
    echo "   4. Run: git push -u origin main"
fi

echo ""
echo "🎯 Next Steps:"
echo "   1. Go to https://vercel.com"
echo "   2. Import your GitHub repository"
echo "   3. Deploy your app!"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT.md"
