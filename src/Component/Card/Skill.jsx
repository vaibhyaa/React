/* eslint-disable react/prop-types */
import React from "react";
import './style.css'
import skillData from './skillData.json'


const Skill = ({eachSkill}) => {
  // console.log(eachSkill.level);
  
  return (
    <div className="skill" style={{ backgroundColor: eachSkill.color }}>
      <span>{eachSkill.skill}</span>
      {/* this is imp of multiple conditions rendering  */}
      <span>
        {eachSkill.level === "beginner" && "🔰"}
        {eachSkill.level === "intermediate" && "👍"}
        {eachSkill.level === "advanced" && "💪"}
      </span>
    </div>
  );
};

const SkillSet = () => {
  return (
    <>
      <div className="skill-list">
        <ol>
          {
            skillData.skills.map((eachSkill)=>(
              <li key={eachSkill.skill}>
                <Skill eachSkill={eachSkill}/>
              </li>
            ))
          }
        </ol>
      </div>
    </>
  );
};

export default SkillSet;





        {/* <Skill skill="React" emoji="💪" color="blue" />
        <Skill skill="HTML+CSS" emoji="💪" color="orange" />
        <Skill skill="JavaScript" emoji="💪" color="yellow" />
        <Skill skill="React" emoji="💪" color="lightblue" />
        <Skill skill="Git" emoji="💪" color="orange" /> */}