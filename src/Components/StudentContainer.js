import React, { useState } from "react";
import StudentCard from "./StudentCard";
import StudentForm from "./StudentForm";

const StudentContainer = ({studentData}) => {

  

 
    // const handleSaveClick = () => {

    //     setTurnBack(false)
    // }

 
        
    const allStudents = studentData.map(studentData => (
       
        // <StudentForm handleSaveClick={handleSaveClick} />
     <StudentCard studentData={studentData}/>
      
   ))
    return (
        <div id="student-list">
            {allStudents}
        </div>
   
        
   )
       
}

export default StudentContainer