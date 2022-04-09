import React from "react";
import { useState, useEffect } from "react";

import course from "../services/courses";
import styles from "../styles/CourseEnrollment.module.css";

function CourseEnrollment() {
  const [allCourse, setAllCourse] = useState([]);
  const [enrolledUserList, SetenrolledUserList] = useState([]);

  useEffect(() => {
    getAllCourse();
  }, []);

  // Call getAllCourse service
  const getAllCourse = async () => {
    try {
      const response = await course.getAllCourses();
      setAllCourse(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // Get Single course in dashboard
  const getSingleCourse = allCourse.map((course) => {
    if (course.categoryid === 0) {
      return;
    } else {
      return (
        <div key={course.id}>
          <button
            className={styles.button}
            onClick={() => enrolledUsers(course.id)}
          >
            <span className={styles.button2}>{course.shortname}</span>
          </button>
        </div>
      );
    }
  });

  // Call enrolledUser service
  const enrolledUsers = async (courseid) => {
    try {
      const response = await course.getEnrolledUser(courseid);
      if (response.data.length > 0) {
        SetenrolledUserList(response.data);
      } else {
        SetenrolledUserList([{ err: "err" }]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Get enrolled Users
  const getEnrolledUsers = enrolledUserList.map((users) => {
    if (users.err !== "err") {
      return (
        <div key={users.id}>
          <div className={styles.sname}>Students: {users.fullname}</div>
        </div>
      );
    } else {
      return "please enrolled your self first then u will see the participents";
    }
  });

  return (
    <div className={styles.card}>
      <div className={styles.card_left}>
        <h3>Available Courses</h3>
        <div>{getSingleCourse}</div>
      </div>
      <div>
        <h3>Enrolled Users</h3>
        <div className={styles.card_right}>
          <div className={styles.card_details}>{getEnrolledUsers}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseEnrollment;
