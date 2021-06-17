import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import React from 'react'
import { Container} from 'react-bootstrap';
import Rating from "react-rating";
import Nav1 from '../navigation/nav1'
import Footer from '../Footer/footer'
import './nearByStore.css'
import eye from '../../Asset/images/eye.png';
import cell from '../../Asset/images/cell.png';
// import Retailhomesecbg from '../../Asset/images/retailhomesecbg.jpg'
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
import { Slider, Select, Tag, Checkbox } from 'antd';
import { SmileTwoTone, HeartFilled, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;
const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}


function Result(props) {
  const [count, setCount] = useState(props.count > 5 ? 5 : props.count);
  return (<>{Array(count).fill(null).slice(0, count).map(() => (

    <div className="col">
      <div
        className={`cards zoomable m-2`}
      >
        <Link
          className="packages"
          style={{
            backgroundImage: `url("https://i6.photo.2gis.com/images/branch/0/30258560057160906_31eb.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >

          <div className="package-img"></div>
          <div className="ml-2 mr-4 px-1 py-3 pb-4 info">
            <div className="pl-2 pt-1 location truncate">
              <span className="country">Al Maya Supermarket</span>
              <div className="tr-rating d-flex w-100 flex-row pt-2">
                <Rating
                  emptySymbol="far fa-star empty-star-color"
                  fullSymbol="fas fa-star rated-star-color"
                  initialRating={1}
                  readonly={true}
                  start={0}
                  stop={1}
                  fractions={2}
                />
                <p className="text-muted pl-2 m-0">4.5 ratings</p>
              </div>
            </div>
            <div className="package-desc">
              <div
                className={`truncate-${!false && true > 200
                    ? "trip"
                    : "block"
                  } pb-2`}

              >
                <p className="pl-2 mb-0 text-muted pt-2 location-text" style={{ overflow: "hidden" }}>
                  <i className="fas fa-map-marker-alt text-muted pr-2" style={{ paddingLeft: 1 }}></i>
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
              <Link to="/ProductPage"><img className="text-center" style={{ height: 30 }} src={require(`../../Asset/images/visitnow.png`).default} />
              <small style={{ position: "absolute", top: "25%", left: 30 }} className="visitnow_bt_color">Visit Now</small></Link>

            </div>

          </div>

          <div className="wishlist">
            <HeartFilled style={{ color: "#FD7360", fontSize: 18 }} />
          </div>

        </Link>
      </div>
    </div>

  ))}
    {props.count > count ? <div class="col-12 pt-5 pb-5">
      <div className="text-center load_more" onClick={() => setCount(count + 5)}>Load More....</div>
    </div> : null}
  </>
  )

}

const initialPanes = [
  {
    country: "All Stores", key: '0',
    listings: [
      { title: 'Dubai', content: <div className="row"><Result count={16} /></div>, key: '0' },
      { title: 'Al Karma', content: <div className="row"><Result count={4} /></div>, key: '1' }
    ]
  },
  {
    country: "Dubai", key: '1',
    listings: [
      { title: 'Al Karma', content: <div className="row"><Result count={5} /></div>, key: '0' },
    ]
  },
  {
    country: "Abu dhabi", key: '2',
    listings: [
      { title: 'Al Falah', content: <div className="row"><Result count={14} /></div>, key: '0' },
    ]
  }
];


class NearByStore extends React.Component {
  newTabIndex = 0;

  state = {
    activeKey: initialPanes[0].key,
    panes: initialPanes,
    showFilter: false
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


    const { panes, activeKey } = this.state;
    console.log(activeKey);
    const plainOptions = ['Value 1', 'Value 2', 'Value 3'];
    return (
      <>
        <Nav1 hasCategory={false}  />
        <div className="store_container">
      
          <section className="row">
            <div className="col-12 pt-md-5">
              {/* <Tabs
        type="editable-card"
        onChange={this.onChange}
        activeKey={activeKey}
        onEdit={this.onEdit}
      >
        {panes.map(pane => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs> */}
              <div className="card-container">
                <div className="row">
                  <div className="col-12 pl-4 pt-5 pt-md-0">
                    <h3 className="m-0">Search Nearby Stores</h3>
                  </div>
                </div>
                <div class="d-grid gap-2 col-8 col-md-2 mx-auto pb-2 pt-3 flex-column d-md-none">
                  <button class="btn btn-success btn-block btn-sm" onClick={() => this.setState({
                    showFilter: !this.state.showFilter
                  })} type="button" style={{ backgroundColor: "teal" }}> <i class="fas fa-sort-amount-down fa-lg"></i> Filter</button>
                </div>
                <div className={`row mt-4 border-bottom ${this.state.showFilter ? "" : "d-none"}`}>
                  <div className="col-12 col-md-6 px-5 py-3">
                    <p className="h5"><b>Price</b></p>
                    <Slider defaultValue={30} disabled={false} />
                    <Select
                      mode="multiple"
                      showArrow
                      tagRender={tagRender}
                      defaultValue={['gold', 'cyan']}
                      style={{ width: '100%' }}
                      options={options}
                    />
                  </div>
                  <div className="col-12 col-md-6 px-5 py-3 d-flex flex-column">
                    <p className="h5"><b>Category</b></p>
                    <Checkbox.Group className="py-2" options={plainOptions} defaultValue={['Value 1']} />
                    <Checkbox.Group className="py-2" options={plainOptions} defaultValue={['Value 1']} />

                  </div>

                  <div class="d-grid gap-2 col-8 col-md-2 mx-auto pt-4 mb-3">
                    <button class="btn btn-success btn-block btn-sm" type="button" onClick={() => this.setState({
                      showFilter: !this.state.showFilter
                    })} >Apply Filter</button>

                  </div>
                </div>

                <Tabs type="card" className="sub-tab">
                  {panes.map((value, index) => (

                    <TabPane tab={value.country} key={index} tab={<div className={`${activeKey == index ? 'main-tab' : ""}`}>{value.country}</div>}>
                      <Tabs
                        type="editable-card"
                        hideAdd
                        onChange={this.onChange}
                        activeKey={activeKey}

                      >
                        {value.listings.map(pane => (

                          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            {pane.content}
                          </TabPane>

                        ))}          </Tabs>
                    </TabPane>
                  ))}
                  {/* 
                          <button
                            className="circle-lg btn btn-link d-none d-md-block" onClick={() => this.setState({
                              showFilter: !this.state.showFilter
                            })} style={{position: 'absolute', top: 100, right: 80}}
                          >
                         <i class="fas fa-sort-amount-down fa-lg"></i>
                          </button> */}

                  <img className="d-none d-md-block" style={{ height: 100, width: 100, position: "absolute", top: 40, right: 0 }} onClick={() => this.setState({
                    showFilter: !this.state.showFilter
                  })} src={require(`../../Asset/images/filterBtn.png`).default} />

                </Tabs>
                </div>
            </div>
          </section>
         
        </div>
                <div className="container-fluid">  
                  <div className="row h-100 mobile_view_1 storecontentbelow_bg pt-4">
                            <div className=" mobile_img-1 col-lg-6">
                                <div className="row">
                                    <img src={cell} alt="Phone" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start flex-column">
                              <h3 className="youcloud_consumerapp">Get YouCloud Consumer App</h3>
                              <p>Search for products/services and connect with <br/>verified sellers on the go!</p>
                              <div className="w-100 d-flex justify-content-center justify-content-md-start align-item-center">
                              <img className="" style={{ height: 70, width:500 }} src={require(`../../Asset/images/androidios.png`).default} />
                              </div>
                              <div className="pt-4 w-100 d-flex flex-column flex-md-row justify-content-center justify-content-md-start align-items-center">
                              <input type="email" name="email" id="email" placeholder="Email address" style={{width: 225, backgroundColor: "white", borderRadius: 25}} />
                              <img className="text-center ml-3 my-3 " style={{ height: 42,  borderRadius: 20, boxShadow: "-3px 3px 22px -7px #6b6b6b" }} src={require(`../../Asset/images/send.png`).default} />
                              </div>
                            </div>
                    </div>
                  </div>           

        <Footer />
      </>
    );
  }
}




export default NearByStore;
