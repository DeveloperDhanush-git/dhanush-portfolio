import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    bgColor: 'bg-gradient-to-br from-blue-800 to-blue-500',
    textColor: 'text-white',
    title: 'Course Management',
    image: '/assets/image2.png',
    buttonColor: 'bg-white text-black',
    studentLink: 'https://github.com/student-module-link',
    tutorLink: 'https://github.com/tutor-module-link',
  },
  {
    id: 2,
    bgColor: 'bg-gradient-to-br from-gray-900 to-blue-900',
    textColor: 'text-white',
    title: 'Department Website',
    image: '/assets/image.png',
    buttonColor: 'bg-white text-black',
    link: 'https://your-virtual-tour-link.com',
  },
  {
    id: 3,
    bgColor: 'bg-gradient-to-br from-green-700 to-green-500 ',
    textColor: 'text-white',
    title: 'E-Commerce',
    image: '/assets/image2.png',
    buttonColor: 'bg-white text-black',
    link: 'https://your-ecommerce-link.com',
  },
];

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const height = container.clientHeight;
      const page = Math.round(scrollPosition / height);
      setCurrentPage(page);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
  ref={containerRef}
  className="h-dvh w-full overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scrollbar-hide relative"
>

      <div className="fixed right-1 lg:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-20 rounded-full transition-all duration-300 ${
              currentPage === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>

      {projects.map((project, index) => (
        <section
          key={index}
          className={`h-dvh flex flex-col items-center justify-center ${project.bgColor} ${project.textColor} snap-start relative`}
        >
          <motion.h2
  className="pt-5 lg:pt-10 mb-5 text-[40px] sm:text-[50px] md:text-[100px] lg:text-[120px] font-semibold text-left px-6 sm:px-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {project.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-xl shadow-2xl overflow-hidden z-10 flex justify-center items-center"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {project.id === 1 ? (
            <div className="flex flex-row gap-5 mt-10">
              <motion.a
                href={project.studentLink}
                target="_blank"
                rel="noopener noreferrer"
className="px-4 py-2 sm:px-6 sm:py-2 text-base sm:text-lg rounded-md font-semibold shadow-md bg-white text-black transition-all duration-700 hover:bg-black/80 hover:text-white"
                whileHover={{ scale: 1.05 }}
              >
                Student Module
              </motion.a>
              <motion.a
                href={project.tutorLink}
                target="_blank"
                rel="noopener noreferrer"
className="px-4 py-2 sm:px-6 sm:py-2 text-base sm:text-lg rounded-md font-semibold shadow-md bg-white text-black transition-all duration-700 hover:bg-black/80 hover:text-white"
                whileHover={{ scale: 1.05 }}
              >
                Tutor Module
              </motion.a>
            </div>
          ) : (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-10 px-4 py-2 sm:px-6 sm:py-2 text-base sm:text-lg rounded-md font-semibold shadow-md ${project.buttonColor} transition-all duration-700 hover:bg-black/80 hover:text-white`}
              whileHover={{ scale: 1.05 }}
            >
              View project
            </motion.a>
          )}
        </section>
      ))}
    </div>
  );
};

export default ProjectsSection;
