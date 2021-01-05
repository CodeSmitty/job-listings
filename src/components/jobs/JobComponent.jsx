import React from "react";
import "./jobComponent.css";
import FilterLists from "../filterLists/filterLists";

const JobComponent = ({ jobData, handleClick, clickedIds }) => {
  const languages = jobData.languages.map((language) => (
     <FilterLists click={()=>handleClick(language)}  >{language}</FilterLists>
  ));
  const tools = jobData.tools.map((tool) =>  <FilterLists click={()=>handleClick(tool)}  >{tool}</FilterLists>);

    

  return (
    <div className="job-container">
      <div className="img-and-jobs-container">
      <div className="job-img-container">
        <img className="logo" src={jobData.logo} alt="logo" />
      </div>
      <div className="job-info-container">
        <div className="job-title-and-company">
          <p className="company-title" style={{ paddingBottom: "5px" }}>{jobData.company}</p>
          <h4 className="job-position">{jobData.position}</h4>
        </div>
        <div className="job-postedAt-information">
          <p className="info-data">{jobData.postedAt}</p>
          <span className="info-data">*</span>
          <p className="info-data">{jobData.contract}</p>
          <span className="info-data">*</span>
          <p className="info-data">{jobData.location}</p>
          </div>
        </div>
      </div>
      <div className="filter-tablets-container">
          <FilterLists click={()=>handleClick(jobData.role)}  >{jobData.role}</FilterLists>
          <FilterLists click={()=>handleClick(jobData.level)}  >{jobData.level}</FilterLists>
          {languages}
          {tools}
        </div>
      
    </div>
  );
};
export default JobComponent;

