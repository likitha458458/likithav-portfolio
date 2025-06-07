import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import bgContact from '../assets/bgabout.png';  // Update with your background image path

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3va29si',
        'template_y2omnru',
        form.current,
        'Pg8hAym6OhWSkrrLO'
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 text-white"
      style={{
        backgroundImage: `url(${bgContact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75" />

      {/* Animated form container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl bg-gray-900 bg-opacity-90 rounded-lg shadow-lg p-6 sm:p-8 mt-20"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 pb-2 text-center">
          Get in Touch
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <label className="text-sm font-semibold" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="from_name"
            placeholder="Your name"
            required
            className="p-2 sm:p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-indigo-400"
          />

          <label className="text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="from_email"
            placeholder="Your email"
            required
            className="p-2 sm:p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-indigo-400"
          />

          <label className="text-sm font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here"
            required
            className="p-2 sm:p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-indigo-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 sm:py-3 rounded font-semibold shadow"
          >
            Send Message
          </button>
        </form>

        {messageSent && (
          <p className="mt-4 text-green-400 font-semibold text-center">
            Thank you! Your message has been sent.
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
