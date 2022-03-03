import React from "react";
import { useField } from "formik";

export const TextFields = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
    </div>
  );
};
