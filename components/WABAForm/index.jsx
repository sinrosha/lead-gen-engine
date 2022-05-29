import React, { useState } from "react"
import { TiTick } from 'react-icons/ti';

const WABAForm = () => {
  const [formFields, setFormFields] =  useState({
    name: "",
    phone: "",
  });
  const {name, phone} = formFields;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);

  const checkOnlyNumbers = (number) => {
    if(!/\D/.test(number)) {
      return true;
    }
    return false;
  }

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return today = mm + '/' + dd + '/' + yyyy;
  }

  const handleChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const validateInputs = () => {
    const isNameValid = name.length > 2  ? true : false;
    isNameValid ? setIsNameValid(true) : setIsNameValid(false);

    const isNumberValid = phone.length ? checkOnlyNumbers(phone) : false;
    isNumberValid ? setIsNumberValid(true) : setIsNumberValid(false);

    if (isNameValid && isNumberValid) {
      return true;
    } else {
      return false;
    }
  }

  const sendLeadToSheet = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify([
      {
        "Date": getDate(),
        "Name": name,
        "Phone": phone
      }
    ]);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://sheet.best/api/sheets/eac98bf2-c23f-424d-8c93-7b96a933c0cb", requestOptions)
      .then(response => {
        setFormSubmitted(true);
        console.log(response.json(), "JSON");
      })
      .catch(error => console.log('error', error));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const areInputsValid = validateInputs();
    if(areInputsValid) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer EAAHjvHQlgOUBAI0CICXwyArbrOKUIKvvEoZAXGtNjojESKeXjosGsWdJUfWZCvrcndMQWZB0mWWNyLwQzBL0xyceotBLDoh3OX53t16no83DI0vnIuKeSJySEVOQW7VeQkSQwuQRdzoOZCGrdV6xZB7URCwSy7MomgbXDoak1ClPZBvdUQTznj");
      myHeaders.append("Content-Type", "application/json");

      const phoneZeroRemoved = phone.slice(0,1) === 0 ? phone.slice(1) : phone;
      const phoneWithCountryCode = phoneZeroRemoved.slice(0,2) == 91 ? phoneZeroRemoved : `91${phoneZeroRemoved}`;
  
      var raw = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phoneWithCountryCode,
        "type": "template",
        "template": {
          "name": "hello_world",
          "language": {
            "code": "en_US"
          }
        }
      });
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
  
      fetch("https://graph.facebook.com/v13.0/100118056057549/messages", requestOptions)
        .then(response => {
          if(response.status == 200) {
            sendLeadToSheet();
          }
        })
        .catch(error => console.log('error', error));
    }
  }

  return (
    <div className="form mt-16 lg:mt-0 p-8 md:p-12 bg-form-bg rounded-md w-72 md:w-96 relative">
      <form action="" className={`max-w-md ${formSubmitted ? "invisible" : ""}`}>
        <div className='form-row flex flex-col pb-6 relative'>
          <label htmlFor='name' className="text-white text-base font-sen pb-2">Name</label>
          <input 
            id='name'
            name='name'
            type='text'
            value={name}
            placeholder='Your Name'
            onChange={handleChange}
            className="rounded-md focus:bg-black-bg focus:text-white focus:border-light-green focus:shadow-none focus:ring-transparent font-sen"
          />
          {!isNameValid && <p className="error text-red-500 absolute bottom-0 text-sm">Please enter your name</p>}
        </div>
        <div className='form-row flex flex-col pb-6 relative'>
          <label htmlFor='phone' className="text-white text-base font-sen pb-2">Mobile Number</label>
          <input 
            id='phone'
            name='phone'
            type='text'
            value={phone}
            onChange={handleChange}
            placeholder='Your mobile number'
            className="rounded-md focus:bg-black-bg focus:text-white focus:border-light-green focus:shadow-none focus:ring-transparent font-sen"
          />
          {!isNumberValid && <p className="error text-red-500 absolute bottom-0 text-sm">Please enter your phone mumber</p>}
        </div>
        <button className="px-4 py-1 md:px-6 md:py-2 text-white text-lg font-sen rounded-md bg-light-green mt-2 block" onClick={handleSubmit}>Submit</button>
      </form>
      <div className={`w-full px-8 text-center font-sen  text-white text-2xl absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 ${formSubmitted ? "" : "invisible"}`}>
        <div className="success">
          <TiTick size={70} className="mx-auto "/>
        </div>
        <h3 className="pb-6 text-lg md:text-2xl">We have received your request. Our technician will call you shortly.</h3>
        <button className="px-4 py-1 md:px-6 md:py-2 text-base rounded-md bg-light-green" onClick={() => setFormSubmitted(false)}>Submit New</button>
      </div>        
    </div>
  )
};

export default WABAForm;