import React, { useState, useEffect } from "react";
//formik used to create forms
import { Formik, Form, Field } from "formik";
//Yup is used for form validation
import * as Yup from "yup";
import { Country, City } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import DateTime from "../components/DateTime";
import { TextField } from "../components/TextField";
import styles from "../styles/demoform.module.css";
import style from "../styles/Country.module.css";
// import CountryContactPhone from "../components/CountryContactPhone";

function demoform() {
  const validate = Yup.object({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    phone: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
  });

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {}, [country]);

  const countryList = Country.getAllCountries("").map((country) => {
    const { name, isoCode } = country;
    return <option value={isoCode}>{name}</option>;
  });

  const cityList = City.getCitiesOfCountry(`${country}`).map((city) => {
    const { name } = city;
    return <option value={name}>{name}</option>;
  });

  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          country: "",
          city: "",
          phone: "",
          timing: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          const data = {
            fullname: values.fullname,
            email: values.email,
            country: country,
            city: city,
            phone: phone,
            timing: values.timing,
          };
          console.log(data);
        }}
      >
        {(formik) => (
          <div>
            <div>
              <div className={styles.formContianer}>
                <h1>Demo Form</h1>
                <Form>
                  <div className={styles.component}>
                    <TextField label="Full Name:" name="fullname" type="text" />
                  </div>
                  <div className={styles.component}>
                    <TextField label="Email:" name="email" type="email" />
                  </div>

                  <div className={styles.component}>
                    <div className={style.selectCountry}>
                      <label>Select Country: </label>
                      <select
                        className={style.input}
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option>-- Select --</option>
                        {countryList}
                      </select>
                    </div>
                    <div className={style.selectCountry}>
                      <label className={style.input}>Select City: </label>
                      <select
                        className={style.input}
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option>Select Country First</option>
                        {cityList}
                      </select>
                    </div>
                    <div>
                      <label>Phone Number: </label>
                      <PhoneInput
                        required
                        international
                        defaultCountry={country}
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={setPhone}
                      />
                    </div>
                  </div>

                  <div className={styles.component}>
                    <DateTime label="Select Date:" name="date" type="date" />
                  </div>

                  <div className={styles.component}>
                    <label>Timing:</label>
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
                      <span>Submit</span>
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
