import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "My Portfolio",
    description: "Personal portfolio website built with React, Tailwind, and Framer Motion.",
    image: "/projects/portfolio.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/your-portfolio",
    live: "https://yourdomain.com",
  },
  {
    title: "Movie DB, Review and Rating App",
    description: "Movie review and rating app using MERN stack tech",
    image: "/projects/ecommerce.png",
    tech: ["React", "MongoDB", "Express", "Node" , "Tailwind"],
    github: "https://github.com/your-ecommerce",
    live: "https://ecommerce-site.com",
  },
  // Add more
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-12">
      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </div>
  );
}
