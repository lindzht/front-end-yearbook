import React, {useState} from "react";
import AddStudentForm from "./AddStudentForm";

const AddStudentCard = ({addNewStudent, cohortIndex}) => {

    const [flipCard, setFlipCard] = useState(true)
    const handleButton = ()=> {
        setFlipCard(!flipCard)
    }

return (
        <div id="add-student-container">
            {flipCard ? 
                <div id="add-front-card">
                    <h3 onClick={handleButton}>Add <br />student!</h3>
                </div>
            : 
             <div id="add-back-card">
                 <AddStudentForm handleButton={handleButton} addNewStudent={addNewStudent} cohortIndex={cohortIndex} />
             </div>
            }
        </div>       
    )
   
}


export default AddStudentCard;