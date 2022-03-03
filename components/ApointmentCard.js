import React, { useState } from "react";

export default function ApointmentCard() {
  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <label>Select Date* </label>
          <div className="datefield">
            <input
              type="date"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
          <div className="buttons">
            <p>Select Time* </p>
            <button>10:00 pm</button>
            <button>11:00 pm</button>
            <button>12:00 pm</button>
            <button>01:00 pm</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          margin: 50px;
          width: 407px;
          margin-top: 10px;
          flex-direction: column;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          margin-left: -16px;
          margin-top: 10px;
          border-radius: 5px;
          padding: 10px;
          // box-shadow: grey 3px 2px 51px -15px;
          width: 90%;
          height: 313px;
        }

        .datefield{
          width: 60%;
          margin: 5px;
          padding: 5px;
        }

        .buttons{
          width: 54%;
        }

        .buttons button{
          margin: 10px;
          justify
        }

        label{
          margin: 10px;
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
