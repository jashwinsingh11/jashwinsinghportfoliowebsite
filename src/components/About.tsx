import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python",
    "AWS", "Docker", "GraphQL", "MongoDB"
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
            With over 5 years of experience in software development, I specialize in
            building scalable web applications using modern technologies. I'm
            passionate about creating efficient, maintainable code and delivering
            exceptional user experiences.
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