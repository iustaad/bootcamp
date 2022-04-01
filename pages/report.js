import React from "react";

import styles from "../styles/Report.module.css";

export default function report() {
  let JsonData = [
    [
      {
        studentName: "Minhaj",
        studentId: "03489",
        section: "M2",
        attendence: "100%",
        unauthorizedAbsence: "0%",
        authorizedAbsence: "0%",
      },
    ],
    [
      {
        subject: "English",
        attainment: "Expected",
        attitude: 1,
        contribution: 1,
        behavior: 1,
        target: "Please see Classroom Monitor Assessment Summary",
        teacher: "Brendan Yakovich",
      },
      {
        subject: "Physics",
        attainment: "Emerging",
        attitude: 1,
        contribution: 1,
        behavior: 1,
        target: "Please see Classroom Monitor Assessment Summary",
        teacher: "Judi Mazzeo",
      },
      {
        subject: "Computer",
        attainment: "Emerging+",
        attitude: 1,
        contribution: 1,
        behavior: 1,
        target: "Please see Classroom Monitor Assessment Summary",
        teacher: "Abran Irdale",
      },
      {
        subject: "Chemistry",
        attainment: "Expected",
        attitude: 1,
        contribution: 1,
        behavior: 1,
        target: "Please see Classroom Monitor Assessment Summary",
        teacher: "Thornie Buey",
      },
      {
        subject: "Class Teacher Comment",
        attainment: "N/A",
        attitude: 1,
        contribution: 1,
        behavior: 1,
        target:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        teacher: "Maximilien Tyrone",
      },
    ],
  ];
  const studentData = JsonData[0].map((data) => {
    return (
      <React.Fragment>
        <p>
          Student Name: <strong>{data.studentName}</strong>
        </p>
        <p>Student ID: {data.studentId}</p>
        <p>Section: {data.section}</p>
        <p>Attendence: {data.attendence}</p>
        <p>Unauthorized Absence: {data.unauthorizedAbsence}</p>
        <p>Authorized Absence: {data.authorizedAbsence}</p>
      </React.Fragment>
    );
  });
  const reportData = JsonData[1].map((data) => {
    return (
      <tr>
        <td data-lable="Subject">
          <strong>{data.subject}</strong>
        </td>
        <td data-lable="Current Attainment">{data.attainment}</td>
        <td data-lable="Attitude to Learing	">{data.attitude}</td>
        <td data-lable="Contribution to Class	">{data.contribution}</td>
        <td data-lable="Behavior	">{data.behavior}</td>
        <td data-lable="Current Target	">{data.target}</td>
        <td data-lable="Teacher Name">{data.teacher}</td>
      </tr>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <div className={styles.studentDetails}>{studentData}</div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Current Attainment</th>
              <th>Attitude to Learing</th>
              <th>Contribution to Class</th>
              <th>Behavior</th>
              <th>Current Target</th>
              <th>Teacher Name</th>
            </tr>
          </thead>
          <tbody>{reportData}</tbody>
        </table>
      </div>
      <div className={styles.reportFooter}>
        <p>Key:</p>
        <p>1-Excellent</p>
        <p>2-Good</p>
        <p>3-Satisfactory</p>
        <p>4-Bad</p>
      </div>
    </div>
  );
}
