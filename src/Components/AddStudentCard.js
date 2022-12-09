import React from "react";

import { useHistory } from "react-router-dom";

const AddStudentCard = () => {
  const history = useHistory();

  const handleButton = () => {
    history.push(`/students/new`);
  };

  return (
    <div id="add-student-container">
      <div id="add-front-card">
        <h3 onClick={handleButton}>
          Add <br />
          student!
        </h3>
      </div>
    </div>
  );
};

export default AddStudentCard;
