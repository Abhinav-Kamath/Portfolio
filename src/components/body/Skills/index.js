import React from "react";
import Separator from "../../common/socials/sepator/separator";
import "./skills.css";
import { skillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import { isCompositeComponent } from "react-dom/cjs/react-dom-test-utils.production.min";
function Skills() {
  const data = skillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
