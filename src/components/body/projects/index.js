import React from "react";
import "./projects.css";
import { projectData } from "../../data/projects.js";
import ProjectCard from "./project-card";
import Separator from "../../common/socials/sepator/separator";
function Projects() {
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {projectData.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
