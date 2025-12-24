"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Front-End Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "UI / UX Designer",
    "QA Tester"
  ];
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000; // Pause before deleting
  const pauseAfterDelete = 500; // Pause before typing next

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentTitle.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      // Finished typing, pause then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Finished deleting, move to next title
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  const codeSnippets = ["{ code }", "</html>", "const", "function", "=>", "import", "class", "async", "await", "export"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-background via-background to-secondary/20 dark:from-background dark:via-background/95 dark:to-secondary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {codeSnippets.map((snippet, index) => (
          <div
            key={index}
            className="absolute text-muted-foreground/50 dark:text-muted-foreground/40 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${18 + Math.random() * 9}s`
            }}
          >
            {snippet}
          </div>
        ))}
      </div>
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <p className="text-sm md:text-base text-muted-foreground font-medium animate-fade-in-up">
                  Hi, my name is
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block animate-slide-in-left" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>Kirankumar</span>
                  <span className="block gradient-text animate-slide-in-left" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>Vasala</span>
                </h1>
                <div className="h-12 md:h-16 flex items-center justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                    I&apos;m a{" "}
                    <span className="gradient-text typing-cursor">
                      {displayText}
                    </span>
                  </p>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl lg:mx-0 mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
                Building scalable, user-focused applications with React, Python, and modern frameworks.
                Master&apos;s student at Pace University specializing in full-stack development and system design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gradient-start to-gradient-end text-white hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105 active:scale-95 button-bounce"
                  onClick={() => {
                    const element = document.getElementById("projects");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="hover:bg-secondary transition-all hover:scale-105 active:scale-95 hover:border-primary/50"
                  onClick={async () => {
                    try {
                      const response = await fetch("/Kirankumar Vasala_Full Stack Software Engineer.pdf");
                      if (!response.ok) throw new Error("File not found");
                      
                      const blob = await response.blob();
                      const url = window.URL.createObjectURL(blob);
                      const link = document.createElement("a");
                      link.href = url;
                      link.download = "Kirankumar Vasala_FullStackDeveloper(1).pdf";
                      document.body.appendChild(link);
                      link.click();
                      window.URL.revokeObjectURL(url);
                      document.body.removeChild(link);
                    } catch (error) {
                      alert("Resume file not found. Please add it to the public folder.");
                      console.error("Download failed:", error);
                    }
                  }}
                >
                  Download CV
                </Button>
              </div>

              <div className="flex gap-6 justify-center lg:justify-start pt-6 animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <a 
                  href="https://github.com/kiranvasala24/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110 hover:rotate-12 animate-float"
                  style={{ animationDelay: '0s' }}
                  aria-label="GitHub: kiranvasala24"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kirankumar-vasala/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110 hover:rotate-12 animate-float"
                  style={{ animationDelay: '0.2s' }}
                  aria-label="LinkedIn: Kirankumar Vasala"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:vasalak@gmail.com" 
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110 hover:rotate-12 animate-float"
                  style={{ animationDelay: '0.4s' }}
                  aria-label="Email: vasalak@gmail.com"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards', animationDuration: '1.8s', animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}>
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-primary/20 to-gradient-end/20 dark:from-primary/30 dark:to-gradient-end/30 dark:border-border/20 dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:scale-105 group-hover:shadow-primary/30">
                  <img 
                    src="/profile.jpg" 
                    alt="Kirankumar Vasala" 
                    className="w-full h-full object-cover dark:brightness-110 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-gradient-end rounded-xl opacity-20 blur-2xl dark:opacity-30 animate-pulse-slow transition-all duration-700 group-hover:opacity-40 group-hover:scale-110" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-tr from-gradient-end to-primary rounded-xl opacity-20 blur-2xl dark:opacity-30 animate-pulse-slow transition-all duration-700 group-hover:opacity-40 group-hover:scale-110" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

