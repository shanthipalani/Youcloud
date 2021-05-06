import React from 'react'
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
import './orderhistory.css' 
import addtocart from '../../Asset/images/addtocart.png'


const orderhistory = () =>{
    return(
        <div>
            <Nav />
            <div className="container mt-4 mb-4">
                <section>
                    <div>
                        Home  &nbsp; > &nbsp; Products &nbsp; > &nbsp;Detail Product
                    </div>
                </section>

                <section className="mt-5 mb-5 table-responsive">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 cart_title mb-4">ORDER HISTORY</div>
                        <div className=" d-flex col-lg-6 col-md-6 search_now_content"><button className="searchnow_button">Search Now</button></div>
                    </div>               

                
                    <table className="table">
                        <thead>
                            <tr>
                                <th>IMAGE</th>
                                <th>QUANTITY</th>
                                <th>STATUS</th>
                                <th>PAYMENT</th>
                                <th>TOTAL</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        <tr>
                            <td>
                                <img className="img-box"></img>
                                
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                
                            </td>
                            <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td>
                            <td>
                                <tr>
                                    <div className="delivered_fontcolor">Delivered</div>
                                    <div className="delivered_fontcolor">successfully</div>
                                </tr>
                            </td>
                            <td>
                                Credit Card
                            </td>
                            <td>
                            <span className="font-weight-bold">$200.00</span>
                            </td>
                            <td>
                                <span className="view_invoice">View Invoice</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <button className="addtocart_size"><img src={addtocart}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button>
                                        {/* <img className="addtocart_size" src={addtocart} style={{width:'130'}} /> */}
                                        {/* <span className="reorder_color">Re-Order</span> */}
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                            <td>
                                <img className="img-box"></img>
                                
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                
                            </td>
                            <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td>
                            <td>
                                <tr>
                                    <div className="delivered_fontcolor">Delivered</div>
                                    <div className="delivered_fontcolor">successfully</div>
                                </tr>
                            </td>
                            <td>
                                Credit Card
                            </td>
                            <td>
                            <span className="font-weight-bold">$200.00</span>
                            </td>
                            <td>
                                <span className="view_invoice">View Invoice</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <button className="addtocart_size"><img src={addtocart}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button>
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                            <td>
                                <img className="img-box"></img>
                                
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                
                            </td>
                            <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td>
                            <td>
                                <tr>
                                    <div className="delivered_fontcolor">Delivered</div>
                                    <div className="delivered_fontcolor">successfully</div>
                                </tr>
                            </td>
                            <td>
                                Credit Card
                            </td>
                            <td>
                            <span className="font-weight-bold">$200.00</span>
                            </td>
                            <td>
                                <span className="view_invoice">View Invoice</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <button className="addtocart_size"><img src={addtocart}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button>
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                            <td>
                                <img className="img-box"></img>
                                
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                
                            </td>
                            <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td>
                            <td>
                                <tr>
                                    <div className="delivered_fontcolor">Delivered</div>
                                    <div className="delivered_fontcolor">successfully</div>
                                </tr>
                            </td>
                            <td>
                                Credit Card
                            </td>
                            <td>
                            <span className="font-weight-bold">$200.00</span>
                            </td>
                            <td>
                                <span className="view_invoice">View Invoice</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <button className="addtocart_size"><img src={addtocart}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button>
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                            <td>
                                <img className="img-box"></img>
                                
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                
                            </td>
                            <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td>
                            <td>
                                <tr>
                                    <div className="delivered_fontcolor">Delivered</div>
                                    <div className="delivered_fontcolor">successfully</div>
                                </tr>
                            </td>
                            <td>
                                Credit Card
                            </td>
                            <td>
                            <span className="font-weight-bold">$200.00</span>
                            </td>
                            <td>
                                <span className="view_invoice">View Invoice</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <button className="addtocart_size"><img src={addtocart}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button>
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        </tbody>
                    </table>
                
                </section>
                <div aria-label="...">
          <ul className=" pagination_design">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active">
              <span className="page-link">
                2
                <span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </div>
            </div>
            <div className="footer_gap">
                <Footer />
            </div>
        </div>
    )
}


export default orderhistory