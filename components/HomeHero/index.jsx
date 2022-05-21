import React, { useState } from "react";
import { TiTick } from 'react-icons/ti';

const HomeHero = () => {

  const [formFields, setFormFields] =  useState({
    name: "",
    phone: "",
  });
  const {name, phone} = formFields;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setFormFields({
      ...formFields,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <section className="bg-black-bg py-12 md:py-16" id="Hero">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="content">
          <h1 className="text-white text-3xl md:text-5xl font-sen">HandyMan LCD LED TV <br className="hidden lg:block" /> Repair and Services</h1>
          <p className="text-white text-xl font-poppins py-6 md:py-8">We repair LCD, LED TV of all brands all over Mumbai.</p>
          <a href="tel:7020912120" className="font-medium inline-block md:font-semibold md:font-base px-3 py-1 md:px-6 md:py-2 rounded-md bg-light-green text-white font-sen">
            Click to call us
          </a>
        </div>
        <div className="form mt-16 lg:mt-0 p-8 md:p-12 bg-form-bg rounded-md w-72 md:w-96 relative">
          <form action="" className={`max-w-md ${formSubmitted ? "invisible" : ""}`}>
            <div className='form-row flex flex-col pb-6'>
              <label htmlFor='name' className="text-white text-base font-sen pb-2 ">Name</label>
              <input 
                id='name'
                name='name'
                type='text'
                value={name}
                placeholder='Your Name'
                onChange={handleChange}
                className="rounded-md focus:bg-black-bg focus:text-white focus:border-light-green focus:shadow-none focus:ring-transparent font-sen"
              />
            </div>
            <div className='form-row flex flex-col pb-7'>
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
            </div>
            <button className="px-4 py-1 md:px-6 md:py-2 text-white text-lg font-sen rounded-md bg-light-green" onClick={handleSubmit}>Submit</button>
          </form>
    
          <div className={`w-full px-8 text-center font-sen  text-white text-2xl absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 ${formSubmitted ? "" : "invisible"}`}>
            <div className="success">
              <TiTick size={70} className="mx-auto "/>
            </div>
            <h3 className="pb-6 text-lg md:text-2xl">We have received your request. Our technician will call you shortly.</h3>
            <button className="px-4 py-1 md:px-6 md:py-2 text-base rounded-md bg-light-green" onClick={() => setFormSubmitted(false)}>Submit New</button>
          </div>        
        </div>
      </div>
    </section>
  )
};

export default HomeHero;