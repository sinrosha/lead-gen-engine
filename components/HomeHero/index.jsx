import WABAForm from "../WABAForm";

const HomeHero = () => {
  return (
    <section
      style={{ backgroundImage: "url(/bg-one.jpg)" }}
      className="py-12 md:py-16 bg-cover bg-no-repeat bg-center bg-scroll"
      id="Hero"
    >
      <div className="w-10/12 md:w-4/5 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="content md:w-auto">
          <h1 className="text-white text-4xl leading-tight md:leading-snug md:text-5xl font-sen">
            HandyMan <br className="hidden lg:block" /> Repair and Services
          </h1>
          <p className="text-white text-xl font-poppins py-6 md:py-8 leading-normal md:w-8/12">
            HandyMan Repair and Services is one of the trusted brand of Mumbai.
            We repair all kind of home appliance such as LCD, LED TV, WASHING
            MACHINE, REFRIGERATOR and AIR CONDITIONER of all brands.
          </p>
          <div className="">
            <a
              href="tel:08459982237"
              className="font-medium inline-block md:font-semibold md:font-base px-3 py-1 md:px-6 md:py-2 rounded-md bg-pink text-white font-sen"
            >
              Click to call us
            </a>
            <a
              href="tel:08459982237"
              className="font-medium inline-block md:font-semibold md:font-base px-3 py-1 md:px-6 md:py-2 ml-4 border border-solid border-pink rounded-md text-pink bg-white font-sen"
            >
              8459982237
            </a>
          </div>
        </div>
        <WABAForm />
      </div>
    </section>
  );
};

export default HomeHero;
