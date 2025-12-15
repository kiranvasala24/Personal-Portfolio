"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Experience = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "FilmyAI",
      period: "Oct 2024 - Present",
      description: "Engineering full-stack features in a fast-paced startup environment with focus on scalability and UX.",
      achievements: [
        "Engineered full-stack features using React, JavaScript, and Python (Flask), integrating Firebase and PostgreSQL",
        "Designed and iterated on UI components using Figma, prioritizing high-quality UX and accessibility",
        "Collaborated across teams to develop and deploy agile, user-centric solutions while adapting to evolving requirements",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Showcase",
      period: "Aug 2024 - Oct 2024",
      description: "Developed accessible UI components and enhanced user navigation with modern frameworks.",
      achievements: [
        "Developed and tested accessible UI components with React and Tailwind CSS, ensuring screen reader compatibility",
        "Assisted with backend API integration and executed functional test cases for smooth client-server interactions",
        "Documented QA testing processes and collaborated with developers to troubleshoot user-facing features",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Flymax Multi Services",
      period: "Aug 2022 - Jul 2023",
      description: "Delivered full-stack features for robust, real-time platform functionality in a dynamic startup.",
      achievements: [
        "Delivered full-stack features using React, JavaScript, and Python (Flask) with Firebase and PostgreSQL integration",
        "Crafted and refined UI components with Figma, focusing on exceptional UX and accessibility",
        "Coordinated across teams to develop user-centric solutions, iterating rapidly to align with customer needs",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Solar Secure Solutions",
      period: "Jun 2021 - Jun 2022",
      description: "Implemented secure REST APIs and automated deployment strategies for customer-facing platforms.",
      achievements: [
        "Implemented and tested secure REST APIs, improving data retrieval speed and reducing backend errors by 30%",
        "Integrated automated test cases using JavaScript testing frameworks across multiple devices",
        "Developed containerized deployment strategies using shell scripts, enhancing deployment efficiency",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`section-padding bg-secondary/30 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto rounded-full" />
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 card-hover transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li
                    key={achievementIndex}
                    className={`flex items-start text-sm text-muted-foreground transition-all duration-500 hover:text-foreground hover:translate-x-2 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                    }`}
                    style={{ transitionDelay: `${(index * 0.1) + (achievementIndex * 0.1)}s` }}
                  >
                    <span className="text-primary mr-2 mt-1 transition-transform duration-300 group-hover:scale-150">▹</span>
                    <span className="transition-all duration-300">{achievement}</span>
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

export default Experience;


