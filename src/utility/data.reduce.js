import { useState, useEffect } from "react";
import { data } from "../data/data";

const useInputValues = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [getFilteredResults, setGetFilteredResults] = useState();
  const [jobs, setJobs] = useState(data);
  const [tags, setTags] = useState([]);

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

      return jobProperty;
    });

    // !tags.includes(inputValue) && setTags([...tags, inputValue]);

    setIsFilterActive(true);
    return jobProperty;
  }

  const deleteFilters = (givenFilter) => {
    const deletedFilter = tags.filter((tag) => tag !== givenFilter);
    let jobProperty = [];

    jobs.filter((job) => {
      for (let key in job) {
        const jobKeys = job[key];

        if (deletedFilter.includes(jobKeys)) {
          jobProperty.push(job);
        }
      }

      if (jobProperty.length > 0) {
        setGetFilteredResults(jobProperty);
      } else {
        setGetFilteredResults(jobs);
      }

      return jobProperty;
    });

    setTags(deletedFilter);
  };

  function clicked(tag) {
    const inputValues = tag;

    if (tags.includes(inputValues)) return;

    setTags([...tags, inputValues]);

    getPropertyValues(jobs, inputValues);
  }

  return [isFilterActive, clicked, getFilteredResults, tags, deleteFilters];
};

export default useInputValues;
