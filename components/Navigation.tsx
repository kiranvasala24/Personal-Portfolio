"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Only use theme after component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dispatchActiveSection = (id: string) => {
    try {
      window.dispatchEvent(new CustomEvent('activeSection', { detail: { id } }));
    } catch (e) {
      // ignore
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    // dispatch immediately so other components (like Contact) can react
    dispatchActiveSection(id);
    // set active immediately for instant feedback
    setActiveSection(id);
  };

  useEffect(() => {
    // Observe main sections and update activeSection when they enter center of viewport
    const ids = ["home", "about", "skills", "projects", "experience", "education", "contact"];
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id) setActiveSection(id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navButtonClass = (id: string) => {
    const base = 'px-4 py-2 text-sm font-medium transition-all rounded-full hover:scale-105 active:scale-95';
    const active = 'bg-gradient-to-r from-gradient-start to-gradient-end text-white border-transparent';
    const inactive = 'bg-transparent text-foreground hover:bg-gradient-to-r hover:from-gradient-start hover:to-gradient-end hover:text-white';
    return `${base} ${activeSection === id ? active : inactive}`;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? "bg-background/80 dark:bg-background/40 backdrop-blur-md border-transparent shadow-sm py-4"
        : "bg-transparent py-6 hover:bg-background/80 dark:hover:bg-background/40 hover:backdrop-blur-md hover:border-b hover:border-transparent hover:shadow-sm hover:py-4"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <button 
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-3"
          aria-label="Go to top / Home"
        >
          <img src="/kv.svg" alt="KV" className="w-14 h-14" />
          <span className="sr-only">Kirankumar Vasala</span>
        </button>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-1 items-center bg-secondary/50 dark:bg-secondary/20 backdrop-blur-sm px-2 py-2 rounded-full border border-border/50">
            <button onClick={() => scrollToSection("home")} className={navButtonClass('home')}>Home</button>
            <button onClick={() => scrollToSection("about")} className={navButtonClass('about')}>About</button>
            <button onClick={() => scrollToSection("skills")} className={navButtonClass('skills')}>Skills</button>
            <button onClick={() => scrollToSection("projects")} className={navButtonClass('projects')}>Projects</button>
            <button onClick={() => scrollToSection("experience")} className={navButtonClass('experience')}>Experience</button>
            <button onClick={() => scrollToSection("education")} className={navButtonClass('education')}>Education</button>
            <Button onClick={() => scrollToSection("contact")} className={navButtonClass('contact')}>Contact</Button>
          </div>
          
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full bg-secondary dark:bg-secondary/30 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-all hover:scale-110 active:scale-95 hover:rotate-180"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon size={18} className="text-foreground transition-transform" />
              ) : (
                <Sun size={18} className="text-foreground transition-transform" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


