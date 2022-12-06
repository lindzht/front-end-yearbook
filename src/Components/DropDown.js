import React, { useState, useEffect } from "react";


const DropDown = ({cohortData, setCohortIndex}) => {

 const optionElements = cohortData.map (cohortData => { 
    return <option key={cohortData.id} value={cohortData.id}>{cohortData.region}: {cohortData.start_date}</option>
 })

  const handleChange = (e) => {
   setCohortIndex(e.target.value)
  }


  return (
    <div>
        <label htmlFor="cohorts"> Pick a Cohort
              <br />
        <select onChange={handleChange} name='cohorts' id='cohorts'>
                <option value="" ></option>
                {optionElements}
        </select> 
      </label>
    </div>
  );
};
 
export default DropDown;

