import React from "react";
import Avatar from "./Avatar";
import Intro from "./Intro";
import SkillSet from "./Skill";
import "./style.css";

const ProfileCard = () => {
  return (
    <center>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillSet />
        </div>
      </div>
    </center>
  );
};

export default ProfileCard;
