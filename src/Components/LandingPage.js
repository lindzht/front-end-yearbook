import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import AddCohort from "./AddCohort";
import pencil from "../images/pencil.png"
// import { useHistory } from "react-router-dom";


const LandingPage = ({ setCohortIndex, cohorts, addNewCohort, history }) => {
  const [showButton, setShowButton] = useState(false);
//   const [headerStyle, setHeaderStyle] = useState(true)
//   const history = useHistory();


  const handleButton = () => {
    setShowButton(!showButton);
  };

//   const handleRedirectToHomepage = () => {
//     history.push(`/`)
//   };

  return (
    <div id="landing-page">
      <div id="landing-page-header">
        <h1>Yearbook</h1><img style={{width: 100}} src={pencil} alt="pencil" />
      </div>
      <h4>Select a cohort :</h4>
      <DropDown 
        cohortData={cohorts} 
        setCohortIndex={setCohortIndex} 
        history={history} />
    
      <h5 onClick={handleButton}>Want to add a new cohort?</h5>
      {showButton ? <AddCohort addNewCohort={addNewCohort} /> : null}
    </div>
  );
};

export default LandingPage;
