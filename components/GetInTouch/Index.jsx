import React from 'react'
import styles from "./style.module.css"
function GetInTouch() {
  return (
    <div>
        <div className={`getInTouch-section relative py-12 md:py-16 bg-light-green ${styles.getInTouchSection}`}>
            <div className="container">
                 <div className="mr-auto ml-auto text-center">
                     <h4 className='text-white block w-full mt-10 text-center text-lg font-bold font-sen mb-2.5'>Get in touch</h4>
                     <h3 className='text-white text-7xl font-semibold text-center font-poppins mt-5 mb-3'>Ready to hire?</h3>
                     <button className={`bg-black-bg inline-block py-3 px-6 font-sen text-white font-bold text-sm rounded mt-8 ${styles.btnBlk}`}>BOOK DEMO</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch