import { CodeXml, ExternalLink, GithubIcon } from "lucide-react";

export default function ProjectsCards({ project }) {
  return (

<div className="bg-zinc-200 dark:bg-zinc-950/80 rounded-lg border border-zinc-800/25 overflow-hidden transition-all shadow-[3px_3px_0px_#1e40af,6px_6px_0px_#a8e600] dark:shadow-[3px_3px_0px_#2563eb,6px_6px_0px_#a8e600] hover:translate-x-1 hover:translate-y-1">
    
    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex">
        <div className="h-3 w-3 rounded-full mr-2 bg-red-500"></div>
        <div className="h-3 w-3 rounded-full mr-2 bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-[#25C63A]"></div>
        </div>
            <a href={project.live} target="_blank" className="text-xs text-white hover:text-lime-400">{project.title}</a> 
    </div>

    <div className="p-4 space-y-2">
    <img src={project.image} alt={project.title} 
        className="w-full object-cover rounded-sm transition duration-300 group-hover:opacity-90"
        loading="lazy"
        />

    <div className="px-1 py-1.5">
        <h3 className="text-lg font-bold capitalize mb-2">{project.title}</h3>
        <p className="text-sm  text-muted-foreground">{project.description}</p>
    </div>

    <div className="flex flex-wrap gap-1.5 text-xs">
          {project.tech.map((item, i) => (
            <span key={i} className="bg-blue-300/70 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded-full">
              {item}
            </span>
          ))}
    </div>
    
    <div className="flex gap-3 pt-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"  className="hover:text-lime-600 dark:hover:text-lime-400">
              <ExternalLink size={16} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-lime-600 dark:hover:text-lime-400">
              <CodeXml size={17} />
            </a>
          )}
    </div>

    </div>

</div>
  )
}