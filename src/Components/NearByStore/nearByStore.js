import  { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import React from 'react'
import Rating from "react-rating";
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
import './nearByStore.css'
import eye from '../../Asset/images/eye.png';
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


function Result(props){
  const [count, setCount] = useState(props.count > 6 ? 6 : props.count);
return(  <>{Array(count).fill(null).slice(0, count).map(() => (
      
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
          className={`truncate-${
            !false && true > 200
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
  {country: "All Stores",
listings: [{ title: 'Dubai', content:<div className="row pb-5"><Result count={16}/></div>, key: '1' },
{ title: 'Al Karma', content: <div className="row pb-5"><Result count={12}/></div>, key: '2' },
  {
    title: 'Abu dhabi',
    content: <div className="row pb-5"><Result count={18}/></div>,
    key: '3',
    closable: false,
  },{
    title: 'Oman',
    content: <div className="row pb-5"><Result count={4}/></div>,
    key: '4',
    closable: false,
  },]},
  {country: "Dubai",
  listings: [ 
    { title: 'Al Karma', content: <div className="row pb-5"><Result count={5}/></div>, key: '2' },
   ]},
    {country: "Abu dhabi",
    listings: [
      { title: 'Al Falah', content: <div className="row pb-5"><Result count={14}/></div>, key: '2' },
     ]}
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
    const plainOptions = ['Value 1', 'Value 2', 'Value 3'];
    return (
      <>
          
                <Nav  hasCategory={true} />
            <div className="container-fluid signup_form">                
                <section className="row">
               <div className="col-12 p-3 p-md-5">
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
         <BlockHeader  pageTitle="Search Near by Store"/>
         <div class="d-grid gap-2 col-8 col-md-2 mx-auto pb-2 flex-column d-md-none">
  <button class="btn btn-success btn-block btn-sm"  onClick={() => this.setState({
                              showFilter: !this.state.showFilter
                            })} type="button" style={{backgroundColor: "teal"}}> <i class="fas fa-sort-amount-down fa-lg"></i> Filter</button>
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
  <Checkbox.Group className="py-2" options={plainOptions} defaultValue={['Value 1']}  />
  <Checkbox.Group className="py-2" options={plainOptions} defaultValue={['Value 1']}  />

  </div>

  <div class="d-grid gap-2 col-8 col-md-2 mx-auto pt-4 mb-3">
  <button class="btn btn-success btn-block btn-sm" type="button" onClick={() => this.setState({
                              showFilter: !this.state.showFilter
                            })} >Apply Filter</button>
</div>
</div>

    <Tabs type="card" className="sub-tab">
    {panes.map((value, index)=>(
          
          <TabPane tab={value.country} key={index}>
                       <Tabs
                    type="editable-card"
                    onChange={this.onChange}
                    activeKey={activeKey}
                    onEdit={this.onEdit}
                  >
                  {value.listings.map(pane => (
         
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
    
            ))}          </Tabs>
        </TabPane>
            ))}

                          <button
                            className="circle-lg btn btn-link d-none d-md-block" onClick={() => this.setState({
                              showFilter: !this.state.showFilter
                            })} style={{position: 'absolute', top: 100, right: 80}}
                          >
                         <i class="fas fa-sort-amount-down fa-lg"></i>
                          </button>
                 
    </Tabs>
    
  </div>
               </div>
                </section>
                </div>
 
      <Footer />
      </>
    );
  }
}




export default NearByStore;
