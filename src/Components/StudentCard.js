import React, {useState} from "react";

import StudentForm from "./StudentForm";

const StudentCard = ({ studentData }) => {

    const [turnBack, setTurnBack] = useState(true)

    const handleEditClick = () => {
        setTurnBack(true)
    }

    console.log(turnBack)


return (
        <div id="student-card">
            {turnBack? 
                
                <div id="front-card">
                        <div id='img'>
                            { studentData.image ? 
                            <img src={studentData.image} alt={studentData.name}></img>
                            :   
                            <img src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt={studentData.name}></img>
                            }
                        </div>
                        <div id='name'>
                            {studentData.name}</div>
                        <div id='bio'>
                            {studentData.bio}</div>
                        <div id='sunSign'>
                            {studentData.sun_sign}</div>
                        <div id='social'>
                            {studentData.social}</div>
                        <button onClick={handleEditClick}>Edit</button>
                </div>
            : 
            <StudentForm />
            };
        </div>       
    )
   
}


export default StudentCard;