import React from 'react';
import { motion } from 'framer-motion';
import bgExperience from '../assets/bgabout.png'; // Adjust path as needed

const experienceData = [
  {
    company: "Dell Technologies",
    role: "Full-Stack Developer",
    duration: "Aug 2024 – Present | Remote, US",
    points: [
      "Developed and maintained Spring Boot microservices for borrower data validation and document management using JPA with PostgreSQL.",
      "Built Angular components with reactive forms and ensured accessibility through regular performance audits.",
      "Refactored legacy components to modular structures, reducing technical debt and aligning with CI/CD protocols.",
      "Migrated on-premise services to Azure App Services and Azure SQL using Terraform and Azure DevOps pipelines.",
      "Participated in secure code reviews and maintained high test coverage and code quality standards.",
      "Integrated identity verification and document upload APIs, enhancing schema validation and test automation.",
      "Prototyped RAG-based document classification with Azure OpenAI using a LangChain Python wrapper connected to Spring Boot."
    ]
  },
  {
    company: "VMware",
    role: "Software Engineer",
    duration: "Aug 2019 – May 2022 | Bangalore, IN",
    points: [
      "Built WCAG-compliant Angular UIs for customer portals using HTML5, SCSS, and TypeScript.",
      "Integrated frontend with Spring Boot REST APIs and used RxJS to handle asynchronous data and error states.",
      "Refactored Angular components and applied centralized state management with NgRx for reusability.",
      "Boosted UI unit test coverage from 42% to 78% using Jasmine and Karma, reducing UI bugs significantly.",
      "Improved load times by applying lazy loading, route guards, and dynamic imports, cutting TTI by 30%."
    ]
  },
  {
    company: "VMware",
    role: "Software Engineer Intern",
    duration: "Dec 2018 – Jul 2019 | Bangalore, IN",
    points: [
      "Built Angular dashboards with Chart.js and RxJS for real-time customer feedback visualization.",
      "Created reactive onboarding forms with custom validators and dynamic field logic.",
      "Collaborated with backend developers to resolve JSON serialization mismatches in Spring Boot APIs and Swagger contracts."
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative pt-20 px-6 md:px-12 text-white min-h-screen"
      style={{
        backgroundImage: `url(${bgExperience})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-8 pb-2 text-center">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-10 px-4 md:px-0">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-1">
                  {exp.role} – <span className="text-indigo-400">{exp.company}</span>
                </h3>
                <p className="text-gray-400 mb-3">{exp.duration}</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
