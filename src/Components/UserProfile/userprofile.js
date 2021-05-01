import React from 'react'
import './userprofile.css'
import Nav from '../../Components/navigation/nav'
import Footer from '../../Components/Footer/footer'
import address from '../../Asset/images/address.png'
import cardno from '../../Asset/images/cardno.png'
import invitefriends from '../../Asset/images/invitefriends.png'
import language from '../../Asset/images/language.png'
import logout from '../../Asset/images/logout.png'
import notification from '../../Asset/images/notification.png'
import payment from '../../Asset/images/payment.png'
import securitycode from '../../Asset/images/securitycode.png'
import settings from '../../Asset/images/settings.png'
import support from '../../Asset/images/support.png'
import vouchers from '../../Asset/images/vouchers.png'
import userpic from '../../Asset/images/userpic.png'
import rightarrow from '../../Asset/images/rightarrow.png'
import greenrightarrow from '../../Asset/images/greenrightarrow.png'


const userprofile = () => {
    const colorChange = () => {
        console.log("23423423")
    }
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="container mt-5">
                    <p className="user_profile_color">User Profile</p>
                </div>
                <section className="mainbody_border">
                    <div className="row">
                        <div className="col-lg-5 col-md-7">
                            <p>
                                <span className="d-flex">
                                    <img className="ml-5" src={userpic} alt="userpic" />
                                    <p className="ml-4">Fannie Jackson</p>
                                    <p>+1(454)3421 1432</p>

                                </span>
                            </p>
                            <div className="payment_content ml-5 mt-5">
                                <div className="d-flex ">
                                    <img src={payment} alt="payment" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3" onSelect={colorChange}> Payment Methods</p>
                                    <img className="arrow_place " src={greenrightarrow} alt="arrow" width="18" height="18" />
                                </div>
                                <div className="d-flex ">
                                    <img src={address} alt="address" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Address</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                                <div className="d-flex ">
                                    <img src={vouchers} alt="vouchers" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">My Vouchers</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                            </div>
                            <div className="payment_content ml-5 mt-5">
                                <div className="d-flex notification_content">
                                    <img src={notification} alt="notification" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Notification</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                                <div className="d-flex notification_content">
                                    <img src={language} alt="language" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Language</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                                <div className="d-flex notification_content">
                                    <img src={settings} alt="settings" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Settings</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                                <div className="d-flex notification_content">
                                    <img src={invitefriends} alt="invitefriends" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Invite Friends</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                                <div className="d-flex notification_content">
                                    <img src={support} alt="support" width="24" height="24" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Support</p>
                                    <img className="arrow_place " width="18" height="18" src={rightarrow} alt="arrow" />
                                </div>
                            </div>
                            <div className="payment_content ml-5 mt-5">
                                <div className="d-flex logout_content">
                                    <img src={logout} alt="logout" width="18" height="18" className="ml-2" />
                                    <p className=" payment_method_width ml-3">Log Out</p>
                                </div>
                            </div>
                        </div>
                        <div class="verticalLine">
                            
                        </div>
                        <div className="col-lg-5 col-md-7">
                            
              <div className="row border-right">
                  <div className="p-4 shipping_info w-100">
                      <div className="text-right"><a>Change</a></div>

                      <div className="bg-clr1 p-4 mt-4">

                      <div className="d-flex contact_row checkout_row_border">
                        <div className="w-25">Contact</div>
                        <div className="w-75 font-weight-bold">youremail@gmail.com</div>
                      </div>

                      <div className="d-flex contact_row checkout_row_border">
                        <div className="w-25">Ship to</div>
                        <div className="w-75 font-weight-bold">Address - City, Country</div>
                      </div>

                      <div className="d-flex contact_row">
                        <div className="w-25">Method</div>
                        <div className="w-75"><span className="font-weight-bold">$420.00</span> (international shipping)</div>
                      </div>                  
                    </div>
                    </div>

                    <div className="pl-4 pr-4 w-100">
                      <div className="mb-4 font-weight-bold">YOUR CREDIT CARD</div>

                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="Card number"/>
                      </div>

                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="Name on Card"/>
                      </div>

                      <div className="d-flex">
                        <div className="w-50 mr-3">
                          <input type="text" className="input_full_width" value="" placeholder="Expiration (MM / YY)"/>
                        </div>
                        <div className="w-50">
                          <input type="text" className="input_full_width" value="" placeholder="Security code"/>   
                        </div>                        
                      </div>
                   </div>
                    
                   <div className="pl-4 pr-4 w-100 d-flex">
                      <input type="checkbox" className="cart_checkbox mr-2" value=""/> Save this information
                  </div>

                  <div className="col-xl-12 mt-4">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className=""><button className="checkout_btn btn2 btn_size">Back to Shopping</button></div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="text-left"><button className="checkout_btn btn_size">Payment</button></div>
                    </div>
                  </div>
                  </div>

                 
              </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default userprofile