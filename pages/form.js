
import React, { useState } from "react";

export default function form() {

    const [enteredPNumber, setEnteredPNumber] = useState('');

    const [enteredPIssuePlace, setEnteredPIssuePlace] = useState('');

    const [enteredPIssueDate, setEnteredPIssueDate] = useState('');

    const [enteredPExpiryDate, setEnteredPExpiryDate] = useState('');

    const [enteredVNumber, setEnteredVNumber] = useState('');

    const [enteredVIssuePlace, setEnteredVIssuePlace] = useState('');

    const [enteredVIssueDate, setEnteredVIssueDate] = useState('');

    const [enteredVExpiryDate, setEnteredVExpiryDate] = useState('');

    const [enteredNIDNumber, setEnteredNIDNumber] = useState('');

    const [enteredIDExpiryDate, setEnteredIDExpiryDate] = useState('');

    const [enteredIAuthority, setEnteredIAuthority] = useState('');


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
            issuingAuthority: enteredIAuthority
        };

        console.log(formData);

        setEnteredPNumber('');
        setEnteredPIssuePlace('');
        setEnteredPIssueDate('');
        setEnteredPExpiryDate('');
        setEnteredVNumber('');
        setEnteredVIssuePlace('');
        setEnteredVIssueDate('');
        setEnteredVExpiryDate('');
        setEnteredNIDNumber('');
        setEnteredIDExpiryDate('');
        setEnteredIAuthority('');

    };


    return (
        <div className='center'>

            <form className='grid-container' onSubmit={submitHandler} >
                <div className='grid-item' id='grid-1'><h3>Passport/Visa/National ID Details</h3></div>

                <div className='grid-item' id='grid-2'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Passport Number</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='text' placeholder='CZ0847662' id='grid-1-2' onChange={passportNumberChangeHandler} value={enteredPNumber} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-3'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Passport Issue Place</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='text' placeholder='Pakistan' id='grid-1-2' onChange={passportIssuePlaceChangeHandler} value={enteredPIssuePlace} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-4'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Passport Issue Date</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='date' placeholder='04/Apr/2017' id='grid-1-2' onChange={passportIssueDateChangeHandler} value={enteredPIssueDate} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-5'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Passport Expiry Date</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='date' id='grid-1-2' onChange={passportExpiryChangeHandler} value={enteredPExpiryDate} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-6'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Vissa Number</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='nic' pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}" placeholder='xxxxx-xxxxxxx-x' id='grid-1-2' onChange={visaNumberChangeHandler} value={enteredVNumber} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-7'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Vissa Issue Place</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='text' placeholder='UAE' id='grid-1-2' onChange={vissaIssuePlaceChangeHandler} value={enteredVIssuePlace} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-8'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Vissa Issue Date</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='date' id='grid-1-2' onChange={vissaIssueDateChangeHandler} value={enteredVIssueDate} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-9'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Vissa Expiry Date</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='date' id='grid-1-2' onChange={vissaExpiryDateChangeHandler} value={enteredVExpiryDate} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-10'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Nationa ID Number</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='nic' placeholder='xxxxx-xxxxxxx-x' pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}" id='grid-1-2' onChange={nicNumberChangeHandler} value={enteredNIDNumber} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-11'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>National ID Expiry Date</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='date' id='grid-1-2' onChange={nicExpiryChangeHandler} value={enteredIDExpiryDate} />
                        </div>
                    </div>
                </div>

                <div className='grid-item' id='grid-12'>
                    <div className='grid-container-1'>
                        <div className='grid-item-1' id='grid-1-1'>
                            <p>Issuing Authority</p>
                        </div>
                        <div className='grid-item-1'>
                            <input type='text' id='grid-1-2' onChange={issuingAuthChangeHandler} value={enteredIAuthority} />
                        </div>
                    </div>
                </div>

                <button className='submit__actions' type='submit'>Add Expense</button>
            </form>


            <style jsx>{`
        .center{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 136px);
            justify-content: center;
            margin: 10px;
            display: grid;
            grid-template-areas: 
            'mainGrid mainGrid mainGrid mainGrid mainGrid mainGrid';
          }
          .grid-container{
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 136px);
            grid-template-areas: 
            'passport passport passport passport passport passport'
            'passportNumber passportNumber passportNumber passportIssueDate passportIssueDate passportIssueDate'
            'visaNumber visaNumber visaNumber visaIssueDate visaIssueDate visaIssueDate'
            'issuingAuthority issuingAuthority issuingAuthority nic nic nic'
            'passportIssuePlace passportIssuePlace passportIssuePlace passportExpiryDate passportExpiryDate passportExpiryDate'
            'vissaIssuePlace vissaIssuePlace vissaIssuePlace visaExpiryDate visaExpiryDate visaExpiryDate'
            'nicExpiryDate nicExpiryDate nicExpiryDate nicExpiryDate nicExpiryDate nicExpiryDate'; 
          }
          .grid-container-1{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 50px);
            display: grid;
            grid-template-areas: 
            'heading heading input input input input'; 
          }
          .grid-item{
            border: 1px solid black;
            padding: 5px;
            text-align: start;
            border-radius: 10px;
          }
          
          .grid-item-1{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 896px);
          }
          
          #grid-1{
            grid-area: passport;
            background-color: blue;
            border-radius: 10px;
            margin-bottom: 5px;
          }
          
          #grid-1 h3{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 186px);
            padding: 3px;
            margin-top: 10px;
            color: white;
          }
          
          #grid-2{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 186px);
            grid-area: passportNumber;
          }  
          
          #grid-3{
            grid-area: passportIssueDate;
          }
          
          #grid-4{
            grid-area: visaNumber;
          }
          
          #grid-5{
            grid-area: visaIssueDate;
          }
          
          #grid-6{
            grid-area: issuingAuthority;
          }
          
          #grid-7{
            grid-area: nic;
          }
          
          #grid-8{
            grid-area: passportIssuePlace;
          }
          
          #grid-9{
            grid-area: passportExpiryDate;
          }
          
          #grid-10{
            grid-area: vissaIssuePlace;
          }
          
          #grid-11{
            grid-area: visaExpiryDate;
          }
          
          #grid-12{
            grid-area: nicExpiryDate;
          }
          
          #grid-1-1{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 186px);
            grid-area: heading;
            border-radius: 20px;
          }
          
          #grid-1-1  p{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 186px);
            padding: 10px;
            text-align: center;
            margin-top: 10px;
          }
          
          #grid-1-2{
            grid-gap: 10px;
            grid-template-columns: repeat(auto-fill, 186px);
            grid-area: input;
            padding: 10px;
            border-radius: 20px;
            margin-top: 12px;
          }
          
          .submit__actions{
            text-align: left;
            padding-left: 25px;
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
    )
}