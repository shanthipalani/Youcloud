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



const shiporder = () => {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="container mt-5">
                    <p className="track_your_orders">Track Your Orders or Shipments</p>
                </div>
                <section className="shiporder_content">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img src={almayatracking} alt="almayasupermarket"></img>
                            <p className="almaya_size_color">Al Maya Supermarket Marina Branch</p>
                            <p className="id_size_color">ID: 43e2 116H</p>
                            <p><span className="items_size_color">4 items</span><span className="waiting_color"><img src={waiting} alt="waiting"></img>Waiting</span></p>
                            <p><span><img src={Messages} alt="message"></img></span> <img style={{ backgroundImage: `url(${phoneoutlet}`, width: '54px', height: '43px' }} src={phone} alt="phone" /></p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <p>Milestone Delivery</p>
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
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <img src={trackman} alt="trackman" width="400px" height="400px" />
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