import React from 'react';
import "./tagSearchBar.css";

const TagSearchBar = ({filters, handleDeleteFilters}) =>{



return (
  <div className="tag-search-container">
    {filters.map((tag) => (
      <div className="filters-container">
        <div className="filters">{tag}</div>
        <span onClick={() => handleDeleteFilters(tag)} className="x">
          X
        </span>
      </div>
    ))}
  </div>
);
};

export default TagSearchBar;