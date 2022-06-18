import React, { useState } from "react"
import { TiTick } from 'react-icons/ti';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const WABAForm = () => {
  const [formFields, setFormFields] =  useState({
    name: "",
    phone: "",
  });
  const {name, phone} = formFields;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isNumberValid, setIsNumberValid] = useState(true);
  const [submissionError, setSubmissionError] = useState(false);
  const [apiResponse, setApiResponse] = useState("We have received your request. Our technician will call you shortly.");
  const [loading, setLoading] = useState(false);

  const checkOnlyNumbers = (number) => {
    if(!/\D/.test(number) && number.length === 10) {
      return true;
    }
    return false;
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
        "Date": new Date(),
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
      setApiResponse("We have received your request. Our technician will call you shortly.");
      setLoading(false);
    })
    .catch(error => {
      setFormSubmitted(true);
      setSubmissionError(true);
      setApiResponse("Currently, we are not able to take your submission. Please call us on 8459982237");
      setLoading(false);
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const areInputsValid = validateInputs();
    if(areInputsValid) {
      setLoading(true);
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_WHATSAPP_TOKEN}`);
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": phone,
        "type": "template",
        "template": {
          "name": "welcome",
          "language": {
            "code": "en"
          },
          "components": [{
            "type": "HEADER",
            "parameters": [
                {
                    "type": "text",
                    "text": `${name}`
                }
            ]
          }]
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
          } else if(response.status == 400) {
            sendLeadToSheet();
            setFormSubmitted(true);
            setSubmissionError(true);
            setLoading(false);
          }
        })
        .catch(error => {
          sendLeadToSheet();
          setFormSubmitted(true);
          setSubmissionError(true);
          setLoading(false);
        });
    }
  }

  return (
    <div className="form mt-16 lg:mt-0 p-8 md:p-12 w-full md:w-96 bg-black-bg rounded-md relative">
      <form action="" className={`max-w-md ${formSubmitted ? "invisible" : ""} ${loading ? "invisible" : ""}`}>
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
          <label htmlFor='phone' className="text-white text-base font-sen pb-2">WhatsApp Number</label>
          <input 
            id='phone'
            name='phone'
            type='text'
            value={phone}
            onChange={handleChange}
            placeholder='Your mobile number'
            className="rounded-md focus:bg-black-bg focus:text-white focus:border-light-green focus:shadow-none focus:ring-transparent font-sen"
          />
          {!isNumberValid && <p className="error text-red-500 absolute bottom-0 text-sm">Please enter your 10 digit phone mumber</p>}
        </div>
        <button className="px-4 py-1 md:px-6 md:py-2 text-white text-lg font-sen rounded-md bg-pink mt-2 block" onClick={handleSubmit}>Submit</button>
      </form>
      <div className={`w-full px-8 text-center font-sen  text-white text-2xl absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 ${formSubmitted ? "" : "invisible"}`}>
        <div className="success">
          <TiTick size={70} className="mx-auto "/>
        </div>
        <h3 className="pb-6 text-lg md:text-2xl">{apiResponse}</h3>
        <button className="px-4 py-1 md:px-6 md:py-2 text-base rounded-md bg-pink" onClick={() => setFormSubmitted(false)}>Submit New</button>
      </div>
      <div className={`w-full px-8 text-center font-sen  text-white text-2xl absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 ${loading ? "" : "invisible"} h-full flex justify-center items-center flex-col bg-form-bg z-40`}>
        <div className="loading">
          <AiOutlineLoading3Quarters size={70} className="mx-auto animate-spin"/>
        </div>
        <h3 className="pb-6 text-lg md:text-2xl mt-6">Submitting</h3>
      </div>         
    </div>
  )
};

export default WABAForm;