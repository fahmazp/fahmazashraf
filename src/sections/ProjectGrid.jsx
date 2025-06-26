import ProjectsCards from "./Projects-cards";

const projects = [
  {
    title: "HoneyPopcorn - Review & Rating App",
    description: "A dynamic, full-featured movie database and review platform built with the MERN stack, enabling users to browse, rate, and review films in real time,with secure user authentication and an admin dashboard for content management.",
    image: "/works/ss-movie.png",
    tech: ["React", "MongoDB", "Express", "Node" , "Tailwind" , "+ More"],
    github: "https://github.com/fahmazp",
    live: "https://movie-review-frontend-ten.vercel.app/",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website built with React, Tailwind, and Framer Motion.",
    image: "/works/ss-portfolio.png",
    tech: ["React", "Tailwind", "Framer Motion" , "+ More"],
    github: "https://github.com/fahmazp",
    live: "https://fahmazashraf.vercel.app/",
  },
  {
    title: "GTA IV",
    description: "Personal portfolio website built with React, Tailwind, and Framer Motion.",
    image: "/works/shotsnapp-1750956820.43.png",
    tech: ["Javascript", "React", "Tailwind", "+ More"],
    github: "https://github.com/fahmazp",
    live: "https://fahmazashraf.vercel.app/",
  },
];

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
      {projects.map((proj, index) => (
        // <ProjectCard key={index} project={proj} />
        <ProjectsCards key={index} project={proj}/>
      ))}
    </div>
  );
}
