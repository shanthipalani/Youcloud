import React from 'react';
import './footer.css';
import { AiOutlineTwitter, AiFillCopyrightCircle } from 'react-icons/ai';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import Twitter from '../../Asset/images/twitter.png'
import Facebook from '../../Asset/images/facebook.png'
import Instagram from '../../Asset/images/instagram.png'

// const footer =()=>{
// return(<div> 

// </div>)
// }
function footer() {
    return (

            <footer className="footer_background container-fluid">
                <div className="row py-3 text-white pt-4">
                    <div className="col-12 col-md list_1">
                        <ul>
                            <li>About us</li>
                            <li>Join Sales</li>
                            <li>Success Stories</li>
                            <li>Press Section</li>
                            <li>Advertise with us</li>
                            <li>Investor Section</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md list_2">
                        <ul>
                            <li>Help</li>
                            <li>Feedback</li>
                            <li>Complaints</li>
                            <li>Customer Care</li>
                            <li>Jobs & Careers</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md list_3">
                        <ul>
                            <li>Suppliers Tool Kit</li>
                            <li>Sell on YouCloud</li>
                            <li>Latest BuyLead</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md list_4">
                        <ul>
                            <li>Buyers Tool kit</li>
                            <li>Post Your Requirement</li>
                            <li>Products You Buy</li>
                            <li>Search Products & Suppliers</li>
                            <li>Pay With YouCloud</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md list_5">
                        <ul>
                            <li>Events</li>
                            <li>Trade Shows</li>
                            <li>Conferences</li>
                            <li>Events by Country</li>
                        </ul>
                        <div className="text-center text-md-left pl-md-5">
                            <p className="mb-0">Media Hub</p>
                            {/* <span className="mediahub_icons_align"></span> */}
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start pl-md-5">
                      <div className="p-2">
                      <button
                            className="circle btn btn-link btn-sm"
                          >
                          <i class="fab fa-twitter"></i>
                          </button>
                      </div>
                      <div className="p-2">
                          <button
                            className="circle btn btn-link btn-sm"
                          >
                          <i class="fab fa-facebook"></i>
                          </button>
                          </div>
                          <div className="p-2">
                          <button
                            className="circle btn btn-link btn-sm"
                          >
                          <i class="fab fa-instagram"></i>
                          </button>
                          </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright_content d-flex px-4 pb-3">
                    <span>Copyright <AiFillCopyrightCircle />1996-2021 YouShop Ltd. All rights reserved</span>
                    <span>Terms of Use - Privacy Policy - Link to Us</span>
                </div>
            </footer>
      
    )
}


export default footer;