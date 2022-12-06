// import './App.css';
import React, {useState, useEffect} from "react";
import LandingPage from "./LandingPage";
import Cohort from "./Cohort";

function App() {

  const [cohortIndex, setCohortIndex] = useState(1)
  const [students, setStudents] = useState([])
  const [cohorts, setCohorts] = useState([])

  console.log(cohortIndex);
  
  //Fetch Students
  useEffect(() => {
    fetch(`http://localhost:9292/cohorts/${cohortIndex}/students`)
    .then(r => r.json())
    .then(studentData => {
        setStudents(studentData)
    })
  }, [cohortIndex]);

  
  ///Fetch cohorts
  useEffect( () => {
    fetch('http://localhost:9292/cohorts')
    .then (r => r.json())
    .then(cohortdata => {
      setCohorts(cohortdata)
    })
  }, []);


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


  return (
    <div>
      <LandingPage setCohortIndex={setCohortIndex} cohorts={cohorts} addNewCohort={addNewCohort}/>
      <Cohort studentData={students} />
    </div>
   
  );
}

export default App;
