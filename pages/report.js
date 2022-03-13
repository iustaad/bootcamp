import React from "react";

export default function report() {
  let JsonData = [
    [
      {
        studentName: "Minhaj",
        studentId: "03489",
        section: "M2",
        attendence: "100%",
        unauthorizedAbsence: "0%",
        authorizedAbsence: "0%"
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
        <td>
          <strong>{data.subject}</strong>
        </td>
        <td>{data.attainment}</td>
        <td>{data.attitude}</td>
        <td>{data.contribution}</td>
        <td>{data.behavior}</td>
        <td>{data.target}</td>
        <td>{data.teacher}</td>
      </tr>
    );
  });
  return (
    <div className="mainContainer">
      <div className="studentDetails">{studentData}</div>
      <div className="tableContainer">
        <table>
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
      <div className="reportFooter">
        <p>Key:</p>
        <p>1-Excellent</p>
        <p>2-Good</p>
        <p>3-Satisfactory</p>
        <p>4-Bad</p>
      </div>

      <style jsx>{`
        .mainContainer {
          display: flex;
          flex-direction: column;
          padding: 10px;
          align-content: space-around;
          flex-wrap: wrap;
          
        }

        .studentDetails {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          border: 1px solid darkgrey;
        }
        .tableContainer{
          display: flex; 
          justify-content: center;
          border: 1px solid darkgray;
          border-collapse: collapse;
          padding: 5px;
          text-align: center;
        }

        .reportFooter {
          display: flex;
          justify-content: space-evenly;
        }

        th {
          background-color: #04aa6d;
          color: white;
          font-weight: normal;
          border: 1px solid darkgray;
        }
        table, thead, th, td {
          border: 1px solid black;
        }

      tbody, tr, td {
          border: 1px solid black;
        }
      `}</style>
    </div>
  );
}
