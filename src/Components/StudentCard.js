import React, { useState } from "react";

import StudentForm from "./StudentForm";

const StudentCard = ({ studentData }) => {
  const [turnBack, setTurnBack] = useState(false);

  const handleEditClick = () => {
    setTurnBack(true);
  };

  const handleSaveClick = () => {
    setTurnBack(false);
  };

  return (
    <div id="student-card">
      {turnBack === false ? (
        <div id="front-card">
          <div id="name">{studentData.name}</div>
          <div id="bio">{studentData.bio}</div>
          <div id="sunSign">{studentData.sun_sign}</div>
          <div id="social">{studentData.social}</div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      ) : (
        <StudentForm
          key={studentData.id}
          id={studentData.id}
          handleSaveClick={handleSaveClick}
        />
      )}
    </div>
  );
};

export default StudentCard;
