import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMui,
  SiFramer,
  SiPython,
  SiNodedotjs,
  SiPhp,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "#e44d26" },
  { name: "CSS3", icon: SiCss3, color: "#264de4" },
  { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
  { name: "React.js", icon: SiReact, color: "#61dafb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Material UI", icon: SiMui, color: "#007fff" },
  { name: "Framer Motion", icon: SiFramer, color: "#e535ab" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3c873a" },
  { name: "PHP", icon: SiPhp, color: "#777bb4" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#00758f" },
  { name: "Git & GitHub", icon: SiGithub, color: "#000000" },
];

export default function Skills() {
  return (
    <div className="min-h-dvh bg-white flex items-center justify-center py-20 lg:mt-0 mt-10">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10 max-w-7xl">
        {skills.map(({ name, icon: Icon, color }, index) => (
          <motion.div
            key={index}
            whileHover={{
              rotateX: 10,
              rotateY: 10,
              scale: 1.05,
            }}
            className="relative w-32 h-32 rounded-xl flex flex-col items-center justify-center cursor-pointer overflow-hidden group transition-all"
            style={{
              boxShadow: `0 0 20px ${color}`,
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
              style={{
                backgroundImage: `linear-gradient(135deg, transparent 0%, ${color} 100%)`,
              }}
            ></div>
            <div className="relative z-10 text-5xl group-hover:text-white transition duration-300">
              <Icon color={color} />
            </div>
            <p className="absolute bottom-3 text-sm font-bold text-black group-hover:text-white z-10 transition">
              {name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
