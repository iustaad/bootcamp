import React, { useState } from "react";

export default function ApointmentCard() {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredApt, setEnteredApt] = useState("");
  const [enteredApt1, setEnteredApt1] = useState("");
  const [enteredApt2, setEnteredApt2] = useState("");
  const [enteredApt3, setEnteredApt3] = useState("");

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const aptChangeHandler = (event) => {
    setEnteredApt(event.target.value);
  };

  const aptChangeHandler1 = (event) => {
    setEnteredApt1(event.target.value);
  };

  const aptChangeHandler2 = (event) => {
    setEnteredApt2(event.target.value);
  };

  const aptChangeHandler3 = (event) => {
    setEnteredApt3(event.target.value);
  };

  const date = new Date(enteredDate);
  const time = enteredApt;
  const time1 = enteredApt1;
  const time2 = enteredApt2;
  const time3 = enteredApt3;

  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div>
      <div className="container">
        <div className="date">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate} />
        </div>
        <div className="row">
          <div>
            <h2>
              {day} {month} {year}
            </h2>
          </div>

          <h3>Lindsey M Neiss</h3>

          <img
            src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
            alt="logo"
          />
          <div className="inputdiv">
            <input type="time" onChange={aptChangeHandler} value={enteredApt} />
            <button>{time}</button>

            <input
              type="time"
              onChange={aptChangeHandler1}
              value={enteredApt1}
            />
            <button>{time1}</button>

            <input
              type="time"
              onChange={aptChangeHandler2}
              value={enteredApt2}
            />
            <button>{time2}</button>

            <input
              type="time"
              onChange={aptChangeHandler3}
              value={enteredApt3}
            />
            <button>{time3}</button>
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
          margin-left: -16px;
          margin-top: 10px;
          border-radius: 5px;
          padding: 10px;
          box-shadow: grey 3px 2px 51px -15px;
          width: 90%;
          height: 313px;
        }

        .date {
          margin: 10px;
        }

        img {
          border-radius: 50%;
          width: 40%;
          margin: 4px;
        }

        .inputdiv {
          margin-top: 20px;
          padding: 2px;
        }

        h3 {
          color: #3041af;
        }

        button {
          margin-left: 7px;
          margin-right: 7px;
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
