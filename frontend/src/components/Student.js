import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentTable from "./StudentTable";

export const Student = () => {
  const serverUrl = "http://localhost:5000/api/students"
  
  
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get(serverUrl) 
      .then((res) => {
        console.log(res.data.students);
        setStudent(() => {
          return res.data.students;
        });
      }) 
      .catch((err) => {
        console.log(err);
      }); 
  }, [serverUrl]);

  return (
    <>
      <StudentTable student={student} />
    </>
  );
};