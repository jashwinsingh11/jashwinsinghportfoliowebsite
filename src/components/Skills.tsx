import { motion } from "framer-motion";

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
    <section className="py-20 bg-background">
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
              className="bg-secondary p-4 rounded-lg flex flex-col items-center justify-center aspect-square hover:bg-primary/20 transition-colors"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};