import React from "react";
//formik used for create forms
import { useField } from "formik";

import styles from "../styles/TextField.module.css";

/**
 * This component is created to generate text or input fields for other pages
 */

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className={styles.selectCredentials}>
      <label htmlFor={field.name} className={styles.labelAndinput}>
        {label}
      </label>
      <input {...field} {...props} className={styles.labelAndinput} />
    </div>
  );
};
