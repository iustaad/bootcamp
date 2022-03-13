import React from "react";
//formik used for create forms
import { useField } from "formik";

/**
 * This component is created to generate text or input fields for other pages
 */

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
    </div>
  );
};
