import { motion } from "framer-motion";

const skills = [
  { name: "C++", icon: "c++.svg" },
  { name: "Java", icon: "java.svg" },
  { name: "C#", icon: "csharp.svg" },
  { name: "Python", icon: "python.svg" },
  { name: "PHP", icon: "php.svg" },
  { name: "React", icon: "react.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "HTML", icon: "html.svg" },
  { name: "CSS", icon: "css.svg" },
  { name: "ASP.NET Core", icon: "dotnet.svg" },
  { name: "Spring Boot", icon: "spring.svg" },
  { name: "Laravel", icon: "laravel.svg" },
  { name: "MySQL", icon: "mysql.svg" },
  { name: "SQL Server Management Studio", icon: "sql.svg" },
  { name: "Figma", icon: "figma.svg" },
  { name: "Canva", icon: "canva.svg" },
  { name: "Adobe Photoshop", icon: "photoshop.svg" },
  { name: "Git", icon: "git.svg" },
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
                src={`/icons/${skill.icon}`}
                alt={skill.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm text-gray-400">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};