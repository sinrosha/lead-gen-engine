import Image from 'next/image'
function Stats({stats}) {
  return (
    <section id="Stats" className='py-12 bg-black-bg'>
      <div className='mx-auto w-full md:w-4/5'>
        <div className='flex flex-row justify-center mb-6'>
          <h4 className='text-light-green text-left text-lg font-bold font-sen'>Our customers get access to</h4>
        </div>
        <div className='flex md:flex-row flex-col items-center justify-between'>
          {stats.map((stat)=>{
            return (
              <div className='flex flex-row items-center justify-between mb-4 md:mb-0' key={stat.id}>
                <div>
                  <Image width="70" height="70" src={stat.img} alt={stat.text + " " + stat.para} />
                </div>
                <div className='px-3 pt-3'>
                  <h2 className='text-white text-3xl md:text-5xl font-medium leading-4 md:leading-10 mt-0 mb-2'>{stat.text}</h2>
                  <p className='font-sen mt-0 pb-3 font-normal text-base md:text-lg text-white leading-6'>{stat.para}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats