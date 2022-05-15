import styles from "./styles.module.css"
const Testimonial = () => {
  const testimonialContent = [
    {
      id: 1,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/6255b748ae1f13ef925fb0a6_1620387055511.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Saurabh Gupta",
      designation: "CEO, UrbanPiper"
    },
    {
      id: 2,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/6255d050f56b43c47d8daca5_1632862372779.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Pryce Adade-Yebesi",
      designation: "Co-Founder, Utopia Labs"
    },
    {
      id: 3,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/6255b74263b08d81d7625d8c_1565075801871.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Srijan Shetty",
      designation: "CTO, FanStan"
    },
    {
      id: 1,
      img: "https://uploads-ssl.webflow.com/60809af553239c9ff8d2468b/627cafba3bd1ef2a1a191629_1517777060376.jpeg",
      text: "I am really happy to see a platform which can be super-personalised to do an outreach and then the number of quality responses coming back. Its a platform which can really do best quality sourcing and makes it simple to close senior leadership tech-hires in no time",
      name: "Harsh",
      designation: "Founder, Homework App"
    }
  ];
  return (
    <section className={`py-12 md:py-16 ${styles.testimonal}`} id="Testimonail">
      <h4 className={`${styles.label} text-center text-lg font-bold font-sen mb-2.5`}>What customers say about us</h4>
      <h3 class="font-bold text-center text-white text-5xl font-poppins">Testimonials</h3>
      <div className={`w-4/5 mx-auto flex flex-wrap flex-1 mt-10 md:mt-14 gap-x-4 md:gap-x-10 gap-y-14`}>
        {testimonialContent.map( testimonial => (
          <div className={`${styles.testimonail} text-center font-poppins w-full md:w-[calc(50%-40px)]`} key={testimonial.id}>
            <picture className="img block w-40 mx-auto">
              <img src={testimonial.img} className="rounded-full" alt={testimonial.name}/>
            </picture>
            <p className="text-white py-5 md:p-5 text-lg md:w-11/12 mx-auto">{testimonial.text}</p>
            <p className="name text-slate-400 mb-1 font-poppins">{testimonial.name}</p>
            <p className="designation text-slate-300 font-poppins">{testimonial.designation}</p>
          </div>
          )
        )}
      </div>
    </section>
  )
};

export default Testimonial;