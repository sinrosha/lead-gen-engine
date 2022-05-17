import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
// Import Swiper styles
import 'swiper/css';

const BrandSlider = ({brands}) => {
  return (
    <section id="BrandSlider" className="bg-black-bg">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
      >
        {brands.map( brand => (
          <SwiperSlide key={brand.id}>
            <Image width="431" height="94" src={brand.src} alt={brand.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandSlider;