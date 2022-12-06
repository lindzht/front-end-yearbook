import React from "react";
import StudentCard from "./StudentCard";

const StudentContainer = ({ studentData }) => {
  const allStudents = studentData.map((studentData) => (
    <StudentCard key={studentData.id} studentData={studentData} />
  ));
  return <div id="student-list">{allStudents}</div>;
};

export default StudentContainer;
