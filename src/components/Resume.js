import React from 'react';
import bgExperience from '../assets/bgabout.png'; // Use the same background image as before

const Resume = () => {
  const pdfUrl = process.env.PUBLIC_URL + '/Likitha_Vinjam_Resume.pdf';

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

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 pb-2 text-center">
          My Resume
        </h2>

        {/* Full-width PDF preview */}
        <div className="w-full h-[1000px] mb-12 rounded-lg shadow-xl border border-gray-700 overflow-hidden">
          <embed
            src={pdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </div>

        {/* Download button */}
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
