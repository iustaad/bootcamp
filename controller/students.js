import { executeQuery } from "../config/db";

const getAllStudentDetails = async (req, res) => {
  const studentData = await executeQuery(
    `
SELECT 
DISTINCT 
	 att.course AS courseid,
	 c.shortname AS Coursename,
     attsess.id AS sessionid,
	 attlog.studentid AS studentid,
     u.firstname AS firstname,
     u.lastname AS lastname,
     attsta.description AS Attendance,
     attsess.description AS class_details,
     DATE_FORMAT(FROM_UNIXTIME(attsess.sessdate),'%d %M %Y')AS Date

FROM mdl_attendance AS att
LEFT JOIN mdl_attendance_sessions AS attsess 
	ON attsess.attendanceid = att.id
LEFT JOIN mdl_attendance_log AS attlog 
	ON attlog.sessionid = attsess.id
LEFT JOIN mdl_attendance_statuses AS attsta 
	ON attsta.id = attlog.statusid
LEFT JOIN mdl_user AS u 
	ON u.id = attlog.studentid
JOIN mdl_course AS c 
	ON c.id = att.course
HAVING Coursename = "maths" AND firstname = "minhaj"
ORDER BY att.course,attsess.id,attlog.statusid;`,
    []
  );
  res.send(studentData);
};

export { getAllStudentDetails };
