import React from "react";
import "./invoice.css";
import Nav from "../navigation/nav";
import Footer from "../Footer/footer";
// import jsPDF from "jspdf";
import YouCloudlogo from '../../Asset/images/YouCloudlogo.png'
import favicon from '../../Asset/images/favicon.png'

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
        <div className="contentborder">    
        <section className="bodyfont container  mt-4">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12  text-center">                  
                    <p>Hingurakgoda MPCS -Hingurakgoda coop City</p>                
                    <div>test address ,</div>                  
                    <div>Sri-Lanka</div>
                    <div>Tel: 0272246201</div>
                    <div>Vat No: 12378965</div>
                    <div>TAX INVOICE</div>
                    <div><hr className="hrlinedotted" /></div>                  
                </div>
            </div>  
            <div className="row">
                <div className="col-lg-8">  
                    <p>Bill #:17303</p>
                    <p>Date : 05/18/2021 11:07:39 AM</p>
                    <p>Payment Mode : Split Sales</p>
                    <p>Customer :A G Office Hingurakgoda</p>
                </div>
            </div><hr className="hrlinedotted" />
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sn.</th>
                            <th>Particulars</th>
                            <th>Qty</th>
                            <th>Rate</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Ala kg</td>
                            <td>0.290</td>
                            <td>140.00</td>
                            <td>40.60</td>                            
                        </tr>                       
                    </tbody>               
                </table>
                <hr className="slicehrline"/>              
            </div>     
        </section>
        {/* <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex grossamount">
                    <p>Gross Amount:</p>
                </div>
            </div>
        </div> */}
        <div className="w-100 d-flex">
            <div className="w-50">

            </div>
            <div className="w-50">
                Gross amount:
            </div>
        </div>
        </div>
        </div>
        <div className="footer_gap1">
          <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default invoice;





/* <div className="row">
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
                {/* <p><span>INVOICE # </span>0047</p>
                <p><span>INVOICE DATE </span>January 13,2015</p>
                <p><span>AMOUNT DUE </span>$776</p> */
        //         <div className="w-100 d-flex">
        //             <div className="w-50">
        //                 INVOICE # 
        //             </div>
        //             <div className="w-50">
        //                 0047
        //             </div>
        //         </div>
        //         <div className="w-100 d-flex mt-2">
        //             <div className="w-50">
        //                 INVOICE DATE 
        //             </div>
        //             <div className="w-50">
        //                 January 13,2015
        //             </div>
        //         </div>
        //         <div className="w-100 d-flex mt-2">
        //             <div className="w-50">
        //                 AMOUNT DUE 
        //             </div>
        //             <div className="w-50">
        //                 $776
        //             </div>
        //         </div>

        //     </div>
        //   </div>
        //   <div className="table-responsive mt-4">
        //       <table className="table">
        //           <thead>
        //               <tr>
        //                   <th>Item</th>
        //                   <th>Description</th>
        //                   <th>Quantity</th>
        //                   <th>Unit Cost</th>
        //                   <th>Line Total</th>
        //               </tr>
        //           </thead>
        //           <tbody>
        //               <tr>
        //                   <td>Mobile Card Reader</td>
        //                   <td>For iPhone &#38; iPad</td>
        //                   <td>2</td>
        //                   <td>2</td>
        //                   <td>2</td>
        //               </tr>
        //               <tr>
        //                   <td>Mobile Card Reader</td>
        //                   <td>For iPhone &#38; iPad</td>
        //                   <td>2</td>
        //                   <td>2</td>
        //                   <td>2</td>
        //               </tr>
        //           </tbody>
        //       </table><hr/>
        //   </div>
        //   <div className="row">
        //       <div className="col-lg-7 col-md-7 mt-5">
        //         <p><strong>NOTES / MEMO</strong></p>
        //         <p>Free shipping with 30-day money-back guarantee.</p>
        //       </div>
        //       <div className="col-lg-5 col-md-5 mt-5">                
        //         <div className="w-100 d-flex">
        //             <div className="w-50">
        //                 SUBTOTAL
        //             </div>
        //             <div className="w-50">
        //                 0047
        //             </div>
        //         </div>
        //         <div className="w-100 d-flex mt-2">
        //             <div className="w-50">
        //                 TAX (13.0%)
        //             </div>
        //             <div className="w-50">
        //                 $89
        //             </div>
        //         </div>
        //         <div className="w-100 d-flex mt-2">
        //             <div className="w-50">
        //                 TOTAL
        //             </div>
        //             <div className="w-50">
        //                 $89
        //             </div>
        //         </div>
        //       </div>
        //   </div><hr />
        //   <div className="imagecontentplace">
        //       <p><img className="faviconborder" src={favicon} alt="logo" width="60" height="60" /></p>
        //       <p>Invoice powered by Shopify POS</p>
        //   </div>  
        // </section>
        // <div>
        //     <p className="text-center mt-5">
        //         <div>
        //             <button>Back</button>
        //             <button>Print Now</button>
        //         </div>
        //     </p>
        // </div> 
