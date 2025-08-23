import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, MonitorSpeaker } from "lucide-react";
import { Project } from "@/types";

type ProjectSectionProps = {
  projects: Project[];
};

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  if (!projects || projects.length === 0) return null;

  const featuredProjects = projects.filter((p) => p.is_featured);
  const otherProjects = projects.filter((p) => !p.is_featured);

  const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`glass-effect rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Project Image */}
      {project.image_url && (
        <div className="relative overflow-hidden h-48 md:h-64">
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}

      <div className="p-8">
        {/* Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          {project.category === "mobile" ? (
            <Smartphone className="w-4 h-4 text-amber-500" />
          ) : (
            <MonitorSpeaker className="w-4 h-4 text-amber-500" />
          )}
          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold capitalize">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300 ${
            featured ? "text-2xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies?.slice(0, featured ? 8 : 5).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-800 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > (featured ? 8 : 5) && (
            <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-full text-sm">
              +{project.technologies.length - (featured ? 8 : 5)} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300 font-medium"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-300 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.app_store_url && (
            <a
              href={project.app_store_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              App Store
            </a>
          )}
          {project.play_store_url && (
            <a
              href={project.play_store_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium"
            >
              Play Store
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Projects</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
