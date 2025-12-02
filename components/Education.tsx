"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const education = [
    {
      degree: "Master's Degree, Computer Science",
      institution: "Pace University",
      location: "New York, NY",
      period: "Sep 2023 - May 2025",
      gpa: "3.74",
      details: [
        "Focus on Advanced Software Engineering and System Design",
        "Coursework in Algorithms, Data Structures, and Cloud Computing",
        "Active involvement in coding competitions and tech projects",
      ],
    },
    {
      degree: "Bachelor of Engineering, Information Technology",
      institution: "University of Mumbai",
      location: "Mumbai, India",
      period: "Graduated Aug 2022",
      gpa: "",
      details: [
        "Built strong foundation in computer science fundamentals",
        "Completed E-Toll Management System as capstone project",
        "Developed skills in full-stack development and system architecture",
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 card-hover transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:rotate-12 hover:scale-110 group-hover:animate-bounce-in">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    {edu.gpa && (
                      <span className="flex items-center gap-1.5">
                        <Award size={14} />
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <ul className="space-y-2 ml-16">
                {edu.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className={`flex items-start text-sm text-muted-foreground transition-all duration-500 hover:text-foreground hover:translate-x-2 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ transitionDelay: `${(index * 0.1) + (detailIndex * 0.1)}s` }}
                  >
                    <span className="text-primary mr-2 mt-1 transition-transform duration-300 group-hover:scale-150">▹</span>
                    <span className="transition-all duration-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

