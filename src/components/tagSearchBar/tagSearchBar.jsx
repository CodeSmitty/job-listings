import React from 'react';
import useInputValues from '../../utility/data.reduce'
import "./tagSearchBar.css";

const TagSearchBar = ({filters}) =>{



return (
  <div className="tag-search-container">
    {filters?.map((tag) => (
      <div className="filters-container">
        <div className="filters">
          {tag}
        </div>
        <span className="x">X</span>
      </div>
    ))}
  </div>
);
};

export default TagSearchBar;