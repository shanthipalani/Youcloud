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
  Slider, Select, Tag, Checkbox,
  Grid,
  Input,
  Space,
  Divider,
  Breadcrumb,
  Button,
  Collapse,
  Tabs, Menu, Dropdown, message, Tooltip
} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RelatedProductSwiper from '../shared/RelatedProduct'
import Bestsellers from '../shared/Bestseller'
import { UncontrolledButtonDropdown, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup } from 'reactstrap';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const { Panel } = Collapse;
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
            slidesPerView: 4,
            slidesPerColumn: 4,
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
      <SwiperSlide key={1}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo1.png`).default} /></SwiperSlide>
      <SwiperSlide key={2}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo2.png`).default} /></SwiperSlide>
      <SwiperSlide key={3}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo3.png`).default} /></SwiperSlide>
      <SwiperSlide key={1}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo1.png`).default} /></SwiperSlide>
      <SwiperSlide key={2}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo2.png`).default} /></SwiperSlide>
      <SwiperSlide key={3}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo3.png`).default} /></SwiperSlide>
      <SwiperSlide key={1}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo1.png`).default} /></SwiperSlide>
      <SwiperSlide key={2}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo2.png`).default} /></SwiperSlide>
      <SwiperSlide key={3}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo3.png`).default} /></SwiperSlide>
    </Swiper>
  );
};

const ProductImage = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      activeSlideKey={(key) => console.log(key)}
      onActiveIndexChange={(key) => console.log(key)}
    >
      <SwiperSlide key={1}><div className="imageContainer" style={{
        backgroundImage: `url('${require("../../Asset/images/mask.jpg").default}')`,
        backgroundPosition: "center",
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



function FilterPage() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Nav hasCategory={true} />
      <div className="container-fluid product-filter">
        <div className="row px-2 px-md-5">
          <div className="col-12 d-none d-lg-flex">
            <div className="d-flex w-100 justify-content-start pl-xl-2 pt-5">
              <h4 className="">Fresh Vegetables</h4>
            </div>
          </div>
          <div className="d-none d-lg-flex flex-column col-12 w-100 col-lg-3 px-xl-4 filter-tabs">
            <div className="d-flex w-100 flex-column pt-2">
              <h6 className="">SHOP BY CATEGORIES</h6>
              <div className="tabs">
                → Vegetables
                 </div>
              <div className="tabs">
                → Fruits
                 </div>
              <div className="tabs">
                → Organic
                 </div>
              <div className="tabs">
                → Sale
                 </div>

            </div>
            <div className="d-flex w-100 flex-column pt-5 tabs-border pb-3">
              <h6 className="">FILTER PRICE</h6>
              <Slider defaultValue={30} disabled={false} />
              <div>Price: $49 — $86</div>
            </div>
            <div className="d-flex w-100 flex-column pt-5">
              <h6 className="">BRAND</h6>
              <div className="tabs">
                → All
                 </div>
              <div className="tabs">
                → Fruits
                 </div>
              <div className="tabs">
                → Organic
                 </div>
              <div className="tabs">
                → Sale
                 </div>

            </div>
            <div className="d-flex w-100 flex-column pt-5 tabs-border pb-3 mb-3">
              <h6 className="">TAG PRODUCT</h6>
              <div className="d-flex w-100 flex-wrap ">
                <div className="mint-tabs m-1">
                  Fresh
                 </div>
                <div className="mint-tabs m-1">
                  Fruit
                 </div>
                <div className="mint-tabs m-1">
                  Top
                 </div>
                <div className="mint-tabs m-1">
                  Price
                 </div>
                <div className="mint-tabs m-1">
                  Banana
                 </div>
              </div>
            </div>

            <div className="mt-4 d-lg-block d-none">
              <img className="w-100" src={require(`../../Asset/images/ad.png`).default} style={{ height: 400, objectFit: "contain" }} />
            </div>
          </div>




          <div className="col-12 col-lg-9 col-xl-8 pt-2">
            <div className="row justify-content-between pb-md-4">

              <div className="d-flex w-100 p-2 pt-4 d-md-none justify-content-between">
                <div>
                  <button className="btn btn-success btn-sm p-2 mr-3">
                    <i className="fas fa-list"></i>
                  </button>
                  <button className="btn btn-secondary btn-sm p-2 mr-3">
                    <i className="fas fa-list"></i>
                  </button>
                </div>
                <Dropdown overlay={menu}>
                  <Button>
                    Featured <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="d-flex w-100 d-md-none">
                <div className="px-3">
                  <small>Showing 1–12 of 21 results</small>
                </div>
              </div>
              <div className="d-none d-md-flex">
                <button className="btn btn-success btn-sm p-2 mr-3">
                  <i className="fas fa-list"></i>
                </button>
                <button className="btn btn-secondary btn-sm p-2 mr-3">
                  <i className="fas fa-list"></i>
                </button>
                <Dropdown overlay={menu}>
                  <Button>
                    Featured <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
              <div className="mr-3 d-none d-md-block">
                <small>Showing 1–12 of 21 results</small>
              </div>
              <div className="flex-column col-12 px-0 w-100 d-lg-none filter-tabs pt-3">
                <Collapse accordion>
                  <Panel header="SHOP BY CATEGORIES" key="1">
                    <div className="d-flex w-100 flex-column">
                      <div className="tabs">
                        → Vegetables
                 </div>
                      <div className="tabs">
                        → Fruits
                 </div>
                      <div className="tabs">
                        → Organic
                 </div>
                      <div className="tabs">
                        → Sale
                 </div>

                    </div>
                  </Panel>
                  <Panel header="FILTER PRICE" key="2">
                    <div className="d-flex w-100 flex-column tabs-border pb-3">
                      <Slider defaultValue={30} disabled={false} />
                      <div>Price: $49 — $86</div>
                    </div>
                  </Panel>
                  <Panel header="BRAND" key="3">
                    <div className="d-flex w-100 flex-column">
                      <div className="tabs">
                        → All
                 </div>
                      <div className="tabs">
                        → Fruits
                 </div>
                      <div className="tabs">
                        → Organic
                 </div>
                      <div className="tabs">
                        → Sale
                 </div>

                    </div>
                  </Panel>
                  <Panel header="TAG PRODUCT" key="4">
                    <div className="d-flex w-100 flex-wrap ">
                      <div className="mint-tabs m-1">
                        Fresh
                 </div>
                      <div className="mint-tabs m-1">
                        Fruit
                 </div>
                      <div className="mint-tabs m-1">
                        Top
                 </div>
                      <div className="mint-tabs m-1">
                        Price
                 </div>
                      <div className="mint-tabs m-1">
                        Banana
                 </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>

            </div>
            <div className="row">
              {Array(18).fill(null).map((index, item) => (
                <div className="col-6 col-md-4 col-lg-3 col-xl-2 py-4">
                  <div className="filterproduct pb-3">
                    <div className="w-100" style={{ height: "100%", backgroundColor: "#E7E9EB", borderRadius: 20 }}></div>
                    <div className="promobadge">
                      <div className="leftbadge">NEW</div>
                      <div className="leftbadge2">HOT</div>
                    </div>
                    <div className="w-100">
                      <div className="py-2">
                        <p className="py-1">Modern Sofa</p>
                        <h6>$1.659,00</h6>
                        <div className="d-flex w-100 justify-content-between px-1">
                          <span class="badge rounded-pill px-2 py-1">CHAIRS</span>
                          <div style={{ fontSize: 8 }}><i className="far fa-dot-circle px-1" style={{}}></i>
                            <i className="fas fa-circle px-1" style={{ color: "#726865" }}></i>
                            <i className="fas fa-circle px-1" style={{}}></i>
                            <i className="fas fa-circle px-1" style={{ color: "#383D52" }}></i>
                          </div>
                        </div>

                      </div>
                      <div className="w-100">
                        <button type="button" class="btn-custom-secondary"><img className="mr-2" src={require(`../../Asset/images/cart2.png`).default} style={{ height: 16 }} />Add to cart</button>

                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 d-md-none">
              <img className="w-100" src={require(`../../Asset/images/ad.png`).default} style={{ height: 400, objectFit: "contain" }} />
            </div>
          </div>
        </div>
        <div className="row p-3 pb-5">
          <div className="col-12 bestseller pt-4">
            <Bestsellers />
          </div>
        </div>






      </div>
      <Footer />
    </>
  );
}




export default FilterPage;
