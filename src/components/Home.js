import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../assets/img3.jpeg';
import bgImage from '../assets/bgabout.png';

const Home = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0D1117]/90 backdrop-blur-sm" />

      <div className="relative z-10 px-6 py-12 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-[#C9D1D9] space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
  Hi, I’m <span className="text-[#58A6FF]">Likitha Vinjam</span>
</h1>


          <h2 className="text-xl md:text-2xl bg-gradient-to-r from-[#58A6FF] via-[#1F6FEB] to-[#58A6FF] bg-clip-text text-transparent font-medium">
            <Typewriter
              words={['Full Stack Developer', 'Java Developer', 'Software Engineer']}
              loop
              cursor
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-md md:text-lg leading-relaxed max-w-xl">
            I specialize in building cloud-native, scalable applications using{' '}
            <span className="text-[#58A6FF] font-semibold">Java</span>,{' '}
            <span className="text-[#58A6FF] font-semibold">React</span>, and{' '}
            <span className="text-[#58A6FF] font-semibold">JavaScript</span>. Passionate about clean code,
            intuitive UIs, and solving real-world challenges.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-4 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/likitha-vinjam-739114156"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58A6FF] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/likitha458458"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#58A6FF] transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:vlikitha0698@gmail.com"
              className="hover:text-[#58A6FF] transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Profile Image */}
       {/* Profile Image */}
{/* Profile Image */}
<div className="md:w-1/2 flex justify-center mt-12 md:mt-16">
  <img
    src={profileImage}
    alt="Likitha Vinjam"
    className="w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] object-cover opacity-80 mix-blend-screen rounded-none shadow-none"
    style={{
      filter: 'brightness(1.1) contrast(1.05)',
    }}
  />
</div>






      </div>
    </section>
  );
};

export default Home;
