const FAQ = ({FAQS}) => (
    <section id="FAQ" className="relative py-12 md:py-16 bg-black-bg" >
      <h4 className="text-light-green text-center text-lg font-bold font-sen mb-2.5">FAQ</h4>
      <h3 className="font-bold text-center text-white text-3xl md:text-5xl font-poppins">Frequently Asked <br/> Question</h3>
      <div className='grid grid-cols-1 mx-auto w-4/5 md:mt-5'>
        {FAQS.map( faq => (
          <div className="pt-10" key={faq.id}>
            <div className='text-left text-white pb-1 flex flex-row items-center text-xl font-poppins font-semibold'>
              {faq.question}
            </div>
            <div className='font-normal leading-6 text-base text-light-grey font-poppins'>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
);

export default FAQ;