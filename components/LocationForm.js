import React, { useState, useEffect } from "react";
import { Country, City } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function LocationForm() {
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
    <div className="App">
      <div className="container">
        <h1>Form</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <p>Select Country: </p>
              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>-- Select --</option>
                {countryList}
              </select>
            </div>
            <br />
            <div>
              <p>Select City: </p>
              <select
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
              <p>Enter Phone Number: </p>
              <PhoneInput
                required
                international
                defaultCountry={country}
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
              />
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .App {
          margin: 5%;
        }

        .container {
          //   max-width: 80%;
          margin: 5% auto;
          padding: 5px;
        }

        .form-container {
          display: flex;
          justify-content: center;
        }
        h1 {
          text-align: center;
        }

        select {
          width: 100%;
          font-size: 1em;
        }
        PhoneInput {
          width: 100%;
        }
        input {
          font-size: 10em;
        }
      `}</style>
    </div>
  );
}
export default LocationForm;
