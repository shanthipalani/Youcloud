import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import React from 'react'
import Rating from "react-rating";
import Nav from '../navigation/nav'
import Footer from '../Footer/footer';
import {
  Typography,
  Card,
  Row,
  Col,

  Grid,
  Input,
  Space,
  Divider,
  Breadcrumb,
  Tabs,
} from "antd";
import {
  HomeFilled,
  MenuOutlined,
  StarFilled,
  ClockCircleFilled,
} from "@ant-design/icons";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RelatedProductSwiper from '../shared/RelatedProduct'
import Bestsellers from '../shared/BestsellerSwiper'
import { UncontrolledButtonDropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button } from 'reactstrap';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const { TabPane } = Tabs;

const ProductSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={
        {
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
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
      <SwiperSlide key={1}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo1.png`).default} /></SwiperSlide>
      <SwiperSlide key={2}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo2.png`).default} /></SwiperSlide>
      <SwiperSlide key={3}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo3.png`).default} /></SwiperSlide>
      <SwiperSlide key={4}>Slide 4</SwiperSlide>
    </Swiper>
  );
};

const ProductImage = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop={true}
      activeSlideKey={(key) => console.log(key)}
      onActiveIndexChange={(key) => console.log(key)}
    >
      <SwiperSlide key={1}><div className="imageContainer" style={{
                    backgroundImage: `url('${require("../../Asset/images/mask.jpg").default}')`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
      }}></div></SwiperSlide>
      <SwiperSlide key={2}><div className="imageContainer"></div></SwiperSlide>
      <SwiperSlide key={3}><div className="imageContainer"></div></SwiperSlide>


    </Swiper>
  );
};

const ProductReview = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      slidesPerColumn={2}
      pagination={{ clickable: true, renderBullet: (index, className) => `<span class="dot swiper-pagination-bullet">${index + 1}</span>` }}
      activeSlideKey={(key) => console.log(key)}
      onActiveIndexChange={(key) => console.log(key)}
    >
      <SwiperSlide key={1}><div className="reviewcontainer py-3">
        <div className="d-flex w-100 flex-row justify-content-around pb-2"><small><b>AHMET DUNCAN</b> </small>    <div className="tr-rating">
          <Rating
            emptySymbol="far fa-star empty-star-color"
            fullSymbol="fas fa-star rated-star-color"
            initialRating={4}
            readonly={true}
            start={0}
            stop={5}
            fractions={2}
          />
        </div></div>
        <div className="px-4">
          <p className="text-sm-left" style={{ fontSize: 14 }}>Praesent ac fringilla nisi, at gravida nisl. Phasellus eleifend at felis sit amet tincidunt.</p>
        </div>
      </div></SwiperSlide>
      <SwiperSlide key={2}><div className="reviewcontainer py-3">
        <div className="d-flex w-100 flex-row justify-content-around pb-2"><small><b>AHMET DUNCAN</b> </small>    <div className="tr-rating">
          <Rating
            emptySymbol="far fa-star empty-star-color"
            fullSymbol="fas fa-star rated-star-color"
            initialRating={4}
            readonly={true}
            start={0}
            stop={5}
            fractions={2}
          />
        </div></div>
        <div className="px-4">
          <p className="text-sm-left" style={{ fontSize: 14 }}>Praesent ac fringilla nisi, at gravida nisl. Phasellus eleifend at felis sit amet tincidunt.</p>
        </div>
      </div></SwiperSlide>
      <SwiperSlide key={3}><div className="reviewcontainer py-3">
        <div className="d-flex w-100 flex-row justify-content-around pb-2"><small><b>AHMET DUNCAN</b> </small>    <div className="tr-rating">
          <Rating
            emptySymbol="far fa-star empty-star-color"
            fullSymbol="fas fa-star rated-star-color"
            initialRating={4}
            readonly={true}
            start={0}
            stop={5}
            fractions={2}
          />
        </div></div>
        <div className="px-4">
          <p className="text-sm-left" style={{ fontSize: 14 }}>Praesent ac fringilla nisi, at gravida nisl. Phasellus eleifend at felis sit amet tincidunt. </p>
        </div>
      </div></SwiperSlide>


    </Swiper>
  );
};






function Result(props) {
  const [count, setCount] = useState(props.count > 6 ? 6 : props.count);
  return (<>{Array(count).fill(null).slice(0, count).map(() => (

    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-2">
      <div
        className={`cards zoomable m-2`}
      >
        <Link
          className="packages"
          style={{
            backgroundImage: `url("https://thumbs.dreamstime.com/z/view-al-maya-supermarket-dubai-marina-united-arab-emirates-mar-177530085.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >

          <div
            className="package-img"

          >
          </div>
          <div className="ml-3 mr-5 p-3 info">
            <div
              className="pl-2 pt-1 location truncate"
              style={{ maxWidth: 180 }}
            >




              <i className="fas fa-map-marker-alt pr-2"></i>
              <span className="country">Al Maya Suppermarket</span>

              <div className="tr-rating">
                <Rating
                  emptySymbol="far fa-star empty-star-color"
                  fullSymbol="fas fa-star rated-star-color"
                  initialRating={4}
                  readonly={true}
                  start={0}
                  stop={5}
                  fractions={2}
                />
              </div>
            </div>
            <div className="package-desc">
              <h4 className="pl-2 truncate">4.5 ratting</h4>

              <div
                className={`truncate-${!false && true > 200
                  ? "trip"
                  : "block"
                  } pb-2`}

              >
                <p className="px-2 mb-0" style={{ overflow: "hidden" }}>
                  Al Karama, Dubai
          </p>
                {!true && 100 > 200 ? (
                  <button
                    className="btn px-2"
                    style={{ fontSize: 12, color: "#42939D", zIndex: 2 }}
                    onClick={e => {
                      e.stopPropagation();
                      e.preventDefault();
                      // setreadMore(true);
                    }}
                  >
                    "Visit Now"
                  </button>
                ) : null}
              </div>
            </div>

            <div className="discounted-price-tag pl-2 pt-0">
              20

      </div>

          </div>
        </Link>
      </div>
    </div>

  ))}
    {props.count > count ? <div class="d-grid gap-2 col-8 col-md-2 mx-auto pt-4">
      <button class="btn btn-danger btn-block" type="button" onClick={() => setCount(count + 6)}>See More</button>
    </div> : props.count < 6 ? null : <div class="d-grid gap-2 col-8 col-md-2 mx-auto pt-4">
      <button class="btn btn-success btn-block" type="button" onClick={() => setCount(6)}>See Less</button>
    </div>}
  </>
  )

}
const initialPanes = [
  {
    country: "All Stores",
    listings: [{ title: 'Dubai', content: <div className="row pb-5"><Result count={16} /></div>, key: '1' },
    { title: 'Al Karma', content: <div className="row pb-5"><Result count={12} /></div>, key: '2' },
    {
      title: 'Abu dhabi',
      content: <div className="row pb-5"><Result count={18} /></div>,
      key: '3',
      closable: false,
    }, {
      title: 'Oman',
      content: <div className="row pb-5"><Result count={4} /></div>,
      key: '4',
      closable: false,
    },]
  },
  {
    country: "Dubai",
    listings: [
      { title: 'Al Karma', content: <div className="row pb-5"><Result count={5} /></div>, key: '2' },
    ]
  },
  {
    country: "Abu dhabi",
    listings: [
      { title: 'Al Falah', content: <div className="row pb-5"><Result count={14} /></div>, key: '2' },
    ]
  }
];



function ProductDetailPage() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <Nav hasCategory={false} />
      <div className="container-fluid product-detail">
        <div className="row px-md-5 pt-3">

          <div className="col-9 py-2  text-left">
            <Breadcrumb separator=">" style={{fontSize: 12}}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item href=""> Health Care</Breadcrumb.Item>
              <Breadcrumb.Item href="">Home Medical Supplies</Breadcrumb.Item>
              <Breadcrumb.Item>NEA N95 / KN95 FFP2</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="col-3 py-2 text-right"><i class="fas fa-share" style={{ color: "teal" }}></i><span> Share</span></div>
        </div>

        <div className="row p-3 pb-md-5">
          <div className="col-12 col-xl-10 mx-xl-auto">
            <div className="row">
              <div className="col-12 col-md-6 productImage">
                <ProductImage />
              </div>
              <div className="col-12 col-md-6 product-info p-1 p-md-2 px-xl-5">
                <span class="badge rounded-pill px-2 py-2 my-2" style={{fontSize: 10}}>ONLY 2 LEFT</span>
                <h3>NEA N95 / KN95 FFP2 5 Layer...</h3>
                <h5>$1.629,00</h5>
                <p className="mb-0">Seller : <span style={{color: "#125E64"}}>Nassem Al Madina Supermarket, Dubai</span></p>
                <div><small>SKU: 1938302145 </small></div>

                <div className="d-flex flex-column p-md-4 p-2 mt-2" style={{ backgroundColor: "#F4F5F6", borderRadius: 10 }}>
                  <div className="d-flex flex-row product-buttons justify-content-around">
                    <div className="d-flex flex-column align-items-center">
                      <small className="pb-2">COLOR</small>
                      <UncontrolledButtonDropdown>
                        <div className="pbutton mr-1" ></div>
                        <DropdownToggle split size="sm" />
                        <DropdownMenu>
                          <DropdownItem header>Options</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
              <div className="sepBar">
              <i className="far fa-window-minimize fa-rotate-90 fa-lg d-none d-lg-flex"></i>
              </div>
                    <div className="d-flex flex-column align-items-center">
                      <small className="pb-2">MATERIAL</small>
                      <UncontrolledButtonDropdown>
                        <div className="pbutton mr-1" ></div>
                        <DropdownToggle split size="sm" />
                        <DropdownMenu>
                          <DropdownItem header>Options</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    </div>
                    <div className="sepBar">
              <i className="far fa-window-minimize fa-rotate-90 fa-lg d-none d-lg-flex"></i>
              </div>
                    <div className="d-flex flex-column align-items-center">
                      <small className="pb-2">QTY</small>
                      <ButtonGroup>
                        <Button className="qbutton">-</Button>
                        <div className="px-3 d-flex justify-content-center align-items-center">3</div>
                        <Button className="qbutton">+</Button>
                      </ButtonGroup>
                    </div>
                    <div className="sepBar">
              <i className="far fa-window-minimize fa-rotate-90 fa-lg d-none d-lg-flex"></i>
              </div>
                    <div className="d-flex flex-column align-items-center">
                      <div className="mt-4"></div>
                      <ButtonGroup>
                        <Button className="qbutton"><i className="far fa-heart"></i></Button>
                      </ButtonGroup>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row w-100 mt-4 justify-content-around">

                  <button type="button" class="btn-custom-secondary mx-lg-4 my-1"><img className="mr-2" src={require(`../../Asset/images/cart2.png`).default} style={{height: 18}} />Add to cart</button>

                  <button type="button" class="btn-custom-success2 mx-lg-4 my-1"><img className="mr-2" src={require(`../../Asset/images/bag.png`).default} style={{height: 18}} />Buy Now</button>

                  </div>
                </div>
                <div className="d-flex flex-row flex-wrap p-3">
                  <div className="p-2"><i class="fas fa-rocket pr-2"></i>Fast Shipping (2-5 days)</div>
                  <div className="p-2"><i class="fas fa-file-alt pr-2"></i>Assured Quality</div>
                  <div className="p-2"><i class="fas fa-headset pr-2"></i>24/7 Support</div>
                  <div className="p-2"><i class="fas fa-laugh-beam pr-2"></i>99.9% Safeguard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-4 product-review" style={{ backgroundColor: "#EEFEFF" }}>
          <div className="container py-2">
            <div className="row">
            <div className="d-flex col-md-8 d-md-none flex-column justify-content-center align-item-center pl-md-5 pb-2">
                <h5>More Specifications Details</h5>
                <div className="row d-flex flex-column">
                  <div className="d-flex flex-column px-3 py-1 infos">
                    <h6>PRODUCT INFO</h6>
                    <p>NEA Face Protective Masks Are High Quality Certified CE FDA ISO Masks ,Made with N95 ,FFP2 standards (CERTIFIED-LAB REPORTS) . Soft tubular ear loops and cushion finish makes it very comfortable to wear .These masks are comfortable breathable .these masks provide 99.9% protection from Bacteria , Pollution - BFE {">"}=95% ; PFE {">"}=98% . #NEACARES</p>
                  </div>
                  <div className="d-flex flex-column px-3 py-1 infos">
                    <h6>DIMENSIONS</h6>
                    <p>Size: W: 87 x H: 79 x D: 81.5 cm
                    Seat height: 41 cm
                    Backrest height: 38 cm</p>
                  </div>
                  <div className="d-flex flex-column px-3 py-1 infos">
                       <h6>CARE</h6>
                       <p>Pack of: 10
For: Pollution| Mask Type: Half Mask
Air-purifying Respirator, Ear Mount</p>
                     </div>
                  <div className="d-flex flex-column px-3 py-1 infos">
                    <h6>DELIVERY & RETURN</h6>
                    <p>Phasellus eleifend at felis sit amet tincidunt. Ut ornare in arcu ut interdum.</p>
                  </div>
                  <div className="d-flex flex-column px-3 py-1 infos">
                       <h6>INSTRUCTIONS</h6>
                       <p>Hand Wash the mask with detergent, Dry it in Sunlight
</p>
                     </div>

                </div>
              </div>
              <div className="col-12 col-md-4 p-3" style={{ backgroundColor: "#E5E7E9", borderRadius: 20 }}>
                <div className="d-flex w-100 flex-row justify-content-between p-2"><h5>REVIEWS 16 </h5>    <div className="tr-rating">
                  <Rating
                    emptySymbol="far fa-star empty-star-color"
                    fullSymbol="fas fa-star rated-star-color"
                    initialRating={4}
                    readonly={true}
                    start={0}
                    stop={5}
                    fractions={2}
                  />
                </div></div>
                <ProductReview />
              </div>
              <div className="d-none col-md-8 d-md-flex flex-column justify-content-center align-item-center pl-md-5 ">
                <h5>More Specifications Details</h5>
                <div className="row d-flex flex-row pt-4">
                  <div className="d-flex flex-column px-3 infos">
                    <h6>PRODUCT INFO</h6>
                    <p>NEA Face Protective Masks Are High Quality Certified CE FDA ISO Masks ,Made with N95 ,FFP2 standards (CERTIFIED-LAB REPORTS) . Soft tubular ear loops and cushion finish makes it very comfortable to wear .These masks are comfortable breathable .these masks provide 99.9% protection from Bacteria , Pollution - BFE {">"}=95% ; PFE {">"}=98% . #NEACARES</p>
                  </div>
                  <div className="d-flex flex-column px-3 infos">
                    <h6>DIMENSIONS</h6>
                    <p>Size: W: 87 x H: 79 x D: 81.5 cm
                    Seat height: 41 cm
                    Backrest height: 38 cm
</p>
                    <h6>CARE</h6>
                    <p>Pack of: 10
                    For: Pollution| Mask Type: Half Mask
Air-purifying Respirator, Ear Mount</p>
                  </div>
                  {/* <div className="d-flex flex-column px-3 infos">
                       <h6>CARE</h6>
                       <p>Pack of: 10
For: Pollution| Mask Type: Half Mask
Air-purifying Respirator, Ear Mount</p>
                     </div> */}
                  <div className="d-flex flex-column px-3 infos">
                    <h6>DELIVERY & RETURN</h6>
                    <p>Phasellus eleifend at felis sit amet tincidunt. Ut ornare in arcu ut interdum.</p>
                    <h6>INSTRUCTIONS</h6>
                    <p>Hand Wash the mask with detergent, Dry it in Sunlight
</p>

                  </div>
                  {/* <div className="d-flex flex-column px-3 infos">
                       <h6>INSTRUCTIONS</h6>
                       <p>Hand Wash the mask with detergent, Dry it in Sunlight
</p>
                     </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12 py-3 pt-5">
            <h4>Related Products</h4>
          </div>
          <div className="col-12 related-product" style={{ overflow: "hidden" }}>
            <RelatedProductSwiper />
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12 py-3 pt-5">
            <h4>Bestsellers</h4>
          </div>
          <div className="col-12 bestseller">
            <Bestsellers />
          </div>
        </div>






      </div>
      <Footer />
    </>
  );
}




export default ProductDetailPage;
