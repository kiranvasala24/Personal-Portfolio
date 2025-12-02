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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 dark:bg-background/40 backdrop-blur-md border-b border-border/50 shadow-sm py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <button 
          onClick={() => scrollToSection("about")}
          className="flex items-center gap-3"
          aria-label="Go to top / Home"
        >
          <img src="/kv.svg" alt="KV" className="w-8 h-8" />
          <span className="sr-only">Kirankumar Vasala</span>
        </button>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-1 items-center bg-secondary/50 dark:bg-secondary/20 backdrop-blur-sm px-2 py-2 rounded-full border border-border/50">
            <button 
              onClick={() => scrollToSection("about")} 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-background dark:hover:bg-background/50 hover:scale-105 active:scale-95"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("skills")} 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-background dark:hover:bg-background/50 hover:scale-105 active:scale-95"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-background dark:hover:bg-background/50 hover:scale-105 active:scale-95"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("experience")} 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-background dark:hover:bg-background/50 hover:scale-105 active:scale-95"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("education")} 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all rounded-full hover:bg-background dark:hover:bg-background/50 hover:scale-105 active:scale-95"
            >
              Education
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:shadow-lg hover:shadow-primary/50 transition-all rounded-full hover:scale-105 active:scale-95"
            >
              Contact
            </Button>
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


