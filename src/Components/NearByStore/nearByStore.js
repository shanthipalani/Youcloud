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
import "antd/dist/antd.css";

const { TabPane } = Tabs;
const Result = () => {
  return(

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
  )
}
const initialPanes = [
  { title: 'Dubai', content:<div className="row pb-5">{Array(10).fill(null).map(() => <Result />)}</div>, key: '1' },
{ title: 'Al Karma', content: <div className="row pb-5">{Array(3).fill(null).map(() => <Result />)}</div>, key: '2' },
  {
    title: 'Abu dhabi',
    content: <div className="row pb-5">{Array(2).fill(null).map(() => <Result />)}</div>,
    key: '3',
    closable: false,
  },
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


class NearByStore extends React.Component {
  newTabIndex = 0;

  state = {
    activeKey: initialPanes[0].key,
    panes: initialPanes,
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
    return (
      <>
          
                <Nav  hasCategory={true} />
            <div className="container-fluid signup_form">                
                <section className="row">
               <div className="col-12 p-3 p-md-5 mx-md-5">
               <Tabs
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
      </Tabs>
               </div>
                </section>
                </div>
 
      <Footer />
      </>
    );
  }
}




export default NearByStore;
