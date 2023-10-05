import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      navigation={false} // Add navigation arrows
      pagination={{ dynamicBullets: true, }}
      autoplay={{ delay: 5000 }} // Add pagination dots
    >
      <SwiperSlide>
        <div className="testimonial">
           <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476114/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Repeat_Grid_38_ipl0tv.png'"
            alt="Testimonial 1"
          /> 
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sed posuere orci. Suspendisse potenti."
          </p>
          <h3>John Doe</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial">
           <img
            src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1667476113/samples/techstudio/Icons%20and%20Images/Icons%20and%20Images/Tech%20Studio%20images/Rectangle_7475_gijnxw.png"
            alt="Testimonial 2"
          /> 
          <p>
            "Vivamus eu ipsum vel arcu vestibulum fringilla. Proin
            tristique rhoncus quam, at lacinia elit vestibulum
            viverra."
          </p>
          <h3>Jane Smith</h3>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Testimonials;
