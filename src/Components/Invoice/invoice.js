import React from "react";
import "./invoice.css";
import Nav from "../navigation/nav";
import Footer from "../Footer/footer";
// import jsPDF from "jspdf";
import YouCloudlogo from  '../../Asset/images/YouCloudlogo.png'
import favicon from  '../../Asset/images/favicon.png'

const invoice = () => {
  return (
    <div>
      <Nav />

      <div className="container-fluid">
        <div className="container mt-4">
          <div className="row linksize">
            Home &nbsp;&#62;&nbsp; Products &nbsp;&#62;&nbsp; Detail Products
          </div>
        </div>
        <div className="container viewinvoice_colorsize mt-4">
          <div className="row">VIEW INVOICE</div>
        </div>
        <div className="bodyfont">
        <div className="contentborderwidth">
        <div className="row">
            <div className="col-lg-7 col-md-7">
                <p><strong>BILL FROM:</strong></p>
                <div>Shopify Hardware Store</div>
                <div>150 Eligin Street</div>
                <div>Ottawa, ON, K2P 1L4</div>
                <div>Canada</div>
                <div>poshardware@shopify.com</div>
            </div>
            <div className="col-lg-5 col-md-5">
                <img src={YouCloudlogo} alt="logo" width="242" height="65"/>
            </div>
          </div><hr/>

          <div className="row">
            <div className="col-lg-7 col-md-7 mt-4">
                <p><strong>BILL FROM:</strong></p>
                <div>Shopify Hardware Store</div>
                <div>150 Eligin Street</div>
                <div>Ottawa, ON, K2P 1L4</div>
                <div>Canada</div>
                <div>poshardware@shopify.com</div>
            </div>
            <div className="col-lg-5 col-md-5 mt-4">
                <p><span>INVOICE # </span>0047</p>
                <p><span>INVOICE DATE </span>January 13,2015</p>
                <p><span>AMOUNT DUE </span>$776</p> 
                <div className="w-100 d-flex">
                    <div className="w-50">
                        INVOICE # 
                    </div>
                    <div className="w-50">
                        0047
                    </div>
                </div>
                <div className="w-100 d-flex mt-2">
                    <div className="w-50">
                        INVOICE DATE 
                    </div>
                    <div className="w-50">
                        January 13,2015
                    </div>
                </div>
                <div className="w-100 d-flex mt-2">
                    <div className="w-50">
                        AMOUNT DUE 
                    </div>
                    <div className="w-50">
                        $776
                    </div>
                </div>

            </div>
          </div>
          <div className="table-responsive mt-4">
              <table className="table">
                  <thead>
                      <tr>
                          <th>Item</th>
                          <th>Description</th>
                          <th>Quantity</th>
                          <th>Unit Cost</th>
                          <th>Line Total</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Mobile Card Reader</td>
                          <td>For iPhone &#38; iPad</td>
                          <td>2</td>
                          <td>2</td>
                          <td>2</td>
                      </tr>
                      <tr>
                          <td>Mobile Card Reader</td>
                          <td>For iPhone &#38; iPad</td>
                          <td>2</td>
                          <td>2</td>
                          <td>2</td>
                      </tr>
                  </tbody>
              </table><hr/>
          </div>
          <div className="row">
              <div className="col-lg-7 col-md-7 mt-5">
                <p><strong>NOTES / MEMO</strong></p>
                <p>Free shipping with 30-day money-back guarantee.</p>
              </div>
              <div className="col-lg-5 col-md-5 mt-5">                
                <div className="w-100 d-flex">
                    <div className="w-50">
                        SUBTOTAL
                    </div>
                    <div className="w-50">
                        0047
                    </div>
                </div>
                <div className="w-100 d-flex mt-2">
                    <div className="w-50">
                        TAX (13.0%)
                    </div>
                    <div className="w-50">
                        $89
                    </div>
                </div>
                <div className="w-100 d-flex mt-2">
                    <div className="w-50">
                        TOTAL
                    </div>
                    <div className="w-50">
                        $89
                    </div>
                </div>
              </div>
          </div><hr />
          <div className="imagecontentplace">
              <p><img className="faviconborder" src={favicon} alt="logo" width="60" height="60" /></p>
              <p>Invoice powered by Shopify POS</p>
          </div>
        </div>

          <div >
            <p className="d-flex buttonbelowcontent mt-5">
                <div>
                    <button className="backbutton">Back</button>
                    <button className="ml-3 printnowbutton">Print Now</button>
                </div>
            </p>
        </div> 
        </div>
        <div className="footer_gap1">
          <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default invoice





  
        // </section>
       
