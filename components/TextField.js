import React from "react";
import { useField, ErrorMessage } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage name={field.name} />
    </div>
  );
};
