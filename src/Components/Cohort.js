import React, {useState, useEffect} from'react';

import StudentContainer from "./StudentContainer"
import AddStudent from "./StudentForm"


const Cohort = ({studentData}) =>{
    
    return(
        <div>
            <h1>Cohort Page</h1>
            <StudentContainer studentData={studentData}  />
            <AddStudent />
        </div>
    )


}

export default Cohort;