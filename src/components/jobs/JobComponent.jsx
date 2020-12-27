import React from "react";
import "./jobComponent.css";

const JobComponent = ({ jobData, handleClick, index }) => {
  const languages = jobData.languages.map((x) => (
    <li onClick={handleClick} value={x}>
      {x}
    </li>
  ));
  const tools = jobData.tools.map((x) => <li onClick={handleClick}>{x}</li>);



  return (
    <div className="job-container">
      <div className="job-img-container">
        <img src={jobData.logo} alt="logo" />
      </div>
      <div className="job-info-container">
        <div className="job-title-and-company">
          <p style={{ paddingBottom: "5px" }}>{jobData.company}</p>
          <h4>{jobData.position}</h4>
        </div>
        <div className="job-postedAt-information">
          <p className="info-data">{jobData.postedAt}</p>
          <span className="info-data">*</span>
          <p className="info-data">{jobData.contract}</p>
          <span className="info-data">*</span>
          <p className="info-data">{jobData.location}</p>
        </div>
      </div>
      <div className="filter-tablets-container">
        <ul>
          <li onClick={handleClick} value="im value">
            {jobData.role}
          </li>
          <li onClick={handleClick} value={jobData.level}>
            {jobData.level}
          </li>
          {languages}
          {tools}
        </ul>
      </div>
    </div>
  );
};
export default JobComponent;
