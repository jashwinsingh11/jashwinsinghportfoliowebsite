import { motion } from "framer-motion";
import styled from "styled-components";

const StyledSkills = styled.section`
  .skill-card {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    z-index: 1;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    z-index: 2;
    background: rgba(255, 255, 255, .05);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid rgba(255, 255, 255, 0.1);
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ea384c;
    opacity: 0.5;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

const skills = [
  { name: "C++", icon: "/icons/c++.svg" },
  { name: "C#", icon: "/icons/csharp.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "React Native", icon: "/icons/reactnative.svg" },
  { name: "ASP.NET Core", icon: "/icons/dotnet.svg" },
  { name: "Spring Boot", icon: "/icons/spring.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "SQL Server Management Studio", icon: "/icons/sql.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Canva", icon: "/icons/canva.svg" },
  { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Github", icon: "/icons/github.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

export const Skills = () => {
  return (
    <StyledSkills className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-card bg-secondary p-4 rounded-lg flex flex-col items-center justify-center aspect-square hover:bg-primary/20 transition-colors"
            >
              <div className="bg" />
              <div className="blob" />
              <div className="relative z-10">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                  onError={(e) => {
                    console.error(`Failed to load image: ${skill.icon}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm text-gray-400">{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </StyledSkills>
  );
};