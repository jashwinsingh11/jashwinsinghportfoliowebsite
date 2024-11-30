import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-8 relative">
            <div className="w-64 h-64 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
              <img
                src="/lovable-uploads/357f8a4f-96e4-4711-91dd-b5d2cde809fc.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, It's <span className="text-primary">Alex</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            I'm a <span className="text-primary">Web Developer</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-all">
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};