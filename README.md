# Portfolio Website with Scroll Animations

A modern, responsive portfolio website built with **Next.js**, **React**, and **TypeScript**, featuring smooth scroll-triggered animations using Intersection Observer API.

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient effects and glass-morphism design
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎭 **Scroll Animations** - Smooth fade-in and slide-up animations on scroll
- ⚡ **Performance Optimized** - Built with Next.js 14 for optimal performance
- 🎯 **Type-Safe** - Written in TypeScript
- 🎨 **Tailwind CSS** - Utility-first styling with custom components
- 🔍 **SEO Friendly** - Meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technology Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Intersection Observer API
- **UI Components:** Custom components with shadcn/ui patterns

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navigation.tsx      # Navigation bar with scroll effect
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── About.tsx           # About section with scroll reveal
│   ├── Skills.tsx          # Skills section with staggered animations
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Work experience timeline
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── card.tsx
│       └── badge.tsx
├── hooks/
│   └── use-intersection-observer.ts  # Custom hook for scroll animations
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Customization

### Update Personal Information

Edit the component files in the `components/` directory:

- **Name & Title:** Update `Hero.tsx`
- **About Me:** Update `About.tsx`
- **Skills:** Modify the `skillCategories` array in `Skills.tsx`
- **Projects:** Update the `projects` array in `Projects.tsx`
- **Experience:** Modify the `experiences` array in `Experience.tsx`
- **Contact Info:** Update `Contact.tsx` and `Footer.tsx`

### Modify Colors & Theme

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 217.2 91.2% 59.8%;
  --gradient-start: 217.2 91.2% 59.8%;
  --gradient-end: 190.6 95.1% 50%;
  /* ... other colors */
}
```

### Animation Settings

Adjust animation parameters in `hooks/use-intersection-observer.ts`:

```typescript
{
  threshold: 0.1,        // When to trigger (0-1)
  rootMargin: "0px",     // Margin around viewport
  freezeOnceVisible: true // Animate only once
}
```

## 📝 Key Features Explained

### Scroll-Triggered Animations

All sections use the `useIntersectionObserver` hook that triggers animations when elements enter the viewport:

```tsx
const { elementRef, isVisible } = useIntersectionObserver();

<section
  ref={elementRef}
  className={`transition-all duration-700 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }`}
>
```

### Staggered Animations

Items within sections animate with delays for a cascading effect:

```tsx
style={{ transitionDelay: `${index * 0.15}s` }}
```

### Smooth Navigation

Navigation links smoothly scroll to sections:

```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click!

### Deploy to Other Platforms

- **Netlify:** Connect your Git repository
- **AWS Amplify:** Use the Amplify CLI
- **Self-hosted:** Run `npm run build && npm start`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kirankumar Vasala**

- Portfolio: [Your Portfolio URL]
- GitHub: [[@kiranvasala24](https://github.com/kiranvasala24)]
- LinkedIn: [Kirankumar Vasala](https://www.linkedin.com/in/kirankumar-vasala/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ and Next.js






