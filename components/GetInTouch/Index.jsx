import React from 'react'
function GetInTouch() {
  return (
    <section id="CTA">
      <div className="relative py-12 md:py-16 bg-light-green" 
        style={{"background-image": "linear-gradient(27deg, #3ccf91 32%, #68d4ff)"}}>
        <div className="mx-auto text-center">
          <h4 className='text-white block w-full text-center text-lg font-bold font-sen mb-2.5'>
            Get in touch
          </h4>
          <h3 className='text-white text-7xl font-semibold text-center font-poppins mt-5 mb-3'>
            Ready to hire?
          </h3>
          <button className="bg-black-bg inline-block py-3 px-6 font-sen text-white font-bold text-sm rounded mt-8 hover:opacity-80 transition">BOOK DEMO</button>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch