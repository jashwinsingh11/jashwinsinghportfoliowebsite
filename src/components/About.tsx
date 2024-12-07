import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    "C++", "C#", "CSS", "HTML", "JavaScript", "Java", "Python",
    "PHP", "React", "React Native", "ASP.NET Core", "Spring Boot", 
    "Laravel", "MySQL", "SQL Server Management Studio", "Figma", 
    "Canva", "Adobe Photoshop", "Github", "Git"
    
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            About Me
          </h2>
          <p className="text-gray-600 text-lg mb-8">
          I am a final-year Software Engineering student at the University of the South Pacific (USP) with a deep passion for technology and a drive to innovate. With a solid foundation in computer science principles and programming languages, I am committed to applying my knowledge to solve real-world problems and build impactful software solutions.
Currently, I am enhancing my practical experience as a Programmer Intern at the Tertiary Scholarships and Loans Service (TSLS), where I contribute to designing, developing, and maintaining software applications to streamline internal processes. This internship has allowed me to sharpen my skills in both web and mobile development, working with modern tools and frameworks to deliver user-centric solutions.

Throughout my academic journey, I have developed a keen interest in areas like system design, algorithm optimization, and emerging technologies. I am constantly exploring new ways to expand my technical expertise and stay ahead of industry trends. Whether it’s experimenting with new frameworks, contributing to open-source projects, or diving into cutting-edge technologies like AI and machine learning, I’m always eager to learn and grow.

My goal is to become a software engineer who not only excels technically but also creates software that improves the user experience and drives meaningful change. I thrive on challenges and am motivated by the opportunity to contribute to projects that push the boundaries of innovation.
          </p>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">Skills</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-secondary px-4 py-2 rounded-full text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};