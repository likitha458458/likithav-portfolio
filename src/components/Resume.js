import React from 'react';
import bgExperience from '../assets/bgabout.png';

const Resume = () => {
  const pdfUrl = '/Likitha_Vinjam_Resume.pdf'; // Make sure this file is inside your `public/` folder

  return (
    <section
      className="relative pt-20 px-4 md:px-12 text-white min-h-screen"
      style={{
        backgroundImage: `url(${bgExperience})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">My Resume</h2>

        {/* PDF Preview (for all devices) */}
        <div className="w-full h-[600px] md:h-[1000px] mb-10 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            frameBorder="0"
            title="Likitha Vinjam Resume"
          />
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a
            href={pdfUrl}
            download="Likitha_Vinjam_Resume.pdf"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
