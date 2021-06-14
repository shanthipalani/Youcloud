import React from "react";
import Nav1 from "../navigation/nav1";
import Footer from "../Footer/footer";
import "./coupon.css";
import Checkbox from "../../Asset/images/checkbox.png";
import Imgatcoupon from "../../Asset/images/imgatcoupon.png";

const coupon = () => {
  return (
    <>
      <Nav1 />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            Home &nbsp; &#62; &nbsp; Gift cards &#38;  Gift Vouchers
            <img src={Imgatcoupon} alt="hotel" className="mt-4" />
            <div>
              <p className="totaloffers mt-4">50 Offers Available</p>
              <p className="coupontype">COUPON TYPE</p>
              <div className="">
                <div className="d-flex w-100">
                  <div className="w-20">
                    <input
                      type="checkbox"
                      className="chekboxwidth"
                      id="festival"
                      name="festival"
                      value="Festivalvoucher"
                    />
                  </div>
                  <div className="w-80">
                    <label for="festival"> Festival Vouchers</label>
                  </div>
                </div>
                <hr />

                <div className="d-flex w-100">
                  <div className="w-20">
                    <input
                      type="checkbox"
                      className="chekboxwidth"
                      id="festival"
                      name="festival"
                      value="Festivalvoucher"
                    />
                  </div>
                  <div className="w-80">
                    <label for="festival"> Online Sale</label>
                  </div>
                </div>
                <hr />

                <div className="d-flex w-100">
                  <div className="w-20">
                    <input
                      type="checkbox"
                      className="chekboxwidth"
                      id="festival"
                      name="festival"
                      value="Festivalvoucher"
                    />
                  </div>
                  <div className="w-80">
                    <label for="festival"> Gift Card</label>
                  </div>
                </div>
                <hr />

                <div className="d-flex w-100">
                  <div className="w-20">
                    <input
                      type="checkbox"
                      className="chekboxwidth"
                      id="festival"
                      name="festival"
                      value="Festivalvoucher"
                    />
                  </div>
                  <div className="w-80">
                    <label for="festival"> Coupon Code</label>
                  </div>
                </div>
                <hr />

                <div className="d-flex w-100">
                  <div className="w-20">
                    <input
                      type="checkbox"
                      className="chekboxwidth"
                      id="festival"
                      name="festival"
                      value="Festivalvoucher"
                    />
                  </div>
                  <div className="w-80">
                    <label for="festival"> Deal of the Day</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="col-lg-8 col-md-8">
                <p className="almayavoucher mt-4">Al Maya Supermarket Vouchers</p>
                {/* <select>
                  <label htmlFor=""
                </select> */}
                  <select className="sortby">
                    <option value="Sortby" >Sortby</option>
                  </select>
                <div className="voucherbox mt-5">
                   <div className="w-100 d-flex">
                       <div className="w-20 off25">
                           <div>
                           25%
                           </div>
                           <div>
                            OFF
                           </div>
                       </div>
                       <div className="w-60 vegetables_voucher ml-3">
                           <div className="festivalvoucher_color">
                              Festival Vouchers 
                           </div>
                           <div className="vegetables_in_weekends">
                              25 off on vegetables in weekends 
                           </div>
                           <div className="expirydatecolor">
                               Expiry date 12/12/2021
                           </div>
                       </div>
                       <div className="w-20 ml-5 vegetables_voucher">
                           <div className="voucherno_box">
                               1234567
                           </div>
                           <div className="vouchercode_size ml-3">
                               *Voucher Code
                           </div>
                       </div>
                    </div> 
                </div><br/>

                <div className="voucherbox">
                   <div className="w-100 d-flex">
                       <div className="w-20 off25">
                           <div>
                           25%
                           </div>
                           <div>
                            OFF
                           </div>
                       </div>
                       <div className="w-60 vegetables_voucher ml-3">
                           <div className="festivalvoucher_color">
                              Festival Vouchers 
                           </div>
                           <div className="vegetables_in_weekends">
                              25 off on vegetables in weekends 
                           </div>
                           <div className="expirydatecolor">
                               Expiry date 12/12/2021
                           </div>
                       </div>
                       <div className="w-20 ml-5 vegetables_voucher">
                           <div className="voucherno_box">
                               1234567
                           </div>
                           <div className="vouchercode_size ml-3">
                               *Voucher Code
                           </div>
                       </div>
                    </div> 
                </div><br/>

                <div className="voucherbox">
                   <div className="w-100 d-flex">
                       <div className="w-20 off25">
                           <div>
                           25%
                           </div>
                           <div>
                            OFF
                           </div>
                       </div>
                       <div className="w-60 vegetables_voucher ml-3">
                           <div className="festivalvoucher_color">
                              Festival Vouchers 
                           </div>
                           <div className="vegetables_in_weekends">
                              25 off on vegetables in weekends 
                           </div>
                           <div className="expirydatecolor">
                               Expiry date 12/12/2021
                           </div>
                       </div>
                       <div className="w-20 ml-5 vegetables_voucher">
                           <div className="voucherno_box">
                               1234567
                           </div>
                           <div className="vouchercode_size ml-3">
                               *Voucher Code
                           </div>
                       </div>
                    </div> 
                </div><br/>

                <div className="voucherbox">
                   <div className="w-100 d-flex">
                       <div className="w-20 off25">
                           <div>
                           25%
                           </div>
                           <div>
                            OFF
                           </div>
                       </div>
                       <div className="w-60 vegetables_voucher ml-3">
                           <div className="festivalvoucher_color">
                              Festival Vouchers 
                           </div>
                           <div className="vegetables_in_weekends">
                              25 off on vegetables in weekends 
                           </div>
                           <div className="expirydatecolor">
                               Expiry date 12/12/2021
                           </div>
                       </div>
                       <div className="w-20 ml-5 vegetables_voucher">
                           <div className="voucherno_box">
                               1234567
                           </div>
                           <div className="vouchercode_size ml-3">
                               *Voucher Code
                           </div>
                       </div>
                    </div> 
                </div>


            </div>
        </div>        
      </div>

      <Footer />
    </>
  );
};

export default coupon;
