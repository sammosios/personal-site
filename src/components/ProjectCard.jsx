import React from 'react';
import './ProjectCard.css';
import { ExternalLink } from 'lucide-react';
import ActionButton from './ActionButton';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h2 className="project-card-title">{title}</h2>
      </div>
      <div className="project-card-body">
        <p>{description}</p>
      </div>
      {link && (
        <div className="project-card-actions">
          <ActionButton
            icon={ExternalLink}
            label="View Project"
            onClick={() => window.open(link, '_blank')}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
