import { useState, useEffect } from "react";
import { data } from "../data/data";

const useInputValues = () => {
  const [valuesArr, setValuesArr] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [getFilteredResults, setGetFilteredResults] = useState();
  const [jobs, setJobs] = useState(data);
  const [tags, setTags] = useState([]);
  const [filters, setFilters] = useState();

  useEffect(() => {
    (function () {
      return setGetFilteredResults(jobs);
    })();
  }, [jobs]);


  function getPropertyValues(myObject, inputValue) {
    let jobProperty = [];

    jobs.filter((job) => {
      for (let key in job) {
        const jobKeys = job[key];

        if (jobKeys === inputValue) {
          jobProperty.push(job);
          setGetFilteredResults(jobProperty);
         
        }
        if (typeof jobKeys === "object") {
          if (jobKeys.includes(inputValue)) {
            jobProperty.push(job);
            setGetFilteredResults(jobProperty);
          }
        }
      }
    });

    //!tags.includes(inputValue) && setTags([...tags, inputValue]);

    setIsFilterActive(true);
    return jobProperty;
  }

  function clicked(tag) {
    const inputValues = tag;

   if (tags.includes(inputValues)) return;

     setTags([...tags, inputValues]);

    getPropertyValues(jobs, inputValues);
  } 

  

  return [isFilterActive, clicked, getFilteredResults, tags];
};

export default useInputValues;
