import React, { useState } from "react";

// import StudentForm from "./StudentForm";
import UpdateStudentForm from "./UpdateStudentForm";
import github from "../images/github.png"


const StudentCard = ({ studentData, updateStudent, deleteStudent }) => {
  const [turnBack, setTurnBack] = useState(false);

//   const handleEditClick = () => {
//     setTurnBack(true);
//   };

//   const handleSaveClick = () => {
//     setTurnBack(false);
//   };

  const handleClick = () => {
    setTurnBack(!turnBack);
  }

  const handleDelete = () => {
    deleteStudent(studentData.id)
  }

  return (
    <div id="student-card">
        {studentData.image ? 
            <img src={studentData.image} alt={studentData.name}/>
            : <img src="https://cdn.shopify.com/s/files/1/1749/6693/products/Plain_A.jpg?v=1652294875" alt={studentData.name}/>}
      {turnBack === false ? (
        <div id="front-card-text">
            <div id="name">{studentData.name}</div>
            <div id="location">{studentData.city_state}</div>
            <div id="country">{studentData.country}</div>
            <div id="sunSign">☀️ {studentData.sun_sign}  </div>
            <div id="social">
                <img style={{width:15}} src={github} alt="github"></img>
                {studentData.social}
            </div>
            <div id="bio">{studentData.bio}</div>
            <button id="edit" onClick={handleClick}>Edit?</button>
            <button id="delete" onClick={handleDelete}>X</button>
        </div>
      ) : (
        <div id="back-card-form">
            <UpdateStudentForm
              key={studentData.id}
              id={studentData.id}
              handleClick={handleClick}
              updateStudent={updateStudent}
              studentData={studentData}
            />
        </div>
      )}
    </div>
  );
};

export default StudentCard;
