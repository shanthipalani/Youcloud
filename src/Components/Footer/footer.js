import React from 'react';
import './footer.css';
import Shoppingbag from '../../Asset/images/Shoppingbag.png'
import Star from '../../Asset/images/Star.png'
import Gift from '../../Asset/images/Gift.png'
import Helpcenter from '../../Asset/images/Helpcenter.png'
// import { AiOutlineTwitter, AiFillCopyrightCircle } from 'react-icons/ai';
// import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
// import Twitter from '../../Asset/images/twitter.png'
// import Facebook from '../../Asset/images/facebook.png'
// import Instagram from '../../Asset/images/instagram.png'

// const footer =()=>{
// return(<div> 

// </div>)
// }
function footer() {
    return (

            <footer className="footer_background container-fluid">
                <div className="container">
                <div className="row py-5 text-white">
                    <div className="col-12 py-3"></div>
                    {/* <div className="col-12 col-md list_1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div> */}
                    <div className="col-12 col-md list_2">
                        <ul>
                            <li className="about_footer">ABOUT</li>
                            <li className="mt-2 footercontentcolor">Contact US</li>
                            <li>About US</li>
                            <li>Careers</li>
                            <li>YouCloud Stories</li>
                            <li>Press</li>
                            <li>YouCloud Wholesale</li>
                            {/* <li className="mt-3"><img src={Shoppingbag} alt="shoppingbag" width="20"/><span className="ml-4">Sell on YouShop</span></li> */}
                        </ul>
                    </div>
                    <div className="col-12 col-md list_3">
                        <ul>
                            <li className="about_footer">HELP</li>
                            <li className="mt-2">Payment</li>
                            <li>Shipping</li>
                            <li>Cancellation & Return</li>
                            <li>FAQ</li>
                            <li>Report Infringement</li>
                            <li></li>
                            <li></li>
                            {/* <li className="mt-4"><img src={Star} alt="star" width="20"/><span className="ml-3">Advertise</span></li>                             */}
                        </ul>
                    </div>
                    <div className="col-12 col-md list_4">
                        <ul>
                            <li className="about_footer">POLICY</li>
                            <li className="mt-2">Return Policy</li>
                            <li>Terms of Use</li>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Sitemap</li>
                            <li>EPR Compliance</li>
                            {/* <li className="mt-3"><img src={Gift} alt="gift" width="20"/><span className="ml-3">Gift Cards</span></li> */}
                        </ul>
                    </div>
                    <div className="col-12 col-md list_5">
                        {/* <ul>
                            <li>Events</li>
                            <li>Trade Shows</li>
                            <li>Conferences</li>
                            <li>Events by Country</li>
                        </ul> */}
                        {/* <ul> */}
                        <div className="text-center text-md-left pl-md-5">
                            <p className="mb-0 about_footer">MEDIA HUB</p>
                            {/* <span className="mediahub_icons_align"></span> */}
                        </div>
                        <div className="d-flex justify-content-center justify-content-md-start pl-md-5 mt-3">
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
                    {/* </ul> */}
                </div>
                <div className="container footer_content_icons">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li><img src={Shoppingbag} alt="shoppingbag" width="20"/><span className="ml-4 sellonyoushop">Sell on YouShop</span></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li><img src={Star} alt="star" width="20"/><span className="ml-3 sellonyoushop">Advertise</span></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li><img src={Gift} alt="gift" width="20"/><span className="ml-3 sellonyoushop">Gift Cards</span></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li><img src={Helpcenter} alt="gift" width="20"/><span className="ml-3 sellonyoushop">Help Center</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="d-flex footer_advertisement">
                <img src={Helpcenter} alt="helpcenter" />
                </div> */}
                <div className="footer_hrline">
                <hr  />
                </div>                
                {/* <div className="copyright_content d-flex flex-column text-center flex-md-row px-md-4 pb-3"> */}
                <div className="copyright_content text-center px-md-4 pb-3">
                    <small className="mr-5 footer_content_bottom">Conditions of Use & Sale</small>
                    <small className="mr-5 footer_content_bottom" >Privacy Notice</small>
                    <small className="mr-5 footer_content_bottom">Interest-Based Ads</small>
                    <small className="footer_content_bottom">© 2021. YouShop. Inc. or its affiliates</small>
                    {/* <small>Terms of Use - Privacy Policy - Link to Us</small> */}
                </div>
                
            </footer>
      
    )
}


export default footer;













// <footer className="footer_background container-fluid">
//                 <div className="row py-5 text-white">
//                     <div className="col-12 py-3"></div>
//                     <div className="col-12 col-md list_1">
//                         <ul>
//                             <li>About us</li>
//                             <li>Join Sales</li>
//                             <li>Success Stories</li>
//                             <li>Press Section</li>
//                             <li>Advertise with us</li>
//                             <li>Investor Section</li>
//                         </ul>
//                     </div>
//                     <div className="col-12 col-md list_2">
//                         <ul>
//                             <li>Help</li>
//                             <li>Feedback</li>
//                             <li>Complaints</li>
//                             <li>Customer Care</li>
//                             <li>Jobs & Careers</li>
//                             <li>Contact Us</li>
//                         </ul>
//                     </div>
//                     <div className="col-12 col-md list_3">
//                         <ul>
//                             <li>Suppliers Tool Kit</li>
//                             <li>Sell on YouCloud</li>
//                             <li>Latest BuyLead</li>
//                         </ul>
//                     </div>
//                     <div className="col-12 col-md list_4">
//                         <ul>
//                             <li>Buyers Tool kit</li>
//                             <li>Post Your Requirement</li>
//                             <li>Products You Buy</li>
//                             <li>Search Products & Suppliers</li>
//                             <li>Pay With YouCloud</li>
//                         </ul>
//                     </div>
//                     <div className="col-12 col-md list_5">
//                         <ul>
//                             <li>Events</li>
//                             <li>Trade Shows</li>
//                             <li>Conferences</li>
//                             <li>Events by Country</li>
//                         </ul>
//                         <div className="text-center text-md-left pl-md-5">
//                             <p className="mb-0">Media Hub</p>
//                             {/* <span className="mediahub_icons_align"></span> */}
//                         </div>
//                         <div className="d-flex justify-content-center justify-content-md-start pl-md-5">
//                       <div className="p-2">
//                       <button
//                             className="circle btn btn-link btn-sm"
//                           >
//                           <i class="fab fa-twitter"></i>
//                           </button>
//                       </div>
//                       <div className="p-2">
//                           <button
//                             className="circle btn btn-link btn-sm"
//                           >
//                           <i class="fab fa-facebook"></i>
//                           </button>
//                           </div>
//                           <div className="p-2">
//                           <button
//                             className="circle btn btn-link btn-sm"
//                           >
//                           <i class="fab fa-instagram"></i>
//                           </button>
//                           </div>
//                         </div>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="copyright_content d-flex flex-column text-center flex-md-row px-md-4 pb-3">
//                     <small>Copyright © 1996-2021 YouShop Ltd. All rights reserved</small>
//                     <small>Terms of Use - Privacy Policy - Link to Us</small>
//                 </div>
//             </footer>