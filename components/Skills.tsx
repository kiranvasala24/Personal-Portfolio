"use client";

import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Skills = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java (Core, J2EE)", "Python", "C++", "PHP", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring", "Hibernate", "JUnit", "React", "Angular", "Tailwind CSS", "Flask"],
    },
    {
      title: "Web Technologies & Databases",
      skills: ["RESTful APIs", "JSON", "XML", "PostgreSQL", "Sybase", "DB2", "Firebase"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "Jenkins", "GitHub Actions", "Docker", "Jira", "Apache Tomcat", "JProfiler"],
    },
  ];

  return (
    <section
      id="skills"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding bg-secondary/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 card-hover transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display text-xl font-semibold mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`px-3 py-1.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default hover:scale-110 hover:rotate-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}
                    style={{ transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


