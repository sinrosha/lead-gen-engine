import WABAForm from "../WABAForm"

const HomeHero = () => {
  return (
    <section className="bg-black-bg py-12 md:py-16 bg-[#20222eeb]" id="Hero">
      <div className="w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="content">
          <h1 className="text-white text-3xl md:text-5xl font-sen">HandyMan LCD LED TV <br className="hidden lg:block" /> Repair and Services</h1>
          <p className="text-white text-xl font-poppins py-6 md:py-8">We repair LCD, LED TV of all brands all over Mumbai.</p>
          <a href="tel:7020912120" className="font-medium inline-block md:font-semibold md:font-base px-3 py-1 md:px-6 md:py-2 rounded-md bg-pink text-white font-sen">
            Click to call us
          </a>
        </div>
        <WABAForm />
      </div>
    </section>
  )
};

export default HomeHero;