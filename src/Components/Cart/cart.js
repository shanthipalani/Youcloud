import React from 'react'
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
import Healthcare from '../../Asset/images/Healthcare.png'
import './cart.css'
import Verifiedgreen from '../../Asset/images/verifiedgreen.png'
import Verified from '../../Asset/images/verified.png'
import deleteicon from '../../Asset/images/deleteicon.png'


const cart = () => {
    return (
      <>
      <Nav  />
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
              <span className="upcoming_page"><img src={Verified}  width="60" height="45" className="" />   SHIPPING AND CHECKOUT</span>
            </div>

            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 height-60">
              <span className="upcoming_page"><img src={Verified}  width="60" height="45" className="" />   CONFIRMATION</span>
            </div>

          </section>

          <section className="mt-5 mb-5 table-responsive">
          <div className="cart_title mb-4">CART</div>


          <table className="table_wrapper">
            <thead>
              <tr>
                <th></th>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
  
            <tbody>
              <tr>
                <td className="text-center">
                  <input type="checkbox" className="cart_checkbox" value=""/>
                </td>
                <td>
                  <img className="img-box"></img>
                </td>
                <td>
                  <div>Sample Product Image</div>
                  <div>Color: Red</div>
                  <div>Size: L</div>
                </td>
                <td>
                  $200
                </td>
                <td>
                  <input type="text" className="qty_input" value="1"/>
                </td>
                <td>
                  <span className="font-weight-bold">$200</span>
                </td>
                <td>
                  <a>
                    <img src={deleteicon} width="30" height="30" className="" />
                  </a>
                </td>
              </tr>

              <tr>
              <td className="text-center">
                  <input type="checkbox" className="cart_checkbox" value=""/>
                </td>
                <td>
                  <img className="img-box"></img>
                </td>
                <td>
                  <div>Sample Product Image</div>
                  <div>Color: Red</div>
                  <div>Size: L</div>
                </td>
                <td>
                  $200
                </td>
                <td>
                  <input type="text" className="qty_input" value="1"/>
                </td>
                <td>
                  <span className="font-weight-bold">$200</span>
                </td>
                <td>
                  <a>
                    <img src={deleteicon} width="30" height="30" className="" />
                  </a>
                </td>
              </tr>

              <tr>
              <td className="text-center">
                  <input type="checkbox" className="cart_checkbox" value=""/>
                </td>
                <td>
                  <img className="img-box"></img>
                </td>
                <td>
                  <div>Sample Product Image</div>
                  <div>Color: Red</div>
                  <div>Size: L</div>
                </td>
                <td>
                  $200
                </td>
                <td>
                  <input type="text" className="qty_input" value="1"/>
                </td>
                <td>
                  <span className="font-weight-bold">$200</span>
                </td>
                <td>
                  <a>
                    <img src={deleteicon} width="30" height="30" className="" />
                  </a>
                </td>
              </tr>
            
            </tbody>
        </table>

        <div className="cart_total">
          <div className="cart_total_wrapper font-weight-bold">
            TOTAL
          </div>
          <div  className="cart_total_wrapper">
          <span className="font-weight-bold">$600</span>
            </div>
        </div>

          </section>

          <hr/>

          <section className="mb-5 cart_footer_box">

            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 voucher mt-5">
       
              <div className="title">VOUCHER</div>
              <div className="desc">Enter your coupon code if you have one</div>
              <div>
                <input type="text" className="voucher_input" value="" placeholder="Voucher Code/Gift Code"/>
              </div>
              <div><button className="cart_btn">Apply Now</button></div>
           
            </div>


            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-5">
              <div className="checkout_box">

                <div className="d-flex checkout_row checkout_row_border">
                  <div className="w-50">Subtotal</div>
                  <div className="w-50 text-right">$400.00</div>
                </div>

                <div className="d-flex checkout_row checkout_row_border">
                  <div className="w-50">Shipping</div>
                  <div className="w-50 text-right">$20.00</div>
                </div>

                <div className="d-flex checkout_row checkout_tot">
                  <div className="w-50">Total</div>
                  <div className="w-50 text-right">$420.00</div>
                </div>
                <div className="text-right"><button className="checkout_btn">Checkout</button></div>
              <div>                  
            </div>

              </div>
              
            </div>


          </section>

        </div>
      <Footer />
      </>
    );
  }

export default cart
