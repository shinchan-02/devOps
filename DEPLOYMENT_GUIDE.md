# Portfolio Deployment Guide

## Issues Fixed

### 1. **Import Path Errors**
- Fixed `App.tsx` imports from `./components/` to `./` (files are in root directory)
- Fixed `constants.tsx` import from `./types` to `./type`
- Fixed `Navbar.tsx` import from `../constants` to `./constants`

### 2. **TypeScript Errors**
- Changed `ChartBar` to `BarChart3` (correct lucide-react icon name)
- Removed unused imports from `Navbar.tsx` (Github, Linkedin, Mail, CONTACT_INFO)
- Fixed TypeScript configuration to exclude `vite.config.ts` from compilation

### 3. **Build Configuration**
- Added `package.json` with React 18.2.0 and Vite 5.0.8
- Added `vite.config.ts` with correct base path `/devOps/`
- Added `tsconfig.json` for TypeScript compilation
- Updated `index.html` to work with Vite build system

### 4. **Deployment Setup**
- Created `.github/workflows/deploy.yml` for automated GitHub Pages deployment
- Updated `.gitignore` to exclude `node_modules`, `dist`, and `package-lock.json`

## How to Deploy

### Step 1: Commit and Push Changes
```bash
git add .
git commit -m "Fix portfolio build and deployment configuration"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository: https://github.com/shinchan-02/devOps
2. Click **Settings** → **Pages**
3. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
4. Save the settings

### Step 3: Wait for Deployment
- The GitHub Actions workflow will automatically run when you push
- Check the **Actions** tab to monitor the build and deployment
- Once complete, your site will be live at: https://shinchan-02.github.io/devOps/

## Local Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Visit http://localhost:5173 to preview

### Build for Production
```bash
npm run build
```
Output will be in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## File Structure
```
devOps/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment workflow
├── assets/
│   └── photo.jpg
├── dist/                   # Build output (gitignored)
├── node_modules/           # Dependencies (gitignored)
├── App.tsx                 # Main application component
├── Navbar.tsx              # Navigation component
├── Terminal.tsx            # Terminal animation component
├── SectionTitle.tsx        # Section title component
├── constants.tsx           # Data constants
├── type.ts                 # TypeScript interfaces
├── index.tsx               # React entry point
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── .gitignore              # Git ignore rules
└── Satyam_Agarwal_devOps.pdf
```

## Technologies Used
- React 18.2.0
- TypeScript 5.3.3
- Vite 5.0.8
- Tailwind CSS (CDN)
- Lucide React (icons)
- GitHub Actions (deployment)

## Notes
- The portfolio uses Vite for fast development and optimized production builds
- All React/TypeScript code is compiled into static files in the `dist/` folder
- GitHub Actions automatically builds and deploys on every push to main branch
- The base path is set to `/devOps/` to match the GitHub Pages repository name
