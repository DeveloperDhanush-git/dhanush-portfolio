import React, { useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    window.location.href = `mailto:dhanushlingam6363@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
  };

  return (
    <div className="w-full min-h-dvh bg-[#0f0f0f] flex items-center justify-center text-white px-4 py-20">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-16">
        {/* LEFT SECTION */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-8 justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl pt-20 lg:pt-0 md:text-8xl font-extrabold bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent">
            Let's Talk
          </h1>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              I’d love to hear about your project or answer any questions.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full md:w-[60%] bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-10 flex flex-col gap-6 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex flex-col gap-2 relative">
            <input
              type="text"
              name="name"
              required
              className="w-full p-4 bg-transparent border-b border-white outline-none text-white placeholder-gray-400"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <input
              type="email"
              name="email"
              required
              className="w-full p-4 bg-transparent border-b border-white outline-none text-white placeholder-gray-400"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <textarea
              name="message"
              required
              rows="5"
              className="w-full p-4 bg-transparent border-b border-white outline-none text-white placeholder-gray-400 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-4 px-6 rounded-md border-2 border-white text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
