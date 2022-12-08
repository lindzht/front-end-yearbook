// import './App.css';
import React, {useState, useEffect} from "react";
import {Switch, Route} from "react-router-dom";


import LandingPage from "./LandingPage";
// import Cohort from "./Cohort";
import backgroundvideo from "../video/backgroundvideo.mp4"
import StudentContainer from "./StudentContainer";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import AddStudentForm from "./AddStudentForm";

function App() {

  const [cohortIndex, setCohortIndex] = useState("1")
  const [cohorts, setCohorts] = useState([])
  const [updateCohorts, setUpdateCohorts] = useState([])
  const [students, setStudents] = useState([])
  const [updatedStudents, setUpdatedStudents] = useState([])
  const history = useHistory();
  


  
  
  
  ///Fetch cohorts
  useEffect( () => {
    fetch('http://localhost:9292/cohorts')
    .then (r => r.json())
    .then(cohortdata => {
      setCohorts(cohortdata)
    })
  }, [updateCohorts]);
  
  
  // ADD NEW COHORT TO DATABASE
  function addNewCohort (newCohortObj){
    fetch('http://localhost:9292/cohorts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCohortObj)
    })
    .then(r => r.json())
    .then (newCohortData => {
      setCohorts([...cohorts, newCohortData]);
    })
  }

  // DELETE COHORT FROM DATABASE
  function deleteCohort (doomedCohortIndex){
    const index = doomedCohortIndex

    fetch(`http://localhost:9292/cohorts/${index}`, {
      method: 'DELETE',
    })
    .then (r => r.json())
    .then(newCohortData => {
      setUpdateCohorts([...cohorts, newCohortData])
    })
}


  //Fetch Students
  useEffect(() => {
    fetch(`http://localhost:9292/cohorts/${cohortIndex}/students`)
    .then(r => r.json())
    .then(studentData => setStudents(studentData))
    }, [cohortIndex, updatedStudents])


  //ADD NEW STUDENT TO DATABASE
  function addNewStudent (newStudentObj){
      fetch('http://localhost:9292/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudentObj)
      })
      .then(r => r.json())
      .then (newStudentData => {
        setStudents([...students, newStudentData]);
      })
  };

  //UPDATE STUDENT TO DATABASE
  function updateStudent (updateStudentObj){
     const index = updateStudentObj.id

      fetch(`http://localhost:9292/students/${index}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify(updateStudentObj)
      })
      .then(r => r.json())
      .then(newUpdatedData => {
        console.log([...students, newUpdatedData]);
        setUpdatedStudents([...students, newUpdatedData])
      })
  }



  //DELETE STUDENT TO DATABASE
  function deleteStudent (doomedStudentObjIndex){
    console.log(doomedStudentObjIndex)
      const index = doomedStudentObjIndex

      fetch(`http://localhost:9292/students/${index}`, {
        method: 'DELETE',
      })
      .then (r => r.json())
      .then(newData => setUpdatedStudents(newData))
  }




  return (
    <div>
      {cohortIndex > 1 ?  
         <Nav 
         setCohortIndex={setCohortIndex} 
         cohorts={cohorts} 
         addNewCohort={addNewCohort}
         history={history}/>
         : null
        }
     
      <Switch>
        <Route exact path="/">
          <LandingPage 
                setCohortIndex={setCohortIndex} 
                cohorts={cohorts} 
                addNewCohort={addNewCohort}
                history={history} />
        </Route>
        <Route exact path="/cohorts">
          <StudentContainer 
                studentData={students} 
                // addNewStudent={addNewStudent} 
                cohortIndex={cohortIndex}
                updateStudent={updateStudent}
                deleteStudent={deleteStudent}
                deleteCohort={deleteCohort}/>
          <Footer cohorts={cohorts}/>
        </Route>
        <Route exact path="/students/new">
          <AddStudentForm 
                addNewStudent={addNewStudent}
                cohortIndex={cohortIndex} 
                setCohortIndex={setCohortIndex}
                cohorts={cohorts}/>
        </Route>
      </Switch>
      
           
            {/* {cohortIndex !== "" ?  
            <StudentContainer 
            studentData={students} 
            addNewStudent={addNewStudent} 
            cohortIndex={cohortIndex}
            updateStudent={updateStudent}
            deleteStudent={deleteStudent}
            deleteCohort={deleteCohort}/> : null} */}

      <video id='video-background' autoPlay loop muted><source src={backgroundvideo} type='video/mp4' /></video>
    </div>
   
  );
}

export default App;




// return (
//   <div>
//     <LandingPage 
//       setCohortIndex={setCohortIndex} 
//       cohorts={cohorts} 
//       addNewCohort={addNewCohort}/>

//     {cohortIndex !== "" ?  
//       <Cohort 
//         studentData={students} 
//         addNewStudent={addNewStudent} 
//         cohortIndex={cohortIndex}
//         updateStudent={updateStudent}/> : null}

//     <video id='video-background' autoPlay loop muted><source src={backgroundvideo} type='video/mp4' /></video>
//   </div>
 
// );