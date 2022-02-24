import React, { useState } from "react";

export default function form() {
  const [enteredPNumber, setEnteredPNumber] = useState("");

  const [enteredPIssuePlace, setEnteredPIssuePlace] = useState("");

  const [enteredPIssueDate, setEnteredPIssueDate] = useState("");

  const [enteredPExpiryDate, setEnteredPExpiryDate] = useState("");

  const [enteredVNumber, setEnteredVNumber] = useState("");

  const [enteredVIssuePlace, setEnteredVIssuePlace] = useState("");

  const [enteredVIssueDate, setEnteredVIssueDate] = useState("");

  const [enteredVExpiryDate, setEnteredVExpiryDate] = useState("");

  const [enteredNIDNumber, setEnteredNIDNumber] = useState("");

  const [enteredIDExpiryDate, setEnteredIDExpiryDate] = useState("");

  const [enteredIAuthority, setEnteredIAuthority] = useState("");

  const passportNumberChangeHandler = (event) => {
    setEnteredPNumber(event.target.value);
  };

  const passportIssuePlaceChangeHandler = (event) => {
    setEnteredPIssuePlace(event.target.value);
  };

  const passportIssueDateChangeHandler = (event) => {
    setEnteredPIssueDate(event.target.value);
  };

  const passportExpiryChangeHandler = (event) => {
    setEnteredPExpiryDate(event.target.value);
  };

  const visaNumberChangeHandler = (event) => {
    setEnteredVNumber(event.target.value);
  };

  const vissaIssuePlaceChangeHandler = (event) => {
    setEnteredVIssuePlace(event.target.value);
  };

  const vissaIssueDateChangeHandler = (event) => {
    setEnteredVIssueDate(event.target.value);
  };

  const vissaExpiryDateChangeHandler = (event) => {
    setEnteredVExpiryDate(event.target.value);
  };

  const nicNumberChangeHandler = (event) => {
    setEnteredNIDNumber(event.target.value);
  };

  const nicExpiryChangeHandler = (event) => {
    setEnteredIDExpiryDate(event.target.value);
  };

  const issuingAuthChangeHandler = (event) => {
    setEnteredIAuthority(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      passportNumber: enteredPNumber,
      passportIssuePlace: enteredPIssuePlace,
      passportIssueDate: new Date(enteredPIssueDate),
      passportExpiryDate: enteredPExpiryDate,
      vissaNumber: enteredVNumber,
      vissaIssuePlace: enteredVIssuePlace,
      vissaIssueDate: enteredVIssueDate,
      vissaExpiryDate: enteredVExpiryDate,
      nationaIdNumber: enteredNIDNumber,
      nationalIdExpiryDate: enteredIDExpiryDate,
      issuingAuthority: enteredIAuthority,
    };

    console.log(formData);

    setEnteredPNumber("");
    setEnteredPIssuePlace("");
    setEnteredPIssueDate("");
    setEnteredPExpiryDate("");
    setEnteredVNumber("");
    setEnteredVIssuePlace("");
    setEnteredVIssueDate("");
    setEnteredVExpiryDate("");
    setEnteredNIDNumber("");
    setEnteredIDExpiryDate("");
    setEnteredIAuthority("");
  };

  return (
    <div className="center">
      <div>
        <h3 className="heading">Passport/Vissa Details</h3>
        <form className="flex-container" onSubmit={submitHandler}>
          <div className="flex-item">
            <p className="flex-item-field">Passport Number</p>
            <input
              className="flex-item-field"
              type="text"
              placeholder="CZ0847662"
              id="grid-1-2"
              onChange={passportNumberChangeHandler}
              value={enteredPNumber}
            />
          </div>

          <div className="flex-item">
            <div className="flex-item-field">Passport Issue Place</div>
            <input
              className="flex-item-field"
              type="text"
              placeholder="Pakistan"
              id="grid-1-2"
              onChange={passportIssuePlaceChangeHandler}
              value={enteredPIssuePlace}
            />
          </div>

          <div className="flex-item">
            <p className="flex-item-field">Passport Issue Date</p>
            <input
              className="flex-item-field"
              type="date"
              placeholder="04/Apr/2017"
              id="grid-1-2"
              onChange={passportIssueDateChangeHandler}
              value={enteredPIssueDate}
            />
          </div>

          <div className="flex-item">
            <div className="flex-item-field">Passport Expiry Date 4</div>
            <input
              className="flex-item-field"
              type="date"
              id="grid-1-2"
              onChange={passportExpiryChangeHandler}
              value={enteredPExpiryDate}
            />
          </div>

          <div className="flex-item">
            <p className="flex-item-field">Vissa Number</p>
            <input
              className="flex-item-field"
              type="nic"
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
              placeholder="xxxxx-xxxxxxx-x"
              id="grid-1-2"
              onChange={visaNumberChangeHandler}
              value={enteredVNumber}
            />
          </div>

          <div className="flex-item">
            <div className="flex-item-field">Vissa Issue Place</div>
            <input
              className="flex-item-field"
              type="text"
              placeholder="UAE"
              id="grid-1-2"
              onChange={vissaIssuePlaceChangeHandler}
              value={enteredVIssuePlace}
            />
          </div>

          <div className="flex-item">
            <p className="flex-item-field">Vissa Issue Date</p>
            <input
              className="flex-item-field"
              type="date"
              id="grid-1-2"
              onChange={vissaIssueDateChangeHandler}
              value={enteredVIssueDate}
            />
          </div>

          <div className="flex-item">
            <div className="flex-item-field">Vissa Expiry Date</div>
            <input
              className="flex-item-field"
              type="date"
              id="grid-1-2"
              onChange={vissaExpiryDateChangeHandler}
              value={enteredVExpiryDate}
            />
          </div>

          <div className="flex-item">
            <p className="flex-item-field">National ID Number</p>
            <input
              className="flex-item-field"
              type="nic"
              placeholder="xxxxx-xxxxxxx-x"
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
              id="grid-1-2"
              onChange={nicNumberChangeHandler}
              value={enteredNIDNumber}
            />
          </div>

          <div className="flex-item">
            <div className="flex-item-field">National ID Expiry Date</div>
            <input
              className="flex-item-field"
              type="date"
              id="grid-1-2"
              onChange={nicExpiryChangeHandler}
              value={enteredIDExpiryDate}
            />
          </div>

          <div className="flex-item">
            <p className="flex-item-field">Issuing Authority</p>
            <input
              className="flex-item-field"
              type="text"
              id="grid-1-2"
              onChange={issuingAuthChangeHandler}
              value={enteredIAuthority}
            />
          </div>

          <button type="submit" className="btn btn-secondary" id="button">
            Submit Form
          </button>
        </form>
      </div>

      <style jsx>{`
        .flex-container {
          border: 1px solid black;
          margin: 10px;
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          /* width: 800px; */
        }

        .flex-item {
          /* background-color: blue; */
          border: 1px solid black;
          border-radius: 15px;
          margin: 6px;
          padding: 5px;
          width: 780px;
          /* text-align: center; */
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .flex-item-field {
          /* background-color: pink; */
          border: 1px solid black;
          margin: 10px;
          padding: 10px;
          width: 194px;
          margin: 10px;
        }

        #button {
          padding-left: 9px;
          margin: 8px;
        }

        .heading {
          background-color: blue;
          margin: 10px;
          text-decoration-color: aliceblue;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
