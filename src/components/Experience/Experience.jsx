import React from "react";
import { experienceData } from "../../constants/expConstant";
import "./ExpEdu.css";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      {experienceData.map((expItem, index) => {
        return (
          <div key={index} className="experience-item">
            <img className="company-logo" src={expItem.image} alt="TCS" />
            <div className="vertical-line" />
            <div className="experience-content">
              <span>{expItem.year}</span>
              <div className="title">
                <h3>{expItem.title}</h3>
              </div>
              <div className="company">
                <p>{expItem.company}</p>
              </div>
              <div className="role">
                <p>{expItem.role}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
