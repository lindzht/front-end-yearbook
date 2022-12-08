import React from "react";
import StudentCard from "./StudentCard";
import AddStudentCard from "./AddStudentCard";
import { Route, useHistory } from "react-router-dom";

const StudentContainer = ({
  studentData,
  addNewStudent,
  cohortIndex,
  updateStudent,
  deleteStudent,
  deleteCohort,
  setCohortIndex,
}) => {
  const history = useHistory();
  const allStudents = studentData.map((studentData) => (
    <StudentCard
      key={studentData.id}
      studentData={studentData}
      updateStudent={updateStudent}
      deleteStudent={deleteStudent}
    />
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

// import React from "react";
// import StudentCard from "./StudentCard";

// const StudentContainer = ({ studentData }) => {
//   const allStudents = studentData.map((studentData) => (
//     <StudentCard key={studentData.id} studentData={studentData} />
//   ));
//   return <div id="student-list">{allStudents}</div>;
// };

// export default StudentContainer;
