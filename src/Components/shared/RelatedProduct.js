import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const RelatedProductSwiper = () => {
  
    return (
      <Swiper
        spaceBetween={40}
        slidesPerView={6}
        loop={true}
        pagination={{ clickable: true, renderBullet: (index, className) => `<span class="dot swiper-pagination-bullet">${index}</span>` }}
        breakpoints={
          {
            1920: {
              slidesPerView: 8,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
      
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
      
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            }
          }
        }
       activeSlideKey={(key) => console.log(key)}
       onActiveIndexChange={(key) => console.log(key)}
      >
        {Array(8).fill(null).map((index) => (
          <SwiperSlide key={index}><div className="product px-4 pb-3">
          <div className="leftbadge">ONLY 3 LEFT</div>
          <div className="py-3">
            <p>Frido Ultra Comfortable Copper</p>
            <h5>$1.659,00</h5>
            <span class="badge rounded-pill bg-info text-dark px-2">Info</span>
          </div>
          <div className="w-100 px-3">
          <button className="btn btn-sm btn-warning btn-block">
            Add to cart
          </button>
          </div>
   
          <div>
       
          </div>
          </div></SwiperSlide>
        ))}
  
      </Swiper>
    );
  };


  export default RelatedProductSwiper;