import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import AddCohort from "./AddCohort";

const LandingPage = ({ setCohortIndex, cohorts, addNewCohort }) => {
  const [showButton, setShowButton] = useState(false);

  const handleButton = () => {
    setShowButton(!showButton);
  };

  return (
    <div id="landing-page">
      <h1>Yearbook</h1>
      <DropDown cohortData={cohorts} setCohortIndex={setCohortIndex} />
      <h5 onClick={handleButton}>Want to add a new cohort?</h5>
      {showButton ? <AddCohort addNewCohort={addNewCohort} /> : null}
    </div>
  );
};

export default LandingPage;
