import React, { useState, useReducer } from "react";
import JobComponent from "../jobs/JobComponent";
import { data } from "../../data/data";
import { getPropertyValues } from "../../utility/data.reduce";

const Filter = () => {
  //const [state, dispatch] = useReducer(reduce, data)
  const [valuesArr, setValuesArr] = useState();
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const jobs = data.map((job, index) => {
    const click = (e, indexs) => {
      setValuesArr([]);
      const id = e.target.innerHTML;

      const returnedValues = getPropertyValues(data, id);

      console.log(returnedValues);

      setSelectedFilters((prev) => [...prev, id]);

      setValuesArr(() => {
        return returnedValues.map((x) => (
          <JobComponent handleClick={(e) => click(e, index)} jobData={x} />
        ));
      });
    };

    return <JobComponent handleClick={(e) => click(e, index)} jobData={job} />;
  });

  return (
    <div>
      {jobs}
      <hi>Test</hi>
      {valuesArr}
    </div>
  );
};

export default Filter;
