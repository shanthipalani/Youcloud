import React from "react";
import "./loyaltypoints.css";
import Nav from "../navigation/nav";
import Footer from "../Footer/footer";
import Calender from "../../Asset/images/calender.png";
import Search from "../../Asset/images/search.png";
// import Select from 'react-bootstrap-select'
import {IoCalendarClearOutline} from 'react-icons/io5'



function loyaltypoints() {
  return (
    <>
      <Nav />

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 mt-4">              

            Home &nbsp; &#62; &nbsp; Loyalty Points
            <p className="mt-4 loyaltypointscolor">Loyalty points History</p>
          </div>
        </div>
        <div className="container">  
            <div className="row">
              <div className="col">
                <select className="sortby">
                  <option value="Sortby">Sortby</option>
                </select>
              </div>
              {/* <div className="row"> */}
                <div className="col d-flex ml-5">
                  <div>                    
                    <select class="selectpicker calender_bordersize">
                        <option >Last Month</option>
                        <option data-icon="glyphicon-star">Option2</option>
                        <option data-icon="glyphicon-glass">Option3</option>
                    </select>                    
                  </div>
                  {/* </div> */}

                  {/* <div className="col"> */}
                    <div className="form-group has-search ml-5">
                      <span className="fa fa-search form-control-feedback"></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Now"
                      />
                    </div>
                    {/* <div>
                        <input type="text" placeholder="Search Now"/>
                    </div> */}
                  </div>
                
              {/* </div> */}
            </div>
            </div>
            <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12">
            <div className="loyaltycontent w-100 d-flex mt-4">
              <div className="w-70 ml-3">
                <div className="order_idcolor">Order ID : 019192</div>
                <div className="points_added">
                  250 Point Added in your account
                </div>
                <div className="d-flex storedatecontent">
                  <div className="storecontent_size">
                    Store : Al Maya Supermarket
                  </div>
                  <div className="storecontent_size ml-4">
                    Date:12/12/2021, 00:00 AM
                  </div>
                </div>
              </div>
              <div className="w-30 text-right">
                <div className="cardpayment_box">Card Payment</div>
                <div className="transactiontype_size">*Transaction type</div>
              </div>
            </div>
            <br />
            <div className="loyaltycontent_1 w-100 d-flex">
              <div className="w-70 ml-3">
                <div className="order_idcolor">Order ID : 019192</div>
                <div className="points_added">
                  250 Point Added in your account
                </div>
                <div className="d-flex storedatecontent">
                  <div className="storecontent_size">
                    Store : Al Maya Supermarket
                  </div>
                  <div className="storecontent_size ml-4">
                    Date:12/12/2021, 00:00 AM
                  </div>
                </div>
              </div>
              <div className="w-30 text-right">
                <div className="cardpayment_box">Card Payment</div>
                <div className="transactiontype_size">*Transaction type</div>
              </div>
            </div>
            <br />
            <div className="loyaltycontent w-100 d-flex">
              <div className="w-70 ml-3">
                <div className="order_idcolor">Order ID : 019192</div>
                <div className="points_added">
                  250 Point Added in your account
                </div>
                <div className="d-flex storedatecontent">
                  <div className="storecontent_size">
                    Store : Al Maya Supermarket
                  </div>
                  <div className="storecontent_size ml-4">
                    Date:12/12/2021, 00:00 AM
                  </div>
                </div>
              </div>
              <div className="w-30 text-right">
                <div className="cardpayment_box">Card Payment</div>
                <div className="transactiontype_size">*Transaction type</div>
              </div>
            </div>
            <br />
            <div className="loyaltycontent_1 w-100 d-flex">
              <div className="w-70 ml-3">
                <div className="order_idcolor">Order ID : 019192</div>
                <div className="points_added">
                  250 Point Added in your account
                </div>
                <div className="d-flex storedatecontent">
                  <div className="storecontent_size">
                    Store : Al Maya Supermarket
                  </div>
                  <div className="storecontent_size ml-4">
                    Date:12/12/2021, 00:00 AM
                  </div>
                </div>
              </div>
              <div className="w-30 text-right">
                <div className="cardpayment_box">Card Payment</div>
                <div className="transactiontype_size">*Transaction type</div>
              </div>
            </div>
            <br />

            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
          <div className="row">
              <div className="col">
                <ul className = "pagination">
                    <li className = "page-item "> <a className="page-link prevcolor" href="#"> Prev </a> </li>
                    <li className = "page-item active"> <a className="page-link onecolor" href="#"> 1 </a> </li>
                    <li className = "page-item"> <a className="page-link twocolor" href="#"> 2 </a> </li>        
                    <li className = "page-item"> <a className="page-link nextcolor" href="#"> Next </a> </li>
                </ul>
            </div>
        </div>
     </div> */}

      <Footer />
    </>
  );
}

export default loyaltypoints;
