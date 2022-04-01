import React from "react";
import AssignmentList from "../components/AssignmentList";
import CourseEnrollment from "../components/CourseEnrollment";
import ShowProfile from "../components/ShowProfile";

function dashboard() {
  return (
    <div>
      <ShowProfile />

      <CourseEnrollment />

      <AssignmentList />
    </div>
  );
}

export default dashboard;
