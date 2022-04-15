import React from "react";
import { useEffect, useState } from "react";

import childrenDetails from "../services/childrenDetails";
import courses from "../services/courses";
import styles from "../styles/ShowChildrenDetails.module.css";

const ShowChildrenDetails = () => {
  const [childData, setChildData] = useState([]);

  const [child1, setChild1] = useState("");

  const [course, setCourses] = useState([]);

  useEffect(() => {
    childrenDetail();
  }, []);

  const childrenDetail = async () => {
    try {
      const response = await childrenDetails.getChildrenDetails();
      setChildData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const childrenName = (event) => {
    setChild1(event.target.textContent);
  };

  const count = 0;
  const getSingleChild = childData.map((childData) => {
    if (count <= 0) {
      count += 1;
      return (
        <div key={childData.id}>
          <div className={styles.card_left}>
            <h3>Children</h3>
            <button className={styles.button} onClick={childrenName}>
              <span className={styles.button2}>{childData.first_name}</span>
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div key={childData.id}>
          <div className={styles.card_left}>
            <button className={styles.button} onClick={childrenName}>
              <span className={styles.button2}>{childData.first_name}</span>
            </button>
          </div>
        </div>
      );
    }
  });

  const getAssignments = async (event) => {
    console.log(event.target.textContent);
    const courseName = event.target.textContent;
    console.log(courseName);
    localStorage.setItem("courseName", courseName);
    try {
      const response = await courses.getCourse(courseName);
      setCourses(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  let courseAssignment = [];

  const getCourse = course.map((course) => {
    console.log("getCourse");
    console.log(course.assignments);
    courseAssignment.push(course.assignments);

    const singleAssignment = courseAssignment.map((singleAssignment) => {
      console.log("singleAssignment");
      console.log(singleAssignment);

      const sAssingment = singleAssignment.map((sAss) => {
        console.log("sAssignment");
        console.log(sAss.name);
        return (
          <div key={sAss.id}>
            <div>{sAss.name}</div>
          </div>
        );
      });
      return <div>{sAssingment}</div>;
    });

    return (
      <div className={styles.courseName}>
        <h3>Assignments</h3>
        <div>{singleAssignment}</div>
      </div>
    );
  });

  const getChildrenDetail = childData.map((child) => {
    const courseName = child.enrolledCourse.map((course) => {
      return (
        <div key={course.id}>
          <div>{course.shortname}</div>
        </div>
      );
    });
    if (child1 === child.first_name) {
      return (
        <div className={styles.maindiv} key={child.id}>
          <h3>Details</h3>
          <div> First Name: {child.first_name}</div>
          <div> Last Name {child.last_name}</div>
          <div> Email: {child.email}</div>
          <div> Gender: {child.gender}</div>
          <div className={styles.course}>
            <h3 className={styles.heading}>Course</h3>
            <button className={styles.button} onClick={getAssignments}>
              <span className={styles.button2}>{courseName}</span>
            </button>
          </div>
        </div>
      );
    }
  });

  return (
    <div className={styles.card}>
      <div>{getSingleChild}</div>

      <div>{getChildrenDetail}</div>

      <div>{getCourse}</div>
    </div>
  );
};

export default ShowChildrenDetails;
