import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl border bg-white dark:bg-neutral-900 shadow hover:shadow-lg transition-all"
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition duration-300 group-hover:opacity-90"
        loading="lazy"
      />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 text-xs">
          {project.tech.map((item, i) => (
            <span key={i} className="bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full">
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
