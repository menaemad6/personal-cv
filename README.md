<div align="center">
  <h1>Resume Forge</h1>
  <p>A modern, responsive digital resume built with React, TypeScript, and shadcn/ui</p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#customization">Customization</a>
  </p>
</div>

---

## ✨ Features

- **Professional Layout**: Clean and modern resume design optimized for both digital viewing and printing
- **Responsive Design**: Perfect display across all device sizes from mobile to desktop
- **Print-Friendly**: One-click printing functionality for easy PDF conversion
- **Component-Based Structure**: Easily customizable sections for experience, skills, education, and more
- **Modern UI**: Built with shadcn/ui components for a sleek, professional appearance

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/shadcn_ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
</p>

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite for lightning-fast development
- **Routing**: React Router for navigation
- **State Management**: React Query for API data fetching
- **Form Handling**: React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd nasef-resume-forge

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to see your resume in action!

## 📋 Project Structure

```
src/
├── components/     # UI components (Header, Experience, Skills, etc.)
├── pages/          # Page components
├── lib/            # Utility functions and helpers
├── hooks/          # Custom React hooks
└── App.tsx         # Main application component
```

## 🌐 Deployment

You can deploy this resume to various platforms:

- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Deploy directly from your Git repository
- **GitHub Pages**: Use GitHub Actions for continuous deployment

## 🎨 Customization

### Personal Information

Edit `src/components/Header.tsx` to update your name, title, and contact information.

### Content Sections

Modify or add sections by editing the relevant component files:
- `src/components/Summary.tsx`
- `src/components/Experience.tsx`
- `src/components/Skills.tsx`
- `src/components/Education.tsx`

### Styling

Customize colors and styling by editing:
- `tailwind.config.ts` for theme customization
- `src/index.css` for global styles

## 📄 License

This project is open-source and available under the MIT License.

## 💼 Author

Created by Mena Emad Nasef - [Portfolio](https://mina-emad.com) | [GitHub](https://github.com/menaemad6)

---

<p align="center">Made with ❤️ using React and TypeScript</p>
