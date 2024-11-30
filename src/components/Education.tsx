import { motion } from "framer-motion";

const education = [
  {
    title: "Tertiary Education - University Of The South Pacific",
    year: "2022 - Present",
    description: "Bachelor of Software Engineering",
  },
  {
    title: "Secondary Education - Xavier College",
    year: "2017 - 2021",
    description: "Mathematics, English, Physics, Computer Science, Technical Drawing",
  },
  {
    title: "Primary Education - Moto Sanatan Primary School",
    year: "2009 - 2016",
    description: "General Education",
  },
];

export const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          My <span className="text-primary">Education</span>
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 pb-8 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-primary"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary"></div>
              <div className="bg-secondary p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-2">{item.year}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};