# Portfolio Website Customization Guide

This is a modern, responsive portfolio website built with React and TypeScript. Follow this guide to customize it with your information.

## Getting Started

1. Navigate to the portfolio directory:
```bash
cd portfolio
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit the URL shown in the terminal (typically `http://localhost:5173`)

## Customization Guide

### 1. Personal Information (App.tsx)

Edit `src/App.tsx` to update your personal information:

```typescript
<Navbar
  githubUrl="https://github.com/YOUR_USERNAME"
  linkedinUrl="https://linkedin.com/in/YOUR_USERNAME"
/>

<Hero
  name="Your Full Name"
  title="Your Job Title"
  description="Your personal description and passion statement..."
  imageUrl="/path/to/your/photo.jpg"
/>
```

### 2. Profile Image

To add your profile picture:
- Place your image in the `public` folder (e.g., `public/profile.jpg`)
- Update the `imageUrl` prop in the Hero component: `imageUrl="/profile.jpg"`

### 3. Adding More Skills

The Skills section uses icons from `react-icons`. To add more skills:

Edit `src/components/Skills.tsx` and add to the `defaultSkills` array:

```typescript
import { SiPython } from 'react-icons/si'; // Import the icon first

// Add to the skills array:
{
  name: 'Python',
  icon: <SiPython />,
  color: '#3776AB', // Official brand color
}
```

**Finding Icons:**
- Visit [react-icons.github.io/react-icons](https://react-icons.github.io/react-icons/)
- Search for your technology (e.g., "Python", "MongoDB", "Vue")
- Import the icon at the top of the file
- Common icon libraries:
  - `Si` prefix: Simple Icons (brand icons like SiPython, SiMongodb)
  - `Fa` prefix: Font Awesome (general icons like FaReact, FaDocker)
  - `Di` prefix: Devicons (development icons)

**Example - Adding Python, MongoDB, and Vue:**

```typescript
import {
  // ... existing imports
  SiPython,
  SiMongodb,
  SiVuedotjs,
} from 'react-icons/si';

// Add these to the defaultSkills array:
{
  name: 'Python',
  icon: <SiPython />,
  color: '#3776AB',
},
{
  name: 'MongoDB',
  icon: <SiMongodb />,
  color: '#47A248',
},
{
  name: 'Vue.js',
  icon: <SiVuedotjs />,
  color: '#4FC08D',
}
```

### 4. Projects Section

Edit `src/components/Projects.tsx` to update the `defaultProjects` array:

```typescript
{
  title: 'Your Project Name',
  description: 'Detailed description of what the project does...',
  technologies: ['React', 'Node.js', 'MongoDB'], // Tech stack used
  githubUrl: 'https://github.com/yourusername/project',
  liveUrl: 'https://your-project-demo.com', // Optional
  imageUrl: '/project-screenshot.jpg', // Place image in public folder
}
```

**Adding Project Images:**
- Save screenshots in the `public` folder
- Reference them as `imageUrl: "/screenshot.jpg"`

### 5. Work Experience

Edit `src/components/Experience.tsx` to update the `defaultExperiences` array:

```typescript
{
  company: 'Company Name',
  position: 'Your Position',
  duration: 'Jan 2022 - Present',
  location: 'City, State or Remote',
  description: [
    'First achievement or responsibility',
    'Second achievement or responsibility',
    'Third achievement or responsibility',
  ],
  technologies: ['React', 'TypeScript', 'AWS'], // Optional
}
```

## Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Free)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy (automatic)

### Option 2: Netlify (Free)
1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Deploy

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run: `npm run deploy`

## Color Scheme

The portfolio uses a modern blue/purple gradient theme. To customize colors, search for these hex codes in the CSS files:

- `#60a5fa` - Primary blue
- `#a78bfa` - Secondary purple
- `#0f172a` - Dark background
- `#1e293b` - Medium background
- `#e2e8f0` - Light text

## Tips

1. **Keep it concise**: Focus on your best 3-5 projects
2. **Use high-quality images**: Optimize images before adding them
3. **Update regularly**: Keep your experience and projects current
4. **Test responsiveness**: Check how it looks on mobile devices
5. **Proofread**: Check for typos and grammar errors

## Need Help?

- React Icons: https://react-icons.github.io/react-icons/
- React Documentation: https://react.dev
- TypeScript Documentation: https://www.typescriptlang.org/docs/

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Icons** - Icon library
- **CSS3** - Styling with modern features
