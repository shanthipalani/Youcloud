import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import React from 'react'
import Rating from "react-rating";
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
import './productPage.css'
import { IntlProvider } from 'react-intl';
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Grid,
  Input,
  Space,
  Divider,
  Tabs,
} from "antd";
import {
  HomeFilled,
  MenuOutlined,
  StarFilled,
  ClockCircleFilled,
} from "@ant-design/icons";
import BlockHeader from './BlockHeader'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlockSpace from  './BlockSpace'
import BlockProductsCarousel from  './BlockProductsCarousel'
import RelatedProductSwiper from '../shared/RelatedProduct'
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
      <SwiperSlide key={1}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo1.png`).default}/></SwiperSlide>
      <SwiperSlide key={2}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo2.png`).default}/></SwiperSlide>
      <SwiperSlide key={3}>   <img className="w-100 swipe-ele" src={require(`../../Asset/images/promo3.png`).default}/></SwiperSlide>
      <SwiperSlide key={4}>Slide 4</SwiperSlide>
    </Swiper>
  );
};



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



//     const NearByStor = () => {
//         const { Title, Paragraph, Text } = Typography;
//         const [kitchens, setKitchens] = useState([]);
//         const [count, setCount] = useState(3);




//         return (
//             <div dir="ltr" >
//                 <Nav count={count} hasCategory={true} />
//             <div className="container-fluid signup_form">                
//                 <section className="row align-items-center justify-content-center ">
//                 <div class="container">
//                     <div className="row">
//                     <div className="col">
//                     <Row
//         className="absolute w-full"
//         style={{ height: "30vh"  }}
//         justify="center"
//         align="middle"
//       >
//         <Col>
//           <Text level={1} strong className="block  text-5xl">
//            Search Near By stores
//           </Text>
//         </Col>
//       </Row>
//      </div>

// </div>
// <div className="row">
//     <div  className="col">
//     <Row
//         className=" w-full"

//         justify="center"
//         align="middle"
//       >
//             <Col> 
//       <Tabs
//           defaultActiveKey={"relavence"}
//           className="font-bold"
//           size="large"
//           direction="rtl"
//           moreIcon={<MenuOutlined />}
//         >
//           <TabPane key="filters" tab="Filters">
//            All stores
//           </TabPane>
//           <TabPane key="ratings" tab="Ratings">
//            Dubai
//           </TabPane>
//           <TabPane key="relavence" tab="Relavence">
//             <div className="kitchen-item ">
//               <Row gutter={[16, 16]} className="flex pt-4" dir="ltr">
//                 {kitchens &&
//                   kitchens.map((item, index) => {
//                     return (
//                       <Col
//                         onClick={() =>
//                           {}
//                         }
//                         className="cursor-pointer"
//                         span={8}
//                       >
//                         <KitchenCol
//                           name={item["kitchen"]["name"]}
//                           imgURL={item["kitchen"]["image_urls"][0]}
//                           rating={"4.3"}
//                           count={item["kitchen"]["likes"]}
//                           price={item["kitchen"]["price_per_time"]}
//                           price_type={item["kitchen"]["time_type"]}
//                         />
//                       </Col>
//                     );
//                   })}
//               </Row>



//             </div>
//             <div
//               dir="ltr"
//               className="flex items-center justify-center pt-10 load-more"
//             >
//               <p className="text-white flex items-center bg-red-500 py-4 px-10 text-lg">
//                 Load More 
//               </p>
//             </div>
//           </TabPane>
//         </Tabs>

//         </Col>
//       </Row>
//     </div>


// </div>

//                      </div>
//         </section>
//             </div>
//             <Footer />
//             </div>
//         );

// }


class ProductPage extends React.Component {
  newTabIndex = 0;

  state = {
    activeKey: initialPanes[0].key,
    panes: initialPanes,
    featuredProducts: {isLoading:false,tabs:[
      { id: 1, name: 'All', categorySlug: null ,current :true},
      { id: 2, name: 'Power Tools', categorySlug: 'power-tools' },
      { id: 3, name: 'Hand Tools', categorySlug: 'hand-tools' },
      { id: 4, name: 'Plumbing', categorySlug: 'plumbing' },
  ],data: Array(10).fill({
    sku:'Apple',
    badges:['sale','new','hot'],
    name:'iPhone 12 With Facetime 128GB Blue 5G - International Specs ',
    rating:4,
    price: 500, 
    compareAtPrice:600,
    excerpt: "",
    description: "",
    slug: "051-firstpr", 
    partNumber: "",
    stock: 'in-stock',
    reviews:1,
    tags: ['Brake Kit', 'Brandix', 'Filter', 'Bumper', 'Transmission', 'Hood'],
    attributes: [],
    attributes:[ {  
    name: 'speed',
    slug: 'speed',
    featured: true,
    values: [],
    customFields:{},
    }
     ],
    images:['https://z.nooncdn.com/products/tr:n-t_240/v1605814306/N41247173A_1.jpg','data:image/jpeg;base64,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']}) ,handleTabChange:()=>{}}

  };  
  
   

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    const newPanes = [...panes];
    newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
    this.setState({
      panes: newPanes,
      activeKey,
    });
  };

  remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  render() {
    const { panes, activeKey ,featuredProducts} = this.state;
    return (
      <>
   <IntlProvider locale={'en'} messages={{TEXT_SKU:'SKU ',TEXT_RATING_LABEL:"{reviews, plural, =0 {No reviews} one {{reviews} review} other {{reviews} reviews}}",BUTTON_ADD_TO_CART:'Add To Cart',BUTTON_ADD_TO_WISHLIST:'Add To Wishlist'}}>
        <Nav hasCategory={true} />
        <div className="container-fluid product-page">
          <div className="row px-md-5 pt-3">

            <div className="col-9 py-2  text-left"><pre className="mb-0">Home {' > '} Supermarket {' > '} Dubai {' > '} Festival City {' > '} Carrefour Hypermarket</pre></div>
            <div className="col-3 py-2 text-right"><i class="fas fa-share" style={{ color: "teal" }}></i><span> Share</span></div>

          </div>
          <div className="row p-3">
            <div className="col-12 col-md-10 mx-auto banner" style={{
              backgroundImage: `url("https://www.arabianbusiness.com/public/images/2019/08/20/Carrefour.jpg")`,
              backgroundPosition: "top",
              backgroundSize: "cover",
            }}>
              <div className="d-flex h-100 justify-content-start align-items-center ">
                <div className="p-5">
                  <h3>Covid19 Safety Kit</h3>
                  <p>Search nearby stores | deliver as fast as possible</p>
                  <button type="button" class="btn btn-success my-3">Shop Now <i class="fas fa-long-arrow-alt-right" style={{ color: "white" }}></i></button>
                </div>
              </div>

              <button className="btn-warning wishlist btn-lg"><i class="far fa-heart" style={{ color: "white" }}></i></button>

            </div>
            <div className="col-12">
              <div className="row px-md-5 mx-md-4">
                {/* <div className="col-12 col-md-9">
                <div className="row d-flex justify-content-center justify-content-md-start pl-md-5 ml-md-5 icons py-2">
                      {[
                        {label: "Product Categories"},{label: "Payment & Services"}, {label: "Voucher & Discounts"}
                      ].map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="p-2 col-4 col-xl-2"
                          >
                            <div className="py-2 d-flex flex-column flex-md-row justify-content-center align-items-center">
                              <div>
                              <img className="" style={{height: 70}} src={require(`../../Asset/images/cat${index + 1}.png`).default}/>
                              </div>
                              <small className="px-3 pt-2 pt-md-0">
                                {item.label}
                              </small>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                </div> */}
                <div className="col-12 col-lg-4">
                  <div
                    className={`cards m-2`}
                  >
                    <div
                      className="packages"
                    >

                      <div className="ml-md-3 mr-md-5 p-md-3 info">
                        <div
                          className="pt-1 location truncate"
                        >
                          <span className="country">Carrefour Hypermarket</span>
                          <div className="d-flex justify-content-between">
                            <div className="tr-rating d-flex flex-row">
                              <Rating
                                emptySymbol="far fa-star empty-star-color"
                                fullSymbol="fas fa-star rated-star-color"
                                initialRating={4}
                                readonly={true}
                                start={0}
                                stop={5}
                                fractions={2}
                              />
                              <small className="pl-2 truncate">4.5 rating</small>
                            </div>

                            <div style={{ color: "green" }}>see review</div>
                          </div>

                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="mb-0" style={{ overflow: "hidden", color: 'black' }}>
                                1.5 Km     Dubai Festival City
          </p>

                            </div>

                            <div><i class="far fa-clock fa-sm"></i><small>  30 Minutes</small></div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
             {/* <div className="col-12 col-xl-10 mx-auto p-0 productSwiper px-md-5">
               <ProductSwiper />
             </div> */}
             <div className="col-12 col-xl-10 mx-auto pt-5 popular">
               <div className="row d-flex w-100 justify-content-between flex-nowrap" style={{overflowX: 'auto'}}>
               {[
                        {label: "Covid 19"},{label: "Medicine"}, {label: "Healthy"},
                        {label: "Snack"},{label: "Vegetable"}, {label: "Fish"},
                        {label: "Drinks"},{label: "Nuts"}, {label: "Mobile"},
                      ].map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="p-2"
                          >
                            <div className="py-2 d-flex flex-column justify-content-center align-items-center">
                              <div>
                              <div className="custom-control custom-radio image-checkbox">
  <input type="radio" id={`customRadio${index}`} name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" for={`customRadio${index}`}>
  <img className="" style={{height: 80}} src={require(`../../Asset/images/pop${index + 1}.png`).default}/>
  </label>
</div>
                              </div>
                              <small className="px-3 pt-4 pt-md-0">
                                {item.label}
                              </small>
                            </div>
                          </div>
                        );
                      })}
               </div>
           

             </div>
             <div className="col-12 py-3 pt-5">
               <h4>Related Products</h4>
             </div>
             <div className="col-12 related-product" style={{overflow: "hidden"}}>
             <RelatedProductSwiper />
             </div>
             <div className="col-12 py-3 pt-5">
               <h4>Bestsellers</h4>
             </div>
             <div className="col-12 bestseller">
               <Bestsellers />
             </div>
             {/* <div className="col-12" style={{overflow: "hidden"}}>
             <BlockSpace layout="divider-nl" />
            <BlockProductsCarousel
                blockTitle={'Most Purchased'}
                layout="grid-5"
                loading={featuredProducts.isLoading}
                products={featuredProducts.data}
                groups={featuredProducts.tabs}
                currentGroup={featuredProducts.tabs.find((x) => x.current)}
                onChangeGroup={featuredProducts.handleTabChange}
            />
             </div> */}
          </div>
       
          
        </div>
        <Footer />
        </IntlProvider>
      </>
    );
  }
}




export default ProductPage;
