 import React from "react";
import { motion } from "framer-motion";
import { FaMicrosoft, FaAws } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const Education = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-20 px-6 md:px-12">
      <motion.div {...fadeInUp}>
        <div className="max-w-6xl mx-auto">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Education</h1>
              <h3 className="text-xl mb-4 text-indigo-400">
                Academic Background & Certifications
              </h3>
              <p className="text-gray-300">
                A strong foundation in Computer Science, refined through formal education and validated by industry-recognized certifications.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education Section */}
      <div className="max-w-6xl mx-auto mt-12 space-y-8">
        <motion.div {...fadeInUp}>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
            <h2 className="text-2xl font-semibold mb-1">🎓 Master’s in Computer Science</h2>
            <p>Southern Illinois University Edwardsville, Illinois</p>
            <p className="text-gray-400">Aug 2022 – May 2024</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>
                Developed strong analytical skills through coursework in Data Analytics, Database Management Systems, and Engineering Research Methods.
              </li>
              <li>
                Gained hands-on experience with operating systems and computer architecture, building efficient software solutions and understanding hardware-software interaction.
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div {...fadeInUp}>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
            <h2 className="text-2xl font-semibold mb-1">🎓 Bachelor’s in Electronics & Computer Science Engineering</h2>
            <p>Koneru Lakshmaiah University, Vijayawada, India</p>
            <p className="text-gray-400">Aug 2015 – Apr 2019</p>
            <ul className="list-disc ml-5 space-y-2 text-gray-300">
              <li>
                Mastered programming fundamentals and data structures through courses in C, Java, and Object-Oriented Programming.
              </li>
              <li>
                Applied problem-solving and software design skills to multiple projects, building a solid foundation in software development and engineering.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div {...fadeInUp} className="max-w-6xl mx-auto mt-12">
  <h2 className="text-2xl font-bold mb-6 text-indigo-400 text-center">📜 Certifications</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Microsoft Azure Fundamentals */}
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 hover:scale-105 transition-transform">
      <div className="flex items-center gap-4 mb-2">
        <FaMicrosoft className="text-blue-600" size={28} />
        <a
          href="https://www.credly.com/badges/e518e783-99a0-4b2d-8a34-aed044cb0a44/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:underline text-lg"
        >
          Microsoft Certified Azure Fundamentals (AZ-900)
        </a>
      </div>
      <p className="text-sm text-gray-400">Credential ID: I286-7688</p>
    </div>

    {/* Microsoft Azure AI Fundamentals */}
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500 hover:scale-105 transition-transform">
      <div className="flex items-center gap-4 mb-2">
        <FaMicrosoft className="text-blue-600" size={28} />
        <a
          href="https://www.credly.com/badges/2f1f8fc5-03c3-4e5b-9ffa-8b1852a03bf2/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:underline text-lg"
        >
          Microsoft Certified Azure AI Fundamentals (AI-900)
        </a>
      </div>
      <p className="text-sm text-gray-400">Credential ID: I276-3080</p>
    </div>

    {/* AWS Coursera */}
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-yellow-500 hover:scale-105 transition-transform">
      <div className="flex items-center gap-4 mb-2">
        <FaAws className="text-orange-400" size={28} />
        <a
          href="https://www.coursera.org/account/accomplishments/verify/G58YJ3YAZ8FB"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:underline text-lg"
        >
          Getting Started with Data Analytics on AWS – Coursera
        </a>
      </div>
    </div>

    {/* AWS Solutions Architect */}
    <div className="bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-yellow-500 hover:scale-105 transition-transform">
      <div className="flex items-center gap-4 mb-2">
        <FaAws className="text-orange-400" size={28} />
        <a
          href="https://www.credly.com/badges/ec5af036-266f-4b3e-aea3-effbf827f35d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 font-semibold hover:underline text-lg"
        >
          AWS Certified Solutions Architect – Associate
        </a>
      </div>
    </div>
  </div>
</motion.div>

    </div>
  );
};

export default Education;
