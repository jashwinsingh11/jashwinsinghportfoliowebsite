import { motion } from "framer-motion";
import styled from "styled-components";

const StyledServices = styled.section`
  .service-card {
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

const services = [
  {
    title: "Web Application Development",
    description: "Creating dynamic, responsive, and visually appealing web applications that provide seamless user experiences across all devices.",
  },
  {
    title: "Custom Software Development",
    description: "Designing and developing software solutions tailored to specific business needs, ensuring optimal performance and scalability.",
  },
  {
    title: "Mobile Application Development",
    description: "Building high-performing and feature-rich mobile apps for Android and iOS platforms, designed to enhance user engagement.",
  },
  {
    title: "Software Maintenance and Support",
    description: "Offering regular updates, troubleshooting, and performance optimization to ensure software remains functional and relevant over time.",
  },
  {
    title: "Code Review and Optimization",
    description: "Analyzing and refining codebases to improve efficiency, maintainability, and performance while adhering to best practices.",
  },
  {
    title: "API Integration and Development",
    description: "Developing and integrating APIs to enable seamless communication between software systems and improve functionality.",
  },
  {
    title: "Graphic Designing",
    description: "Delivering creative and impactful designs, including logos, banners, social media visuals, and branding materials that make a lasting impression.",
  },
  {
    title: "Database Design and Management",
    description: "Structuring, optimizing, and managing databases to ensure data integrity, security, and high-speed access.",
  },
  {
    title: "UI/UX Design",
    description: "Crafting user-centered designs that prioritize usability, accessibility, and aesthetic appeal to enhance the overall experience.",
  },
];

export const Services = () => {
  return (
    <StyledServices className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card bg-secondary p-6 hover:bg-secondary/80 transition-colors"
            >
              <div className="bg" />
              <div className="blob" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </StyledServices>
  );
};