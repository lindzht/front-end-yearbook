import React from "react";

const DropDown = ({cohortData, setCohortIndex, history}) => {
  

 const optionElements = cohortData.map (cohortData => { 
    return <option key={cohortData.id} value={cohortData.id}>{cohortData.region}: {cohortData.start_date}</option>
 })

  const handleChange = (e) => {
    const index = e.target.value
    setCohortIndex(index)
    
    if (index > 0) {
      history.push(`/cohorts`)}
    else {
      history.push(`/`)
    }
  }


  return (
    <div id="cohort-drop-down">
        <label htmlFor="cohorts"> 
        <select onChange={handleChange} name='cohorts' id='cohorts'>
                <option value="" ></option>
                {optionElements}
        </select> 
      </label>
    </div>
  );
};
 
export default DropDown;

