import React from 'react'

function index({RECOMMEND}) {
  return (
    <section id="Recommended" className="relative py-12 md:py-16 bg-black-bg">
            <div className="row flex flex-col items-center justify-between mx-auto w-4/5 md:flex-row">
                <div className="col-md-6 w-full md:w-2/4">
                   <h4 className='text-light-green text-left text-lg font-bold font-sen mb-2.5'>What do recommended engineers get?</h4>
                   <h3 className='font-bold text-left text-white text-3xl md:text-5xl font-poppins'><strong>Top five reasons why your friends will love it </strong></h3>
                   <div className="flex feature mx-auto flex-col justify-center mt-14 items-start">
                     {
                         RECOMMEND.map((data)=>{
                             return (
                               
                                <div className="feature-wrapper flex flex-row items-center mr-4 mb-4 pt-2 pr-6 pb-2 pl-3 rounded-full transition-all bg-light-green w-full md:w-auto">
                                     <div className='w-12 h-12 bg-black-bg rounded-full flex flex-row items-center justify-center'><img className='w-6 h-6 m-0' src={data.img} alt="" /></div>
                                     <p className='mt-0 text-white font-sen text-lg pl-2'>{data.para}</p>
                                 </div>
                                
                             )
                         })
                     }
                  </div>
                </div>
                <div className="col-md-6 w-full md:w-2/4 flex flex-col items-center justify-center">
                    <img src="https://placehold.jp/150x150.png" alt="" />
                </div>
            </div>
    </section>
  )
}

export default index