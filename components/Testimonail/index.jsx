import styles from "./styles.module.css"
const Testimonial = () => {
  return (
    <section className={`py-8 md:py12 lg:py-16 ${styles.testimonal}`} id="Testimonail">
      <h4 className={`${styles.label} text-center text-lg font-bold font-sen mb-2.5`}>What customers say about us</h4>
      <h3 class="font-bold text-center text-white text-5xl font-poppins">Testimonials</h3>
    </section>
  )
};

export default Testimonial;