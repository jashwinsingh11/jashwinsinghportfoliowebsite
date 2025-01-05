import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

export const Hero = () => {
  const handleResumeRequest = () => {
    const emailSubject = "Resume Request - Professional Software Engineer Portfolio Inquiry";
    const emailBody = "Dear Jashwin Singh,\n\nI came across your portfolio and was impressed by your experience and skills as a Software Engineer. I would greatly appreciate if you could share your detailed resume with me.\n\nThank you for your time and consideration.\n\nBest regards";
    const mailtoLink = `mailto:jashwinsinghfj11@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div 
            className="mb-8 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-64 h-64 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full"></div>
              <img
                src="/lovable-uploads/JashwinProfilePic.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 font-Geraldine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary">Jashwin Singh</span>
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl mb-6 font-Geraldine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-primary">Software Engineer | Programmer</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-Geraldine"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            As dedicated Software Engineering student and a Programmer with a passion for crafting innovative solutions to complex problems. With expertise in designing, developing, and maintaining high-quality software applications, I thrive in creating impactful projects that drive success. Whether it's building dynamic applications, simplifying coding concepts, or exploring cutting-edge technologies, my goal is to deliver excellence and value through every line of code.
          </motion.p>
          <motion.div 
            className="flex gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              whileHover={{ scale: 1.2, color: "#FF3232" }}
              href="https://github.com/jashwinsingh11" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: "#FF3232" }}
              href="https://www.instagram.com/jashwinsingh11/" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: "#FF3232" }}
              href="https://www.linkedin.com/in/jashwinsingh" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.2, color: "#FF3232" }}
              href="https://www.facebook.com/Jashwinz?mibextid=ZbWKwL" 
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
          </motion.div>
          <motion.button 
            onClick={handleResumeRequest}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-primary/90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};