import React from 'react'
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
import Healthcare from '../../Asset/images/Healthcare.png'
import './cart.css'
import Verifiedgreen from '../../Asset/images/verifiedgreen.png'
import Verified from '../../Asset/images/verified.png'


const checkout = () => {
    return (
      <>
      <Nav />
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
              <span className="current_page"><img src={Verifiedgreen} width="60" height="45" className="" />   SHIPPING AND CHECKOUT</span>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 height-60">
              <span className="upcoming_page"><img src={Verified} width="60" height="45" className="" />   CONFIRMATION</span>
            </div>

          </section>

          <section className="mt-4  mb-5 col-xl-12">
          <div className="row">
            <div className="cart_title mb-4 col-xl-12"> <div className="row">CHECKOUT</div></div>
                        
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="row">
                  <div className="cart_chk_title font-weight-bold">BILLING DETAILS</div>
              </div>

              <div className="row border-right">

                    <div className="pl-4 pr-4 w-100 pt-4">

                    <div className="d-flex">
                        <div className="w-50 mr-3">
                          <input type="text" className="input_full_width" value="" placeholder="First name"/>
                        </div>
                        <div className="w-50">
                          <input type="text" className="input_full_width" value="" placeholder="Last name"/>   
                        </div>                        
                      </div>

                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="Shipping address"/>
                      </div>

                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="City"/>
                      </div>

                      <div className="d-flex">
                        <div className="w-50 mr-3">
                          <input type="text" className="input_full_width" value="" placeholder="Country"/>
                        </div>
                        <div className="w-50">
                          <input type="text" className="input_full_width" value="" placeholder="Province"/>   
                        </div>                        
                      </div>


                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="Post Code/ ZIP"/>
                      </div>

                      
                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="Phone"/>
                      </div>

                      
                      <div>
                        <input type="text" className="input_full_width" value="" placeholder="Email Address"/>
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

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row">
                  <div className="cart_chk_title font-weight-bold">YOUR ORDER</div>
            </div>

            <div className="row">
                      <div className="d-flex w-100 pl-4 pr-4 pt-3 pb-0">
                        <div className="w-25"><img className="img-box"></img></div>
                        <div className="w-75 pt-1">
                          <div>Sample Product Image</div>
                          <div>Color: Red</div>
                          <div>Size: L</div>
                          <div className="checkout_tot">$200.00</div>                          
                        </div>
                      </div>  


                      <div className="d-flex w-100 pl-4 pr-4 pt-3 pb-0">
                        <div className="w-25"><img className="img-box"></img></div>
                        <div className="w-75 pt-1">
                          <div>Sample Product Image</div>
                          <div>Color: Red</div>
                          <div>Size: L</div>
                          <div className="checkout_tot">$200.00</div>                          
                        </div>
                      </div>  


                      <div className="d-flex w-100 pl-4 pr-4 pt-3 pb-0">
                        <div className="w-25"><img className="img-box"></img></div>
                        <div className="w-75 pt-1">
                          <div>Sample Product Image</div>
                          <div>Color: Red</div>
                          <div>Size: L</div>
                          <div className="checkout_tot">$200.00</div>                          
                        </div>
                      </div>   
              </div>      

              <hr/>

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
      <Footer />
      </>
    );
  }

export default checkout;
