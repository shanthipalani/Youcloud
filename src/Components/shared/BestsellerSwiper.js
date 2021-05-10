import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Bestsellers = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={
        {
          768: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
    
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }
      }
     activeSlideKey={(key) => console.log(key)}
     onActiveIndexChange={(key) => console.log(key)}
    >
       {Array(8).fill(null).map((index) => (
        <SwiperSlide key={index}><div className="product pb-3">
        <div className="w-100" style={{height: "50%", backgroundColor: "#E7E9EB", borderRadius: 20}}></div>
        <div className="promobadge">
        <div className="leftbadge">New</div>
        <div className="leftbadge2">Hot</div>
        </div>
        
        <div className="w-100 px-4">
        <div className="py-3">
          <p>Frido Ultra Comfortable Copper</p>
          <h6>$1.659,00</h6>
          <span class="badge rounded-pill bg-info text-dark px-3">Info</span>
        </div>
        <div className="w-100 px-2">
        <button className="btn btn-sm btn-warning btn-block">
          Add to cart
        </button>
        </div>
 
        </div>
       
      
        </div></SwiperSlide>
      ))}
    </Swiper>
  );
};

  export default Bestsellers;