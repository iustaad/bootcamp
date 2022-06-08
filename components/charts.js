import React from "react";
import student from "../Services/Students";

const charts = () => {
  const getStudentData = async () => {
    try {
      const response = await student.getAllStudents();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div>chart</div>
      <button
        onClick={() => {
          getStudentData();
        }}
      >
        MATHS
      </button>
    </div>
  );
};

export default charts;
