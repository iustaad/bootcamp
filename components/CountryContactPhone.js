import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useField } from "formik";

import styles from "../styles/Country.module.css";

function CountryContactPhone() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      country: country,
      city: city,
      phone: phone,
    };
    console.log(data);
  };

  return (
    <div>
      <div className="App">
        <div className="container">
          <div className="formContainer">
            {/* <form onSubmit={handleSubmit}> */}
            <div className={styles.selectCountry}>
              <label>Select Country: </label>
              <select
                className={styles.input}
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>-- Select --</option>
                {countryList}
              </select>
            </div>
            <br />
            <div className={styles.selectCountry}>
              <label className={styles.input}>Select City: </label>
              <select
                className={styles.input}
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option>Select Country First</option>
                {cityList}
              </select>
            </div>
            <br />
            <div>
              <label>Enter Phone Number: </label>
              <PhoneInput
                className={styles.input}
                required
                international
                defaultCountry={country}
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
              />
            </div>
            <br />
            {/* <button type="submit">Submit</button> */}
            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountryContactPhone;
