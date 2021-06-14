import React from "react";
import Nav from "../navigation/nav";
import Footer from "../Footer/footer";
import "./carddetail.css";
// import Healthcare from '../../Asset/images/Healthcare.png'
import Verifiedgreen from '../../Asset/images/verifiedgreen.png'
import Verified from '../../Asset/images/verified.png'
import Googlepay from '../../Asset/images/googlepay.png'
import Paytm from '../../Asset/images/paytm.png'
import PhonePe from '../../Asset/images/PhonePe.png'



const debitcard = () => {
  return (
    <div>
      <Nav />
      <div>
        <div className="container mt-4 mb-4">
          <div className="container mt-4">
                <div className="row linksize">
                  Home &nbsp;&#62;&nbsp; Products &nbsp;&#62;&nbsp; Detail Products
                </div>
          </div> 
            <section className="row cart_wrapper mt-5">

              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 height-60">
                <span className="current_page"><img src={Verifiedgreen} width="60" height="45" className="" />   SHOPPINGBAG</span>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 height-60">
                <span className="upcoming_page"><img src={Verifiedgreen} width="60" height="45" className="" />   SHIPPING AND CHECKOUT</span>
              </div>

              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 height-60">
                <span className="upcoming_page"><img src={Verifiedgreen} width="60" height="45" className="" />   CONFIRMATION</span>
              </div>

            </section>

          <section className="mt-4 mb-5 col-xl-12">
            <div className="row">
              <div className="cart_title mb-4 col-xl-12">
                {" "}
                <div className="row">CHECKOUT</div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="row">
                  <div className="cart_chk_title font-weight-bold">
                    SHIPPING INFORMATION
                  </div>
                </div>

                <div className="row border-right">
                  <div className="p-4 shipping_info w-100">
                    <div className="text-right">
                      <a>Change</a>
                    </div>

                    <div className="bg-clr1 p-4 mt-4">
                      <div className="d-flex contact_row checkout_row_border">
                        <div className="w-25">Contact</div>
                        <div className="w-75 font-weight-bold">
                          youremail@gmail.com
                        </div>
                      </div>

                      <div className="d-flex contact_row checkout_row_border">
                        <div className="w-25">Ship to</div>
                        <div className="w-75 font-weight-bold">
                          Address - City, Country
                        </div>
                      </div>

                      <div className="d-flex contact_row">
                        <div className="w-25">Method</div>
                        <div className="w-75">
                          <span className="font-weight-bold">$420.00</span>{" "}
                          (international shipping)
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="mt-5">
                        <div className="paymentmethodcolor font-weight-bold">
                          Debit card information
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit
                        </div>
                        <div className="d-flex w-100 mt-4">
                            <div className="w-50 ">
                                <p className="cardnocolor">Debit Card Type</p>
                                <select className="mastercardwidth">
                                    <option value="Mastercard">Mastercard</option>
                                    <option value="Mastercard">Mastercard</option>
                                    <option value="Mastercard">Mastercard</option>                                    
                                    <option value="Mastercard">Mastercard</option>
                                    <option value="Mastercard">Mastercard</option>
                                    <option value="Mastercard">Mastercard</option>                                    
                                    <option value="Mastercard">Mastercard</option>
                                </select>
                            </div>
                            <div className="w-25">
                                <p className="cardnocolor">Expiry date</p>
                                <input type="text" className="expirydatewidth" value="01/22"/>

                                {/* <select className="expirydatewidth">
                                    <option value="Expirydate">01/22</option>
                                </select> */}
                            </div>
                            <div className="w-25">
                                <p className="cardnocolor">CVV</p>
                                <input type="text" className="expirydatewidth" value="323" />
                                {/* <select className="expirydatewidth">
                                    <option value="CVV">323</option>
                                </select> */}
                            </div>
                        </div>
                        <div className="mt-4 ">
                            <p className="cardnocolor">Card Number</p>                            
                            <input type="text" className="carnumberborder" value="2222 2222 2222 2222"/>
                        </div>
                        <div className="mt-4 ">
                            <p className="cardnocolor">Name on Card</p>                            
                            <input type="text" className="carnumberborder" placeholder="Enter the name on card"/>
                        </div>
                        <div className="">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6">
                                    {/* <input type="checkbox" className="checkboxsize" name="agree_terms" /> */}
                                    <label for="agree_terms" className="agree_terms_cond">I agree on terms &#38; conditions</label>
                                </div>
                                <div className="col-lg-6">
                                    Total amount
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="paynow_button_creditcard">Pay now</button>
                        </div>
                        <div className="mt-5">
                            Or Wallet Payment
                        </div>
                        <div className="d-flex walleticons mt-4">
                            <img src={Paytm} className="paytm_size ml-4" alt="paytm"/>
                            <img src={Googlepay} className="googlepay_size ml-5" alt="googlepay"/>
                            <img src={PhonePe} className="phonepe_size ml-5" alt="phonepe"/>
                        </div>
                        

                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="row">
                  <div className="cart_chk_title font-weight-bold">
                    YOUR ORDER
                  </div>
                </div>

                <div className="row">
                  <div className="d-flex w-100 pl-4 pr-4 pt-3 pb-0">
                    <div className="w-25">
                      <img className="img-box"></img>
                    </div>
                    <div className="w-75 pt-1">
                      <div>Sample Product Image</div>
                      <div>Color: Red</div>
                      <div>Size: L</div>
                      <div className="checkout_tot">$200.00</div>
                    </div>
                  </div>

                  <div className="d-flex w-100 pl-4 pr-4 pt-3 pb-0">
                    <div className="w-25">
                      <img className="img-box"></img>
                    </div>
                    <div className="w-75 pt-1">
                      <div>Sample Product Image</div>
                      <div>Color: Red</div>
                      <div>Size: L</div>
                      <div className="checkout_tot">$200.00</div>
                    </div>
                  </div>

                  <div className="d-flex w-100 pl-4 pr-4 pt-3 pb-0">
                    <div className="w-25">
                      <img className="img-box"></img>
                    </div>
                    <div className="w-75 pt-1">
                      <div>Sample Product Image</div>
                      <div>Color: Red</div>
                      <div>Size: L</div>
                      <div className="checkout_tot">$200.00</div>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-2">
                  <div className="d-flex checkout_row">
                    <div className="w-50">Subtotal</div>
                    <div className="w-50 text-right">$400.00</div>
                  </div>

                  <div className="d-flex checkout_row">
                    <div className="w-50">Shipping</div>
                    <div className="w-50 text-right">$20.00</div>
                  </div>

                  <div className="d-flex checkout_row">
                    <div className="w-50">Total</div>
                    <div className="w-50 text-right checkout_tot">$420.00</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default debitcard;









 {/* <p className="mt-4">Select Payment Method</p>
                        <select className="dropdownpayment">
                          <option value="Cash on delivery">
                            Cash on delivery
                          </option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Debit Card">Debit Card</option>
                        </select>
                        <div className="mt-4">
                          <button className="paynow_button">Pay now</button>
                        </div>
                        <div className="mt-5">Or Wallet Payment</div>
                        <div className="d-flex walleticons">
                          <img src={Paytm} width="30" height="30" />
                          <img src={Googlepay} width="30" height="30" />
                          <img src={PhonePe} width="30" height="30" />
                        </div> */}