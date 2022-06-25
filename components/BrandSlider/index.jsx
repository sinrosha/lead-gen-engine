import Image from "next/image";
import Link from "next/link";

const BrandSlider = ({ brands }) => {
  return (
    <section id="BrandSlider" className="bg-black-bg py-12 md:py-16 ">
      <h4 className="text-pink text-center text-lg font-bold font-sen mb-2.5">
        Services
      </h4>
      <h3 className="font-bold text-center text-white text-3xl md:text-5xl font-poppins px-4">
        Some of the Services that we provide
      </h3>
      <div className="mx-auto flex flex-wrap justify-center md:container md:mx-auto pt-8 gap-5 columns-4 ">
        {brands.map((brand) => (
          <div
            className="logo cursor-pointer hover:bg-pink bg-white p-4 rounded-md flex flex-col items-center w-10/12 md:w-auto"
            key={brand.id}
          >
            <a href={brand.link}>
              <Image
                className="text-white fill-white"
                width="200px"
                height="100px"
                src={brand.src}
                alt={brand.name}
              />
              <p
                dangerouslySetInnerHTML={{ __html: brand.text }}
                className="hover:text-white text-center pt-4 font-bold text-2xl text-black"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandSlider;
