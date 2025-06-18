import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Coming soon",
    description: "Personal portfolio website built with React, Tailwind, and Framer Motion.",
    image: "/projects/portfolio.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/fahmazp",
    live: "https://example.com",
  },
  {
    title: "Coming soon",
    description: "Movie review and rating app using MERN stack tech",
    image: "/projects/ecommerce.png",
    tech: ["React", "MongoDB", "Express", "Node" , "Tailwind"],
    github: "https://github.com/fahmazp",
    live: "https://example.com",
  },
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
