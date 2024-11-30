import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            I create beautiful, functional, and user-friendly web applications
            using modern technologies.
          </p>
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};