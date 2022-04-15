import React from "react";
// import AssignmentList from "../components/AssignmentList";
// import CourseEnrollment from "../components/CourseEnrollment";
import ShowProfile from "../components/ShowProfile";
import ShowChildrenDetails from "../components/ShowChildrenDetails";

// All comment code is related to the MOODLE

function dashboard() {
  return (
    <div>
      <div>
        <ShowProfile />
      </div>
      <div>
        <div>
          <ShowChildrenDetails />
        </div>
        {/* <div>
          <CourseEnrollment />
        </div>
        <div>
          <AssignmentList />
        </div> */}
      </div>
    </div>
  );
}

export default dashboard;
