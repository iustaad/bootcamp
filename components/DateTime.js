import { useField } from "formik";
import React from "react";

import styles from "../styles/DateTime.module.css";

function DateTime({ label, ...props }) {
  const [field] = useField(props);

  // console.log("DateTime");
  // console.log(field);

  return (
    <div className={styles.selectDate}>
      <label htmlFor={field.name} className={styles.labelAndinput}>
        {label}
      </label>
      <input {...field} {...props} className={styles.labelAndinput}></input>
    </div>
  );
}

export default DateTime;
