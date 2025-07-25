@echo off
echo Building your improved portfolio...

echo Installing dependencies...
npm install

echo Building the project...
npm run build

echo Starting development server...
echo Your portfolio will be available at http://localhost:3000
echo Press Ctrl+C to stop the server

npm run dev