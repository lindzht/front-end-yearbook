import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const AddButton = ({ addNewCohort }) => {
  const [display, setDisplay] = useState(false);
  const [newCohortObj, setNewCohortObj] = useState({
    region: "",
    start_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisplay(true);
    setTimeout(() => {
      setDisplay(false);
    }, 800);

    addNewCohort(newCohortObj);

    setNewCohortObj({
      region: "",
      start_date: "",
    });
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewCohortObj({
      ...newCohortObj,
      [key]: value,
    });
  };
    
  const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];
    
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div id="add-cohort-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="region"
          placeholder="Region (East, West, South)"
          value={newCohortObj.region}
          onChange={handleChange}
        />
        <input
          type="text"
          name="start_date"
          placeholder="Start Date (MM-DD-YYYY)"
          value={newCohortObj.start_date}
          onChange={handleChange}
        />
        <input
          type="submit"
          id="add-cohort-button"
          name="add-cohort"
          value="Submit"
        />
      </form>
      {display ? <h3>Added to DropDown</h3> : null}


   
      {/* <ProgressBar /> */}


       
    </div>
  );
};

export default AddButton;
