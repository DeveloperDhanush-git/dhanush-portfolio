import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaMedal, FaTrophy, FaCertificate } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "MERN Developer Intern",
    company: "EL CODAMICS",
    location: "Coimbatore (On-Site)",
    duration: "Feb 2025 – May 2025",
  },
  {
    id: 2,
    role: "IT & Web Development Intern",
    company: "Baskethunt Pvt Ltd",
    location: "Remote",
    duration: "Oct 2024 – Dec 2024",
  },
  {
    id: 3,
    role: "Full Stack Developer Intern",
    company: "Codingraja Technologies Pvt Ltd",
    location: "Remote",
    duration: "Aug 2024 – Sep 2024",
  },
  {
    id: 4,
    role: "Web Developer Intern",
    company: "Octanet Services Pvt Ltd",
    location: "Remote",
    duration: "Jul 2024 – Aug 2024",
  },
  {
    id: 5,
    role: "Web Developer Intern",
    company: "Hunarintern",
    location: "Remote",
    duration: "Jun 2024 – Jul 2024",
  },
  {
    id: 6,
    role: "Web Developer Intern",
    company: "Systemtrom",
    location: "Remote",
    duration: "May 2024 – Jun 2024",
  },
];


const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const sectionTop = document.getElementById("experience")?.offsetTop || 0;
      const scrollY = window.scrollY;
      const progress = Math.min(((scrollY - sectionTop + windowHeight / 2) / windowHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section id="experience" >
      <Title>Experience  <p className="text-[18px] md:text-xl lg:text-2xl font-bold tracking-[4px] ml-2">10+ Months Internship Experience</p></Title>
     

      <TimelineContainer>
        <ProgressLine style={{ height: `${scrollProgress}%` }} />
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <StageCircle completed={scrollProgress > index * 25} />
            <Content>
              <Role>{exp.role}</Role>
              <Company>{exp.company}</Company>
              <Location>{exp.location}</Location>
              <Duration>{exp.duration}</Duration>
              <Description>{exp.description}</Description>
            </Content>
          </ExperienceCard>
        ))}
      </TimelineContainer>

    </Section>
  );
};

/* Animations */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { box-shadow: 0px 0px 10px rgba(255, 204, 0, 0.3); }
  100% { box-shadow: 0px 0px 20px rgba(255, 204, 0, 0.8); }
`;

// 🔴 Only changes are added media queries for responsiveness. The layout stays as you wanted.

const Section = styled.section`
  min-height: 100dvh;
  width: 100%;
  background: #fff;
  color: #111;
  padding: 100px 10vw;

  @media (max-width: 768px) {
    padding: 60px 5vw;
    padding-top:90px;
  }
`;

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 60px;
  color: #333;
  letter-spacing: 5px;
  background: linear-gradient(90deg, #aaa, #111);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 40px;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-left: 80px;

  @media (max-width: 768px) {
    padding-left: 50px;
  }
  @media (max-width: 480px) {
    padding-left: 30px;
  }
`;

const ProgressLine = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  width: 6px;
  background: linear-gradient(to bottom, #c0c0c0, #000000ff);
  transition: height 0.4s ease;
  height: 0;
  border-radius: 5px;
  @media (max-width: 768px) {
    left: 10px;
  }
  @media (max-width: 480px) {
    left: 0px;
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  box-shadow: 0 10px 20px rgba(192, 192, 192, 0.35);
  background: #fff;
  padding: 24px;
  margin: 60px 0;
  border-radius: 12px;
  transition: 0.4s;
  animation: ${fadeIn} 1s ease forwards;

  &:hover {
    transform: perspective(800px) rotateX(1deg) rotateY(1deg) scale(1.02);
    box-shadow: 0 4px 12px rgba(180, 180, 180, 0.2);
    background: #f6f6f6;
    border: 1px solid rgba(8, 8, 8, 0.2);
  }

  @media (max-width: 768px) {
    padding: 20px;
    margin: 40px 0;
  }
  @media (max-width: 480px) {
    padding: 16px;
    margin: 30px 0;
  }
`;

const StageCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${({ completed }) => (completed ? "#7b7b7bff" : "#aaa")};
  position: absolute;
  left: -72px;
  top: 25px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    left: -50px;
  }
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    left: -37px;
  }
`;

const Content = styled.div`
  margin-left: 20px;
`;

const Role = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: #111;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Company = styled.h4`
  font-size: 1.5rem;
  color: #d4af37;
  margin-top: 4px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Location = styled.p`
  font-size: 1.1rem;
  color: #777;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Duration = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: #999;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;



export default Experience;
