import Image from "next/image";

const BrandLogo = ({ logo }) => {
  return (
    <section id="BrandSlider" className="bg-black-bg py-12 md:py-16 ">
      <h4 className="text-pink text-center text-lg font-bold font-sen mb-2.5">
        Brands
      </h4>
      <h3 className="font-bold text-center text-white text-3xl md:text-5xl font-poppins px-4">
        We repair TV of the brands given below
      </h3>
      <div className="mx-auto md:container md:flex md:flex-row md:justify-center md:mx-auto md:columns-1 pt-6">
        {logo.map((brand) => (
          <div
            className="logo cursor-pointer p-4 rounded-md flex flex-col items-center md:w-auto"
            key={brand.id}
          >
            <a href={brand.link}>
              <Image
                className="text-white"
                width="120px"
                height="60px"
                src={brand.src}
                alt={brand.name}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogo;
