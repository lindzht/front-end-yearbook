import React from "react";
import { useHistory } from "react-router-dom";

const Footer = ({ setCohortIndex }) => {
  // const cohortList = cohorts.map((cohort) => {
  //     return( <p>{cohort.region}: {cohort.start_date}</p>)
  // })

  const history = useHistory();
  const handleGoBack = () => {
    setCohortIndex(1);
    history.goBack();
  };

  return (
    <div id="footer">
      <div id="goBack" onClick={handleGoBack}>
        Back
      </div>
    </div>
  );
};

export default Footer;
