import React from "react";
import { useState } from "react";
import courses from "../services/courses";

import styles from "../styles/CourseEnrollment.module.css";

function AssignmentList() {
  const [allCourses, setAllCourses] = useState([]);

  let assignmentList = [];

  const getAllCourses = async () => {
    try {
      const response = await courses.getAssignment();
      setAllCourses(response.data.courses);
    } catch (err) {
      console.log(err);
    }
  };

  const getAssignmentFormList = allCourses.map((courses) => {
    const saveGetAssignment = courses.assignments.map((assignments) => {
      assignmentList.push(assignments);
    });
  });

  const renderAssignments = assignmentList.map((assignment) => {
    return (
      <div key={assignment.id}>
        <div>Assignment: {assignment.name}</div>
      </div>
    );
  });

  return (
    <div className={styles.card}>
      <div className={styles.card_left}>
        <h3>Available Assignments</h3>
        <button className={styles.button} onClick={getAllCourses}>
          <span>Show my assignments</span>
        </button>
      </div>

      <div>
        <h3>Assignments</h3>
        <div className={styles.card_right}>
          <div className={styles.card_details}>{renderAssignments}</div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentList;
