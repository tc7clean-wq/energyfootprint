@echo off
REM Energy Footprint Deployment Script for Windows
REM This script helps deploy your app to GitHub and Vercel

echo 🚀 Energy Footprint Deployment Script
echo =====================================

REM Check if git is initialized
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
)

REM Check if files are staged
git status --porcelain > temp_status.txt
set /p status_content=<temp_status.txt
del temp_status.txt

if "%status_content%"=="" (
    echo ✅ No changes to commit
) else (
    echo 📝 Adding files to Git...
    git add .
    
    echo 💾 Committing changes...
    git commit -m "Deploy Energy Footprint app - %date%"
)

REM Check if remote origin exists
git remote get-url origin >nul 2>&1
if %errorlevel%==0 (
    echo 🔄 Pushing to GitHub...
    git push origin main
    echo ✅ Successfully pushed to GitHub!
) else (
    echo ⚠️  No GitHub remote found. Please set up your GitHub repository first:
    echo    1. Create a new repository on GitHub
    echo    2. Run: git remote add origin https://github.com/YOUR_USERNAME/energy-footprint.git
    echo    3. Run: git branch -M main
    echo    4. Run: git push -u origin main
)

echo.
echo 🎯 Next Steps:
echo    1. Go to https://vercel.com
echo    2. Import your GitHub repository
echo    3. Deploy your app!
echo.
echo 📚 For detailed instructions, see DEPLOYMENT.md

pause
