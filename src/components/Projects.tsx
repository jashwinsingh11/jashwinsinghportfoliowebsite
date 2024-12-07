import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "Payroll Management System",
      description: "A web-based application designed to automate payroll processes, including employee management, salary calculation, tax deductions, and report generation. Built to streamline HR operations and ensure accurate and efficient payroll management.",
      image: "https://private-user-images.githubusercontent.com/111979486/393498266-257cd061-7368-4d7f-8b30-1d2fbf5794a1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM1NjI3NjQsIm5iZiI6MTczMzU2MjQ2NCwicGF0aCI6Ii8xMTE5Nzk0ODYvMzkzNDk4MjY2LTI1N2NkMDYxLTczNjgtNGQ3Zi04YjMwLTFkMmZiZjU3OTRhMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwN1QwOTA3NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NzUxY2FiNDJiYjg2Zjg2YjIyNzJiZGI2NjMyOGFjNmNjY2JjY2E1ZTEyYzNmNTJhMmJmN2Y5N2U0ZDgwNjA2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.UAbfz8WvbsfP0kEi37fxMhbFYa0DfmXjxBauPW0vu3w",
      tags: ["Java", "HTML", "CSS", "JavaScript", "XML", "MySQL"],
    },
    {
      title: "USP CampusCart",
      description: "CampusCart is a web-based Buy-Sell platform designed specifically for students to create a streamlined, secure, and user-friendly online marketplace within a campus community. The application allows students to register as buyers or sellers, enabling them to list, advertise, and purchase products and services directly from peers.",
      image: "https://private-user-images.githubusercontent.com/111979486/380688869-f808c241-36f3-4928-8b56-67e9bc086d14.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM1NTg0ODYsIm5iZiI6MTczMzU1ODE4NiwicGF0aCI6Ii8xMTE5Nzk0ODYvMzgwNjg4ODY5LWY4MDhjMjQxLTM2ZjMtNDkyOC04YjU2LTY3ZTliYzA4NmQxNC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwN1QwNzU2MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MDlkMGIwNmFjOTEzMDYwNDc4MWQ1OGIxNDZmODRmYWFkY2QyYjg0MWY1ZTQxZTZmNzE2MmUwYzk3ZDJlMTg2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lkhOAldbYEK0GQlSz03LBbpZQt1zaMSW791qm9EF1vM",
      tags: ["PHP", "Blade", "JavaScript", "CSS", "Laravel", "MySQL"],
    },
    {
      title: "Analytics Dashboard",
      description: "A web-based tool designed to visualize and analyze data through interactive charts, graphs, and tables. Built to provide actionable insights, track key metrics, and support data-driven decision-making for businesses.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["JavaScript", "HTML", "CSS", "Java", "D3.js", "MySQL"],
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website designed to showcase projects, skills, and achievements. it provides a professional online presence with an interactive and user-friendly interface. This website serves as a digital resume to highlight my work and contributions in the field of software development.",
      image: "https://private-user-images.githubusercontent.com/111979486/393499871-8d596994-8218-4a9f-99cb-8ce7205e8f6d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM1NjQ1MTAsIm5iZiI6MTczMzU2NDIxMCwicGF0aCI6Ii8xMTE5Nzk0ODYvMzkzNDk5ODcxLThkNTk2OTk0LTgyMTgtNGE5Zi05OWNiLThjZTcyMDVlOGY2ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIwN1QwOTM2NTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZTVmNGU3NzIyZDMwODkzMDZkNTFmNTU3YTY1YjNhYmM4ODhmNzdjNDdjZDMxZDYyYmEwOTBjZGIwM2VhNWYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0GJkH4X36rJrFgEJt1IeTos2PGoljhFv2eB8CbkH-Xw",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },

  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
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
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};