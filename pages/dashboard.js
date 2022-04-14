import React from "react";
import AssignmentList from "../components/AssignmentList";
import CourseEnrollment from "../components/CourseEnrollment";
import ShowProfile from "../components/ShowProfile";
import ShowChildrenDetails from "../components/ShowChildrenDetails";

function dashboard() {
  return (
    <div>
      <ShowProfile />

      <ShowChildrenDetails />

      <CourseEnrollment />

      <AssignmentList />
    </div>
  );
}

export default dashboard;
