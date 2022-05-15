import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const BrandSlider = ({brands}) => {
  return (
    <section id="BrandSlider" className="bg-black-bg">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {brands.map( brand => (
          <SwiperSlide key={brand.id}>
            <img src={brand.src} alt={brand.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BrandSlider;