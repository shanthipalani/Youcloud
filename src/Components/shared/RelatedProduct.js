import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
const RelatedProductSwiper = () => {
  const [current, setCurrent] = useState(0);
    return (
      <Swiper
        spaceBetween={40}
        slidesPerView={6}
        loop={true}
        pagination={{ clickable: true, renderBullet: (index, className) => `<span class="dot swiper-pagination-bullet">${index + 1}</span>` }}
        breakpoints={
          {
            1920: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 35,
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
        onActiveIndexChange={(value) => setCurrent(value.realIndex)}
      >
        {Array(8).fill(null).map((item, index) => (
          <SwiperSlide key={index}><Link to="/Product" className="product pb-3" style={ current == index ? {backgroundColor: "#E7E9EB"} : null}>

        <div className="w-100" style={{height: 210, backgroundColor: "#E7E9EB", borderRadius: 20}}></div>
        <div className="promobadge">
        {current != index ? null :  <div className="leftbadge">ONLY 3 LEFT</div> }
        </div>
        
        <div className={`${current == index ? "px-4" : null} w-100`}>
        {current != index ? null :   <div className="pt-3 ">

        </div>}
 
        <div className="py-2">
        {current == index ? (<>
          <p className="py-1" style={{fontSize: 16}}>Frido Ultra Comfortable Copper {index + 1}</p>
          <h5 style={{fontWeight: "bold"}}>$1.659,00</h5>
        </>) :   (<>
          <p className="py-1">Frido Ultra Comfortable Copper {index + 1}</p>
          <h6>$1.659,00</h6></>) }

          <div className="d-flex w-100 justify-content-between px-1">
          <span class="badge rounded-pill px-2 py-1">CHAIRS</span>
          <div style={{fontSize: 8}}><i className="far fa-dot-circle px-1" style={{}}></i>
          <i className="fas fa-circle px-1" style={{color: "#726865"}}></i>
          <i className="fas fa-circle px-1" style={{}}></i>
          <i className="fas fa-circle px-1" style={{color: "#383D52"}}></i>
          </div>
          </div>

        </div>
        {current == index ? null :   <div className="w-100">
        <button type="button" class="btn-custom-secondary"><img className="mr-2" src={require(`../../Asset/images/cart2.png`).default} style={{height: 18}} />Add to cart</button>

        </div>}
 
        </div>
       
      
      
          </Link></SwiperSlide>
        ))}
         <h4 style={{position: "absolute", top: 20}}>Related Products</h4>

      </Swiper>
    );
  };


  export default RelatedProductSwiper;