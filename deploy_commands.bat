@echo off
echo === PORTFOLIO DEPLOYMENT COMMANDS ===
echo.
echo 1. Open Command Prompt in this folder
echo 2. Run these commands one by one:
echo.
echo git init
echo git add .
echo git commit -m "Deploy improved portfolio"
echo git remote add origin https://github.com/hawkh/personal-portfolio.git
echo git branch -M main
echo git push -u origin main
echo.
echo After pushing, run:
echo npm run build
echo git add docs/
echo git commit -m "Add build files"
echo git push
echo.
echo 3. Enable GitHub Pages:
echo    - Go to https://github.com/hawkh/personal-portfolio/settings/pages
echo    - Source: Deploy from a branch
echo    - Branch: main
echo    - Folder: / (root)
echo    - Click Save
echo.
echo    - Folder: /docs
echo    - Click Save
echo.
echo 5. Wait 2-3 minutes for deployment
echo.
echo Your portfolio will be live at:
echo https://hawkh.github.io/personal-portfolio/
echo.
pause