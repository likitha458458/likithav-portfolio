import React from 'react';
import {
  FaJava, FaReact, FaMobileAlt, FaCloud, FaDocker, FaGitAlt, FaGithub, FaPython, FaDatabase, FaTools, FaAws
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiKubernetes, SiJenkins, SiAzuredevops, SiGraphql, SiPostman, SiSwagger, SiJavascript, SiTypescript
} from 'react-icons/si';
import techImage1 from '../assets/bgabout.png';

const About = () => (
  <section
    id="about"
    className="relative w-full min-h-screen text-white flex items-center justify-center px-6 py-20 sm:px-12"
    style={{
     // backgroundImage: 'url("/assets/bgabout.png")',
       backgroundImage: `url(${techImage1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundBlendMode: 'overlay',
    }}
  >
    {/* Full screen dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-0" />

    {/* Main Content */}
    <div className="relative z-10 w-full max-w-6xl px-6 py-12 rounded-xl">
      <h2 className="text-5xl font-extrabold mb-10 text-center text-white">
        Know Who I'M
      </h2>

      <div className="mb-14 text-lg leading-relaxed space-y-6 text-gray-200 text-center">
        <p>
          Hi, I’m <strong className="text-indigo-400">Likitha Vinjam</strong> — a results-driven Full Stack Developer with <strong>4+ years</strong> of experience crafting scalable, secure, and user-focused web applications.
        </p>
        <p>
          I specialize in building seamless user experiences and robust backend systems using <strong>Java, Spring Boot, React</strong>, and modern DevOps tools. I’m passionate about delivering performant, cloud-native solutions that drive business impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-100">
        {/* Core Skills */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-indigo-400">Core Skills</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <FaJava className="text-indigo-500 text-2xl" /> Java (8+), OOP, Multithreading
            </li>
            <li className="flex items-center gap-3">
              <SiSpringboot className="text-green-500 text-2xl" /> Spring Boot, Hibernate, REST APIs
            </li>
            <li className="flex items-center gap-3">
              <FaReact className="text-cyan-400 text-2xl" /> React, Angular, Redux
            </li>
            <li className="flex items-center gap-3">
              <SiGraphql className="text-pink-500 text-2xl" /> REST & GraphQL APIs
            </li>
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-500 text-2xl" /> AWS, Azure, Cloud Deployments
            </li>
            <li className="flex items-center gap-3">
              <SiKubernetes className="text-blue-600 text-2xl" /> Docker, Kubernetes, Microservices
            </li>
            <li className="flex items-center gap-3">
              <SiJenkins className="text-red-500 text-2xl" /> CI/CD: Jenkins, Azure DevOps
            </li>
            <li className="flex items-center gap-3">
              <SiSwagger className="text-yellow-400 text-2xl" /> Postman, Swagger
            </li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-3xl font-semibold mb-6 text-indigo-400">Tools & Technologies</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <FaGithub className="text-gray-300 text-2xl" /> Git, GitHub, Bitbucket
            </li>
            <li className="flex items-center gap-3">
              <SiMongodb className="text-green-700 text-2xl" /> MongoDB, CosmosDB, MySQL
            </li>
            <li className="flex items-center gap-3">
              <FaDatabase className="text-yellow-600 text-2xl" /> Oracle, SQL Server
            </li>
            <li className="flex items-center gap-3">
              <FaAws className="text-orange-500 text-2xl" /> AWS Services, Azure Fundamentals
            </li>
            <li className="flex items-center gap-3">
              <FaDocker className="text-blue-600 text-2xl" /> Docker, Kubernetes
            </li>
            <li className="flex items-center gap-3">
              <SiJavascript className="text-yellow-400 text-2xl" /> JavaScript, TypeScript
            </li>
            <li className="flex items-center gap-3">
              <FaPython className="text-blue-400 text-2xl" /> Python, C++, C
            </li>
            <li className="flex items-center gap-3">
              <FaTools className="text-indigo-500 text-2xl" /> IBM BPM, Camunda, DevTools
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
