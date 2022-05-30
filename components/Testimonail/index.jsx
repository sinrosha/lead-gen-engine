import Image from 'next/image'

const Testimonial = ({testimonials}) => {
  return (
    <section className="py-12 md:py-16 bg-[#20222eeb]" id="Testimonail">
      <h4 className="text-pink text-center text-lg font-bold font-sen mb-2.5">What customers say about us</h4>
      <h3 className="font-bold text-center text-white text-3xl md:text-5xl font-poppins">Testimonials</h3>
      <div className="w-4/5 mx-auto flex flex-wrap flex-1 mt-10 md:mt-14 gap-x-4 md:gap-x-10 gap-y-14">
        {testimonials.map( testimonial => (
          <div className="text-center font-poppins w-full md:w-[calc(50%-40px)]" key={testimonial.id}>
            <picture className="img block w-40 mx-auto">
              <Image width="120" height="120" src={testimonial.img} className="rounded-full" alt={testimonial.name}/>
            </picture>
            <p className="text-white py-5 md:p-5 text-base md:w-11/12 mx-auto">{testimonial.text}</p>
            <p className="text-slate-400 mb-1 font-poppins">{testimonial.name}</p>
            <p className="text-slate-300 font-poppins">{testimonial.designation}</p>
          </div>
          )
        )}
      </div>
    </section>
  )
};

export default Testimonial;