import Image from 'next/image'

const BrandSlider = ({brands}) => {
  return (
    <section id="BrandSlider" className="bg-black-bg py-12 md:py-16 ">
      <h4 className="text-light-green text-center text-lg font-bold font-sen mb-2.5">Brands</h4>
      <h3 className="font-bold text-center text-white text-3xl md:text-5xl font-poppins">Some of the Brands we work on</h3>
      <div className="mx-auto flex flex-wrap justify-center md:justify-between px-8 w-4/5 pt-8 gap-5">
        {brands.map( brand => (
          <div className="logo w-32" key={brand.id}>
            <Image width="300px" height="150px" src={brand.src} alt={brand.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSlider;