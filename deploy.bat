@echo off
echo Deploying to GitHub Pages...

echo Building project...
npm run build

echo Copying resume to out folder...
copy "public\Sai_Ruthvik MLE.pdf" "out\Sai_Ruthvik MLE.pdf"
copy "public\SaiRuthvik.pdf" "out\SaiRuthvik.pdf"

echo Adding .nojekyll file...
echo. > out\.nojekyll

echo Deployment files ready in 'out' folder
echo Commit and push to GitHub to deploy automatically

git add .
git commit -m "Deploy improved portfolio"
git push origin main

echo Portfolio will be live at: https://hawkh.github.io/[repository-name]/