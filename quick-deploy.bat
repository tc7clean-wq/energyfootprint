@echo off
echo 🚀 Quick Deploy to GitHub and Vercel
echo ====================================

echo 📦 Initializing Git...
git init
git add .
git commit -m "Deploy Energy Footprint app"

echo 🔗 Please create a GitHub repository first:
echo    1. Go to https://github.com/new
echo    2. Name it "energy-footprint"
echo    3. Make it PUBLIC
echo    4. Click "Create repository"
echo.
echo Then run: git remote add origin YOUR_REPO_URL
echo And: git push -u origin main
echo.
echo After that, go to https://vercel.com and import your repo!

pause

