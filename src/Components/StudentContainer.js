import React, {useEffect} from "react";
import StudentCard from "./StudentCard";
import AddStudentCard from "./AddStudentCard";
import { Route, useHistory, useParams } from "react-router-dom";

const StudentContainer = ({
  studentData,
  addNewStudent,
  cohortIndex,
  updateStudent,
  deleteStudent,
  deleteCohort,
  setCohortIndex,
}) => {

const params = useParams();

    useEffect(() => {
        setCohortIndex(params.id)
    }, [])


  const history = useHistory();
  const allStudents = studentData.map((studentData) => (
    <Route exact path="/cohorts/:id">
      <StudentCard
        key={studentData.id}
        studentData={studentData}
        updateStudent={updateStudent}
        deleteStudent={deleteStudent}
      />
    </Route>
  ));

  const handleDelete = () => {
    deleteCohort(cohortIndex);
    setCohortIndex(1);
    history.push("/");
  };

  return (
    <div>
      <div id="student-container">
        <div id="student-list">{allStudents}</div>
        <AddStudentCard
          addNewStudent={addNewStudent}
          cohortIndex={cohortIndex}
        />
      </div>
      <div id="delete-cohort-button" onClick={handleDelete}>
        <h3>
          Delete <br />
          cohort
        </h3>
      </div>
    </div>
  );
};

export default StudentContainer;
