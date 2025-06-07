import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/profile.jpeg';
import techImage from '../assets/tech-bg.jpg';
import techImage1 from '../assets/bgabout.png';



const Home = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center font-sans"
      style={{ backgroundImage: `url(${techImage1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/95 via-[#161B22]/85 to-[#0D1117]/95 z-0" />

      {/* Content */}
      <div className="relative z-10 text-[#8B949E] text-center px-4 max-w-5xl w-full space-y-6">
        {/* Greeting */}
        <h1 className="text-5xl font-extrabold tracking-tight flex justify-center items-center gap-2 text-white">
          <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          Hello, I’m <span className="text-[#58A6FF]">Likitha Vinjam</span>
        </h1>

        {/* Typewriter */}
        <h2 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-[#58A6FF] via-[#1F6FEB] to-[#58A6FF] bg-clip-text text-transparent">
          <Typewriter
            words={['Full Stack Developer', 'Java Developer', 'Software Engineer']}
            loop
            cursor
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Likitha Vinjam"
            className="w-40 h-40 rounded-full border-4 border-[#1F6FEB] shadow-xl"
          />
        </div>

        {/* About Me Text */}
        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-[#8B949E]">
          I build cloud-native, scalable applications with{' '}
          <span className="text-[#1F6FEB] font-semibold">Java</span>,{' '}
          <span className="text-[#1F6FEB] font-semibold">React</span>, and{' '}
          <span className="text-[#1F6FEB] font-semibold">JavaScript</span>. I'm passionate about clean code, intuitive UIs, and solving real-world problems with tech. Outside of work, I mentor, explore new technologies, and enjoy nature.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-2xl text-[#8B949E] mt-4">
          <a
            href="https://www.linkedin.com/in/likitha-vinjam-739114156"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58A6FF]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/likitha458458"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58A6FF]"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:vlikitha0698@gmail.com"
            className="hover:text-[#58A6FF]"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
