import React from "react";
import JobComponent from "../jobs/JobComponent";
import useInputValues from "../../utility/data.reduce";
import TagSearchBar from "../tagSearchBar/tagSearchBar";
import "./filter-home.css";

const Filter = () => {
  const [isFilter, clicked, filteredArrays, tags] = useInputValues();

  const jobs = filteredArrays?.map((job) => {
    return <JobComponent key={job.id} handleClick={clicked} jobData={job} />;
  });

  return (
    <div className='filter-home'>
      {tags.length > 0 ?(<TagSearchBar filters={tags} />) :null}
      <div className="jobs-container">
      {jobs}
      </div>
    </div>
  );
};

export default Filter;
