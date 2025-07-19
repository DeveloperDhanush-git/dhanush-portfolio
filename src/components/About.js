import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";
import styled from "styled-components";

const AboutContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100dvh;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  height: 100%;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
    gap: 0;
`;

const LeftText = styled.div`
  max-width: 100%;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  background: linear-gradient(90deg, #ffffff, #818080ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 5px;
  letter-spacing:5px;
`;

const Paragraph = styled.p`
 font-size: 1.2rem;
  line-height: 1.5rem;
  font-family: "Newsreader", serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  color: #cfcfcf;

  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.9rem;
  }

  @media (min-width: 992px) {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 2.4rem;
  }
`;


const AboutMe = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        canvasRef.current.appendChild(renderer.domElement);

        const particles = new THREE.BufferGeometry();
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 2000;
        }

        particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1.5 });
        const stars = new THREE.Points(particles, material);
        scene.add(stars);

        window.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 5;
            const y = (e.clientY / window.innerHeight - 0.5) * 5;
            gsap.to(stars.rotation, { x: y * 0.1, y: x * 0.1, duration: 0.5 });
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
        <AboutContainer>
            <CanvasContainer ref={canvasRef} />

            <Content
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <LeftText>
                    <Title>About Me</Title>
                    <Paragraph>
                        I am a dedicated and passionate Full Stack Developer with a strong focus on delivering visually stunning
                        and fully functional websites. With <strong>1 year of internship experience</strong>, I specialize in building
                        responsive full-stack applications, developing CRM systems, and transforming complex <strong>Figma
                            designs into pixel-perfect real websites with Responsive design</strong>
                        <br />
                        <br />
                        <em>What You Can Expect from Me:</em> <br />
                        - Expert at turning ideas into production-ready websites<br />
                        - Specialized in building CRM solutions tailored to business needs<br />
                        - Clear understanding of user-centered design and performance<br />
                        - Efficient collaboration with designers & backend engineers<br />
                        - High-quality, responsive, and scalable development standards
                    </Paragraph>
                    
                </LeftText>

              
            </Content>
        </AboutContainer>
    );
};

export default AboutMe;
