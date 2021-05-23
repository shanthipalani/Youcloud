import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
const Bestsellers = props => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      breakpoints={
        {
          1920: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
    
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      }
     activeSlideKey={(key) => console.log(key)}
     onActiveIndexChange={(key) => console.log(key)}
    >       
       {Array(8).fill(null).map((index) => (
        <SwiperSlide key={index}><Link to="/Product" className="product pb-3">
        <div className="w-100" style={{height: 210, backgroundColor: "#E7E9EB", borderRadius: 20}}></div>
        <div className="promobadge">
        <div className="leftbadge">NEW</div>
        <div className="leftbadge2">HOT</div>
        </div>
        
        <div className="w-100">
        <div className="py-2">
          <p className="py-1">Frido Ultra Comfortable Copper</p>
          <h6>$1.659,00</h6>
          <div className="d-flex w-100 justify-content-between px-1">
          <span class="badge rounded-pill px-2 py-1">CHAIRS</span>
          <div style={{fontSize: 8}}><i className="far fa-dot-circle px-1" style={{}}></i>
          <i className="fas fa-circle px-1" style={{color: "#726865"}}></i>
          <i className="fas fa-circle px-1" style={{}}></i>
          <i className="fas fa-circle px-1" style={{color: "#383D52"}}></i>
          </div>
          </div>

        </div>
        <div className="w-100">
        <button type="button" class="btn-custom-secondary"><img className="mr-2" src={require(`../../Asset/images/cart2.png`).default} style={{height: 18}} />Add to cart</button>

        </div>
 
        </div>
       
      
        </Link></SwiperSlide>
      ))}
       <h4 style={{position: "absolute", top: 20}}>Bestsellers</h4>
    </Swiper>
  );
};

  export default Bestsellers;