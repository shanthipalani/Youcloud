import React from 'react'
import './shipmentorder.css'
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
// import addressoutlet,flag,greentick,Messages,phone,phoneoutlet,trackman,waiting from '../../Asset/images/almayatracking.png'
import almayatracking from '../../Asset/images/almayatracking.png'
import addressoutlet from '../../Asset/images/addressoutlet.png'
import flag from '../../Asset/images/flag.png'
import greentick from '../../Asset/images/greentick.png'
import Messages from '../../Asset/images/Messages.png'
import phone from '../../Asset/images/phone.png'
import phoneoutlet from '../../Asset/images/phoneoutlet.png'
import trackman from '../../Asset/images/trackman.png'
import waiting from '../../Asset/images/waiting.png'
import dot from '../../Asset/images/dot.png'
import { Timeline } from 'antd';
import { ClockCircleOutlined, CheckCircleFilled, FlagFilled } from '@ant-design/icons';


const shiporder = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className=" mt-5">
                    <p className="track_your_orders">Track Your Orders or Shipments</p>
                </div>
                <section className="shiporder_content">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div className="mx-3" style={{
                                          backgroundImage: `url('${require("../../Asset/images/almayatracking.png").default}')`,
                                          backgroundPosition: "center center",
                                          backgroundSize: "cover",
                                          borderRadius: 10,
                                height: 140}}></div>
                                <div className="mx-3">
                                <p className="almaya_size_color pt-3" style={{fontSize: 12}}>Al Maya Supermarket Marina Branch</p>
                            <p className="id_size_color mb-0 pb-1">ID: 43e2 116H</p>
                            <div className="d-flex w-100 justify-content-between pb-3">
                            <small className="items_size_color">4 items</small><small className="waiting_color"><i className="fas fa-circle fa-xs pr-2" style={{color: "#FFB600"}}></i>Waiting</small>
                            </div>

                            <div className="d-flex w-100 justify-content-start pt-2"><div className="py-2 px-3 mr-2" style={{backgroundColor: "#0095FF", borderRadius: 4}}><i className="far fa-comment-dots text-white"></i></div> <div className="py-2 px-3 text-white" style={{backgroundColor: "#00E096", borderRadius: 4}}><i className="fas fa-phone-alt"></i></div></div>
                                </div>
                        </div>
                        <div className="col-12 col-md-4 pt-5 pt-md-0">
                            {/* <p>Milestone Delivery</p>
                            <div>
                                <p className="tracker">
                                    <div><img src={greentick} alt="greentick" width="32.2px" height="32.2px" /></div>
                                    <div className="tracker_content"><p>Confirm your order</p></div>
                                    <div className="tracker_content1">9:15 AM</div>
                                </p>
                            </div>
                            <div>
                                <p className="tracker">
                                    <span><img src={greentick} alt="greentick" width="32.2px" height="32.2px" /></span>
                                    <span className="tracker_content">Shipper go to store</span>
                                    <span className="tracker_content1">9:15 AM</span>
                                </p>
                            </div>
                            <div>
                                <p className="tracker">
                                    <span><img src={greentick} alt="greentick" width="32.2px" height="32.2px" /></span>
                                    <span className="tracker_content">Waiting</span>
                                    <span className="tracker_content1">9:20 AM</span>
                                </p>
                            </div>
                            <div>
                                <p className="tracker">
                                    <span><img className="ml-3" src={dot} alt="dot" /></span>
                                    <span className="dot_content">Shop delivery for Shipper</span>
                                </p>
                            </div>
                            <div>
                                <p className="tracker">
                                    <span><img className="ml-3" src={dot} alt="dot" /></span>
                                    <span className="dot_content">Shipping</span>
                                </p>
                            </div>
                            <div>
                                <p className="tracker">
                                    <span><img src={greentick} alt="greentick" width="32.2px" height="32.2px" /></span>
                                    <span className="tracker_content">Your Address</span>
                                    <span className="tracker_content1">About 5.35</span>
                                </p>
                            </div> */}
                            <small className="">Milestone Delivery</small>
                            <Timeline className="pt-3"> 
                                <Timeline.Item dot={<CheckCircleFilled style={{fontSize: 18, color: "#15D55D"}} />}><div className="d-flex w-100 justify-content-between"><small>Confirm Your Order</small><small>9:15 AM</small></div></Timeline.Item>
                                <Timeline.Item dot={<CheckCircleFilled style={{fontSize: 18, color: "#15D55D"}} />}><div className="d-flex w-100 justify-content-between"><small>Shipper go to Store</small><small>9:15 AM</small></div></Timeline.Item>
                                <Timeline.Item dot={<CheckCircleFilled style={{fontSize: 18, color: "#15D55D"}} />}><div className="d-flex w-100 justify-content-between"><small>Waiting</small><small>9:15 AM</small></div></Timeline.Item>

                                <Timeline.Item dot={<div className="" style={{height: 10, width: 10, borderRadius: 6, backgroundColor: "#E4E9F2"}}></div>} color="red">
                                <div className="d-flex w-100 justify-content-between"><small>Shop delivery for Shipper</small><small>9:15 AM</small></div>
                                </Timeline.Item>
                                <Timeline.Item dot={<div className="" style={{height: 10, width: 10, borderRadius: 6, backgroundColor: "#E4E9F2"}}></div>} color="red">
                                <div className="d-flex w-100 justify-content-between"><small>Shipping</small><small>9:15 AM</small></div>
                                </Timeline.Item>
                                <Timeline.Item dot={<div className="d-flex align-items-center justify-content-center" style={{height: 18, width: 18, backgroundColor: "#FA634D", borderRadius: 20}}><FlagFilled style={{fontSize: 8, color: "white"}}/></div>} ><div className="d-flex w-100 justify-content-between"><small>Your Address</small><small>9:15 AM</small></div></Timeline.Item>
                            </Timeline>
                        </div>
                        <div className="col-12 col-md-4 d-flex align-items-start justify-content-center">
                            <img src={trackman} alt="trackman" height="220px" />
                        </div>

                    </div>
                </section>
            </div>
            <div className="footer_gap">
                <Footer />
            </div>
        </div>
    )
}

export default shiporder