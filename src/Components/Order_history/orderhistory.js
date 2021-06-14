import React, { useState } from 'react';
import Nav from '../navigation/nav'
import Footer from '../Footer/footer'
import './orderhistory.css' 
import cart2 from '../../Asset/images/cart2.png'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

const Orderhistory = props =>{
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <>
        <div>
            <Nav />
            <div className="container mt-4 mb-4">
                <section>
                    <div>
                        Home  &nbsp; &#62; &nbsp; Products &nbsp;&#62; &nbsp; Detail Product
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
                                {/* <th>QUANTITY</th> */}
                                <th>STATUS</th>
                                <th>PAYMENT</th>
                                <th>TOTAL</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        <tr>
                            <td className="d-flex w-100">
                                <div className="w-50"><img className="img-box"></img></div>

                                    <div className="w-50">
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                    </div>
                                
                            </td>
                            {/* <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td> */}
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
                                <Link to="/Invoice"><span className="view_invoice">View Invoice</span></Link>
                            </td>
                            <td>
                                <span className="view_invoice" style={{backgroundColor: "red", color: "white"}} onClick={toggle}>Order Return</span>
                            </td>
                            <td>
                                <Link to="/Cart"><span className="addtocart_size"><img src={cart2}  alt="" style={{width:'20'}}/>&nbsp;&nbsp;&nbsp;Re-order</span></Link>
                                        {/* <img className="addtocart_size" src={addtocart} style={{width:'130'}} /> */}
                                        {/* <span className="reorder_color">Re-Order</span> */}
                            </td>                         
                        </tr>

                        <tr>
                        <td className="d-flex w-100">
                                <div className="w-50"><img className="img-box"></img></div>

                                    <div className="w-50">
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                    </div>
                                
                            </td>
                            {/* <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td> */}
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
                                <Link to="/Invoice"><span className="view_invoice">View Invoice</span></Link>
                            </td>
                            <td>
                                <span className="view_invoice" style={{backgroundColor: "red", color: "white"}} onClick={toggle}>Order Return</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <Link to="/Cart"><span className="addtocart_size"><img src={cart2}  alt="" style={{width:'20'}}/>&nbsp;&nbsp;&nbsp;Re-order</span></Link>

                                        {/* <button className="addtocart_size"><img src={cart2}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button> */}
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                        <td className="d-flex w-100">
                                <div className="w-50"><img className="img-box"></img></div>

                                    <div className="w-50">
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                    </div>
                                
                            </td>
                            {/* <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td> */}
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
                                <Link to="/Invoice"><span className="view_invoice">View Invoice</span></Link>
                            </td>
                            <td>
                                <span className="view_invoice" style={{backgroundColor: "red", color: "white"}} onClick={toggle}>Order Return</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <Link to="/Cart"><span className="addtocart_size"><img src={cart2}  alt="" style={{width:'20'}}/>&nbsp;&nbsp;&nbsp;Re-order</span></Link>

                                        {/* <button className="addtocart_size"><img src={cart2}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button> */}
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                        <td className="d-flex w-100">
                                <div className="w-50"><img className="img-box"></img></div>

                                    <div className="w-50">
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                    </div>
                                
                            </td>
                            {/* <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td> */}
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
                                <Link to="/Invoice"><span className="view_invoice">View Invoice</span></Link>
                            </td>
                            <td>
                                <span className="view_invoice" style={{backgroundColor: "red", color: "white"}}>Order Return</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <Link to="/Cart"><span className="addtocart_size"><img src={cart2}  alt="" style={{width:'20'}}/>&nbsp;&nbsp;&nbsp;Re-order</span></Link>

                                        {/* <button className="addtocart_size"><img src={cart2}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button> */}
                                    </span>
                                </div>
                            </td>                         
                        </tr>

                        <tr>
                        <td className="d-flex w-100">
                                <div className="w-50"><img className="img-box"></img></div>

                                    <div className="w-50">
                                    <div>Product Name: NEA N95 FFP2 5</div>
                                    <div>Store Name: S1 store</div>
                                    <div>Bill Number: 5464967</div>
                                    <div>Date: 12-04-2021</div>
                                    </div>
                                
                            </td>
                            {/* <td>
                                <input type="text" className="qty_input" value="1"/>
                            </td> */}
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
                                <Link to="/Invoice"><span className="view_invoice">View Invoice</span></Link>
                            </td>
                            <td>
                                <span className="view_invoice" style={{backgroundColor: "red", color: "white"}} onClick={toggle}>Order Return</span>
                            </td>
                            <td>
                                <div>
                                    <span>
                                        <Link to="/Cart"><span className="addtocart_size"><img src={cart2}  alt="" style={{width:'20'}}/>&nbsp;&nbsp;&nbsp;Re-order</span></Link>

                                        {/* <button className="addtocart_size"><img src={cart2}  alt="" style={{width:'130'}}/>&nbsp;&nbsp;&nbsp;Re-order</button> */}
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
        <Modal isOpen={modal} toggle={toggle} contentClassName={"custom-modal"}  centered={true} style={{borderRadius: 25}}>
        <ModalBody>
            <h6 style={{color: "#1b949d"}}><b>Order Return</b></h6>
            <p className="text-muted">Bill Number: 536524356</p>
            <Form style={{color: "teal"}}>
            <FormGroup>
        <Label for="exampleSelect" style={{fontSize: 10}}>Select order return reason</Label>
        <Input type="select" name="select" id="exampleSelect" bsSize="sm"    style={{borderRadius: 20, paddingLeft: 15, color: "teal", fontSize: 12}}>
          <option>Package damaged</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSearch"  style={{fontSize: 10}}>Comment</Label>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          bsSize="sm"
          style={{borderRadius: 20, paddingLeft: 15}}
          placeholder="Lorem Ipsum is simply dummy text of printing...."
        />
        
      </FormGroup>
      <div className="d-flex w-100 flex-row justify-content-between py-3 px-3">

      <div>
      <FormGroup check>
        <Label check style={{fontSize: 10}}>
          <Input type="checkbox" style={{width: 10, marginTop: "auto"}} /> I agree to terms and conditions
        </Label>
      </FormGroup>
      </div>

      <div>
          <span className="text-dark"><b>Total Amount: </b></span><span>$2.65</span> 
      </div>
      </div>
        </Form>
          <button className="btn btn-success btn-block btn-sm" style={{backgroundColor: "#1b949d", borderRadius: 8}}>Confirm</button>
        </ModalBody>
      </Modal>
        </>
    )
}


export default Orderhistory