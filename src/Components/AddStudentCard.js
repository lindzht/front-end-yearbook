import React, {useState} from "react";
import StudentForm from "./StudentForm";

const AddStudentCard = ({ studentData }) => {

    const [turnBack, setTurnBack] = useState(true)

    const handleEditClick = () => {
        setTurnBack(true)
    }


return (
        <div id="student-card">
            {turnBack? 
                <div id="add-front-card">
                        
                    <button onClick={handleEditClick}>Add Someone!</button>
                </div>
            : 
             <div id="add-back-card">

             </div>
            };
        </div>       
    )
   
}


export default AddStudentCard;