
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import SectionTitle from './SectionTitle';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const hasLink = project.url && project.url !== '#';

  const content = (
    <>
      <div className="overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.name}
          loading="lazy"
          className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white flex items-center justify-between">
          <span>{project.name}</span>
          {hasLink && (
            <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors ml-2" />
          )}
        </h3>
        <p className="text-gray-400 mt-2 flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full font-fira-code">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const cardClasses = "bg-[#1A2332] rounded-2xl overflow-hidden group flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-400/20 shadow-md border-b-2 border-transparent hover:border-cyan-400";

  if (hasLink) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={cardClasses} aria-label={`Ver detalhes do projeto ${project.name}`}>
        {content}
      </a>
    );
  }

  return <div className={cardClasses}>{content}</div>;
};

const Projects = (): React.ReactNode => {
  return (
    <section className="py-16">
      <div className="text-center">
        <SectionTitle>Projetos</SectionTitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
