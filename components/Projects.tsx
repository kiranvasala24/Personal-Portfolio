"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "E-Toll Management System",
      description:
        "Python-based toll automation that pairs OCR plate detection with real-time validation to reduce manual intervention and boost accuracy by 90%.",
      tags: ["Python", "OCR", "Automation", "PostgreSQL", "System Design"],
      github: "https://github.com/kiranvasala24/E-Toll-Management-System",
      demo: "#",
      image: "/e-toll.png",
      placeholder: "E",
    },
    {
      title: "Landing Page for Kia Motors",
      description:
        "High-converting automotive landing page focused on motion, premium UI polish, and responsive layouts optimised for dealership campaigns.",
      tags: ["TypeScript", "Next.js", "GSAP", "Design Systems"],
      github: "https://github.com/kiranvasala24/business-profile",
      demo: "#",
      image: "/KIA.png",
      placeholder: "K",
    },
    {
      title: "Wayfair Experience Redesign",
      description:
        "A modern Wayfair-inspired shopping page with micro-interactions, product cards, and a frictionless login funnel tailored for furniture retail.",
      tags: ["JavaScript", "UI/UX", "Animations", "Responsive"],
      github: "https://github.com/kiranvasala24/Wayfair-Website",
      demo: "#",
      image: "/wayfair.png",
      placeholder: "W",
    },
    {
      title: "Car-Website",
      description:
        "Hero-led landing page for an automobile brand, blending bold typography, scroll-triggered reveals, and lightweight JS enhancements.",
      tags: ["HTML", "CSS", "Vanilla JS", "Motion"],
      github: "https://github.com/kiranvasala24/Car-Website",
      demo: "#",
      image: "/car.png",
      placeholder: "A",
    },
    {
      title: "Tried-to-Replicate-Spotify",
      description:
        "A responsive business profile template with reusable card components, theming support, and section-level scroll animations.",
      tags: ["TypeScript", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/kiranvasala24/Tried-to-Replicate-Spotify",
      demo: "#",
      image: "/replica.png",
      placeholder: "B",
    },
  ];

  // For simplicity, show 1 card per slide on mobile, 2 on tablet, 3 on desktop
  // We'll use CSS to handle responsiveness
  const projectsPerView = 1; // Base: 1 card per slide
  const totalSlides = projects.length; // One slide per project for simplicity

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible, totalSlides]);

  return (
    <section
      id="projects"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 dark:bg-background/40 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous projects"
          >
            <ChevronLeft size={20} className="text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background/80 dark:bg-background/40 backdrop-blur-md border border-border/50 shadow-lg flex items-center justify-center hover:bg-primary/10 dark:hover:bg-primary/20 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next projects"
          >
            <ChevronRight size={20} className="text-foreground" />
          </button>

          {/* Carousel Wrapper */}
          <div 
            ref={carouselRef}
            className="overflow-hidden px-4 md:px-0"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full flex-shrink-0 flex justify-center px-4">
                  <Card className="bg-card border border-border rounded-xl overflow-hidden card-hover transition-all duration-500 h-full flex flex-col group max-w-xl w-full">
                    {/* Project Image */}
                    <div className="relative w-full h-36 overflow-hidden bg-gradient-to-br from-primary/20 via-gradient-end/20 to-primary/10 dark:from-primary/30 dark:via-gradient-end/30 dark:to-primary/20 group/image">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-125"
                        onError={(e) => {
                          // Fallback to gradient placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.placeholder-content')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'placeholder-content absolute inset-0 flex items-center justify-center';
                            placeholder.innerHTML = `<div class="text-6xl font-bold gradient-text opacity-60">${project.placeholder || project.title.charAt(0)}</div>`;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent pointer-events-none" />
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="font-display text-xl mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 text-xs transition-all hover:scale-105 hover:border-primary/50"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Github size={14} className="mr-1.5 transition-transform group-hover:rotate-12" />
                            Code
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <ExternalLink size={14} className="mr-1.5 transition-transform group-hover:rotate-12" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


