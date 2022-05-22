import React from 'react'

function Number({number}) {
  return (
    <section id="Number" className='py-12 bg-black-bg'>
        <div className='mx-auto w-4/5'>
        <div className='flex flex-row justify-center mb-6'>
        <h4 className='text-light-green text-left text-lg font-bold font-sen'>Our customers get access to</h4>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-between'>
        {number.map((data)=>{
            return (
                <div className='flex flex-row items-center'>
                <div>
                    <img className='w' width="70" src={data.img} alt="" />
                </div>
                <div className='px-3 pt-3'>
                    <h2 className='text-white text-5xl font-medium leading-10 mt-0 mb-2'>{data.text}</h2>
                    <p className='font-sen mt-0 pb-3 font-normal text-lg text-white leading-6'>{data.para}</p>
                </div>
            </div>
            )
        })}
       </div>
       </div>
    </section>
  )
}

export default Number