"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="gradient-text">Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`} style={{ transitionDelay: '0.2s' }} />
        </div>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`} style={{ transitionDelay: '0.1s' }}>
            I’m a Full Stack Software Engineer who enjoys building things that feel fast, clean and genuinely helpful. I lean on React, Python and modern frameworks, and I’m comfortable taking an idea from a rough sketch to something people can actually use.
          </p>
          <p className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`} style={{ transitionDelay: '0.2s' }}>
            Right now I’m wrapping up my Master’s in Computer Science at <span className="text-foreground font-semibold hover:text-primary transition-colors cursor-default">Pace University</span> (GPA 3.74) while building projects that focus on reliability, smooth UX and solid engineering under the hood.
          </p>
          <p className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`} style={{ transitionDelay: '0.3s' }}>
            I’ve contributed to both early-stage startups and established teams, shipping full-stack features, designing accessible UI components and keeping products stable. My toolkit includes React, JavaScript, Python, Flask, Firebase, PostgreSQL and whatever else helps create scalable, user-focused experiences.
          </p>
          <p className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`} style={{ transitionDelay: '0.4s' }}>
            Lately, I’ve been diving into AI agents and learning how to build and deploy them in real-world scenarios using tools like n8n and similar automation ecosystems. If you’re looking for someone who can jump in, understand the problem and build the thing that actually solves it, that’s what I do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


