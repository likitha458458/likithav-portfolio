import React from 'react';
import { FaGithub } from 'react-icons/fa';
import graphImage from '../assets/Graph.jpg';
import shieldImage from '../assets/shield.png';
import bgImage from '../assets/bgabout.png';

const Projects = () => {
  const projects = [
    {
      name: 'Predictive Model for Energy Consumption',
      image: graphImage,
      description: `This project focuses on improving building efficiency by predicting hourly energy usage. Using weather, occupancy, and sensor data, we trained multiple regression models—including linear and random forest regressors. The result: accurate energy estimates with a Mean Absolute Error (MAE) below 0.22 kWh. The pipeline included extensive data cleaning, feature selection, and scalable preprocessing using Pandas and Scikit-learn.`,
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Regression Models', 'Data Preprocessing']
    },
    {
      name: 'Financial Fraud Detection Engine',
      image: shieldImage,
      description: `In this project, we developed a hybrid detection engine combining rule-based logic and machine learning for real-time transaction analysis. Using Python, we implemented a Random Forest classifier alongside filters to flag suspicious transactions, maintaining latency under 500ms. This system enhances fraud detection while minimizing false positives, enabling scalable protection in high-volume financial systems.`,
      tech: ['Python', 'Random Forest', 'Rule-based Filters', 'Anomaly Detection', 'Machine Learning']
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">My Recent Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map(({ name, image, description, tech }, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-90 rounded-xl overflow-hidden shadow-lg hover:shadow-indigo-500 transition-all duration-300 hover:scale-[1.02] hover:ring-2 hover:ring-indigo-400"
            >
              {/* Top Image */}
              <img src={image} alt={name} className="w-full h-52 object-cover" />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-4">{name}</h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tech.map((item, i) => (
                    <span key={i} className="bg-indigo-600 text-xs px-3 py-1 rounded-full text-white">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/likitha458458"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 rounded-lg text-white font-medium hover:bg-indigo-700 transition"
          >
            <FaGithub size={20} /> View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
