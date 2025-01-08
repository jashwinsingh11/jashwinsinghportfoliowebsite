import { motion } from "framer-motion";
import styled from "styled-components";

const StyledProjects = styled.section`
  .project-card {
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

export const Projects = () => {
  const projects = [
    {
      title: "Payroll Management System",
      description: "A web-based application designed to automate payroll processes, including employee management, salary calculation, tax deductions, and report generation. Built to streamline HR operations and ensure accurate and efficient payroll management.",
      image: "./images/PayrollSystem.png",
      tags: ["Java", "HTML", "CSS", "JavaScript", "XML", "MySQL"],
    },
    {
      title: "USP CampusCart",
      description: "CampusCart is a web-based Buy-Sell platform designed specifically for students to create a streamlined, secure, and user-friendly online marketplace within a campus community. The application allows students to register as buyers or sellers, enabling them to list, advertise, and purchase products and services directly from peers.",
      image: "./images/CampusCartProject.png",
      tags: ["PHP", "Blade", "JavaScript", "CSS", "Laravel", "MySQL"],
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "A web-based multiplayer Tic-Tac-Toe game implemented using Python for server-side socket programming and JavaScript for client-side interactivity. Features real-time gameplay, server-side validation, and a responsive UI.",
      image: "./images/TicTacToe.png",
      tags: ["Python", "Socket Programming", "TCP/IP", "JavaScript", "HTML", "CSS", "Networking"],
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website designed to showcase projects, skills, and achievements. it provides a professional online presence with an interactive and user-friendly interface. This website serves as a digital resume to highlight my work and contributions in the field of software development.",
      image: "./images/PortfolioProject.png",
      tags: ["React", "JavaScript", "Tailwind CSS"],
    },
    /*{
        title: "BulaFit App",
        description: "BulaFit is a fitness app inspired by the vibrant culture and natural beauty of Fiji. It helps users embrace a healthy lifestyle by offering features like workout tracking, meal planning with local Fijian recipes, and personalized fitness plans. Designed with an interactive and user-friendly interface, BulaFit promotes well-being while celebrating the essence of Fiji. \n\n*This app is currently in development and will continue to evolve with new features and enhancements.*",
        image: "./images/InProgress.png",
        tags: ["React Native", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "OpenAI API", "Firebase Firestore"]
    },
    {
      title: "In Progress - Research and Development",
      description: "\n\n*Currently in the research and planning phase. This project is still being conceptualized, and new features and enhancements will be explored as development progresses.*",
      image: "./images/InProgress.png",
      tags: ["Research", "Planning", "Ideation"]
    }
    */
  ];

  return (
    <StyledProjects id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg" />
              <div className="blob" />
              <div className="relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary px-3 py-1 rounded-full text-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </StyledProjects>
  );
};