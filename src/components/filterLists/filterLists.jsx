import React from 'react';

const FilterLists = (props) =>{


    return (
      <div  {...props}>
        <ul>
          <li onClick={props.click} id={props.id}>
            {props.children}
          </li>
        </ul>
      </div>
    );
};

export default FilterLists;