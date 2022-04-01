import React from "react";
//formik used to create forms
import { Formik, Form, Field } from "formik";
//Yup is used for form validation
import * as Yup from "yup";

import DateTime from "../components/DateTime";
import { TextField } from "../components/TextField";
import styles from "../styles/demoform.module.css";
import CountryContactPhone from "../components/CountryContactPhone";

function demoform() {
  const validate = Yup.object({
    fullname: Yup.string(),
    email: Yup.string().email(),
  });

  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          countryDetails: { country: "", city: "", phone: "" },
          timing: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div>
            <div>
              <div className={styles.formContianer}>
                <h1>Demo Form</h1>
                <Form>
                  <div className={styles.component}>
                    <TextField label="Full Name" name="fullname" type="text" />
                  </div>
                  <div className={styles.component}>
                    <TextField label="Email" name="email" type="email" />
                  </div>

                  <div className={styles.component}>
                    <CountryContactPhone
                      name="countryDetails"
                      as="select"
                      label="Country Details"
                    />
                  </div>

                  <div className={styles.component}>
                    <DateTime label="Select Date" name="date" type="date" />
                  </div>

                  <div className={styles.component}>
                    <label>Timing</label>
                    <br></br>
                    <div>
                      <Field name="timing" value="10:00 AM" type="radio" />
                      <label htmlFor="name">&nbsp;Mornig: 10:00 AM</label>
                    </div>
                    <br></br>
                    <div>
                      <Field name="timing" value="6:00 PM" type="radio" />
                      <label htmlFor="name">&nbsp;Evening: 6:00 PM</label>
                    </div>
                  </div>
                  <div>
                    <button className={styles.button} type="submit">
                      submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default demoform;
