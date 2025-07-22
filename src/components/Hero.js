import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import * as THREE from 'three';

const roles = [
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React.js Developer",
    "Creative UI Engineer"
];

const Hero = () => {
    const heroRef = useRef(null);
    const canvasRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const role = roles[currentRoleIndex];
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(role.slice(0, i + 1));
            i++;
            if (i === role.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setTypedText('');
                }, 1000);
            }
        }, 100);
        return () => clearInterval(interval);
    }, [currentRoleIndex]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (heroRef.current) {
                const rect = heroRef.current.getBoundingClientRect();
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const x = (e.clientX - rect.left - centerX) * 0.1;
                const y = (e.clientY - rect.top - centerY) * 0.1;
                mouseX.set(x);
                mouseY.set(y);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);


    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        const particles = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 2000;
        }
        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({ color: 0x000000, size: 3 });
        const stars = new THREE.Points(particles, material);
        scene.add(stars);

        window.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 5;
            const y = (e.clientY / window.innerHeight - 0.5) * 5;
            stars.rotation.x = y * 0.1;
            stars.rotation.y = x * 0.1;
        });

        const animate = () => {
            requestAnimationFrame(animate);
            stars.rotation.x += 0.0005;
            stars.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };
        animate();
    }, []);

    return (
        <section id="home" ref={heroRef} className="min-h-dvh flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
            <div ref={canvasRef} className="absolute inset-0 z-0" />

            <div className="container mx-auto px-4 lg:px-10 text-center relative z-10 flex-grow flex flex-col justify-center">

                {/* 3D Floating Tech Icons (Black & White) */}
                <div className="absolute h-[400px] w-[90%] lg:h-[550px] ml-0 lg:ml-10 mt-8">
                    {[
                        { src: '/icons/react.png', alt: 'React', top: '1%', left: '5%' },
                        { src: '/icons/nodejs.png', alt: 'Node.js', top: '1%', right: '5%' },
                        { src: '/icons/mongodb.png', alt: 'MongoDB', bottom: '1%', left: '10%' },
                        { src: '/icons/javascript.png', alt: 'JavaScript', bottom: '1%', right: '10%' },
                        { src: '/icons/html.png', alt: 'HTML', top: '40%', left: '0%' },
                        { src: '/icons/css.png', alt: 'CSS', top: '40%', right: '0%' },
                        { src: '/icons/python.png', alt: 'PYTHON', top: '0%', left: '50%' },
                    ].map((icon, i) => (
                        <motion.img
                            key={i}
                            src={icon.src}
                            alt={icon.alt}
                            className="w-10 h-10 md:w-[90px] md:h-[90px] absolute pointer-events-none drop-shadow-md grayscale"
                            style={{ ...icon }}
                            animate={{
                                y: ['0%', '-8%', '0%'],
                                rotate: [0, 360, 0],
                                opacity: [0.7, 1, 0.7]
                            }}
                            transition={{
                                duration: 8 + Math.random() * 4,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }}
                        />
                    ))}
                </div>

                {/* Main Text */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <h1 className="text-[34px] lg:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
                        Hi, I'm Dhanush D<span className="animate-pulse">|</span>
                    </h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 mb-8 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        {typedText}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex justify-center gap-6 mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        <a
                            href="#portfolio"
                            className="px-6 py-3 text-white bg-black rounded-full text-sm md:text-base hover:shadow-xl hover:bg-gray-800 transition duration-300"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-black rounded-full text-sm md:text-base text-black hover:bg-black hover:text-white transition duration-300"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Down Animation */}
            <motion.div
                className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.8 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-black rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-black rounded-full mt-2"
                        animate={{ scaleY: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
