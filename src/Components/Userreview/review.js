import React from 'react'
// import Rating from '@material-ui/lab/Rating';
import Rating from "react-rating";
// import {Rating} from 'material-ui-rating'
import './review.css'
import Nav1 from '../navigation/nav1'
import Footer from '../Footer/footer'
import Imgatcoupon from "../../Asset/images/imgatcoupon.png";
import Location from '../../Asset/images/location.png'
import Time from '../../Asset/images/time.png'
import TransitionsModal from '../Userreview/addreview'


const review = () =>{
    return(
        <div>
            <Nav1 />
                <div className="store_container">
                    <div className="row">
                    <div className="col-lg-3 col-md-3 mt-5 mb-1">
                            Home  &nbsp;  &#62; &nbsp; See Reviews
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="mt-3">
                                <img src={Imgatcoupon} alt="almaya" width="220" />
                            </div>
                            <p className="carrefour_hyper mt-4">Carrefour Hypermarket</p>
                            <p>Quality, Value &#38; an assured superior shopping experience with Carrefour</p>
                            {/* <div>
                            <Rating
                            value={3}
                            max={5}
                            onChange={(value) => console.log(`Rated with value ${value}`)}
                            />
                            </div> */}
                            {/* <Rating name="size-small" defaultValue={2} size="small" /> */}
                            <div className="tr-rating d-flex w-100 flex-row pt-2">
                            <Rating
                                emptySymbol="fas fa-star empty-star-color"
                                fullSymbol="fas fa-star rated-star-color"
                                initialRating={4}
                                readonly={false}
                                start={0}
                                stop={5}
                                fractions={2}
                                />
                                <p className="text-muted pl-2 m-0">4.0</p>                                
                            </div>
                            <div className="d-flex mt-3" >
                                <img src={Location} alt="location" height="18"/>
                                <p className="ml-4">1.5 Km . Dubai Festival City</p>
                            </div>
                            <div className="d-flex mt-4">
                                <img src={Time} alt="time" height="18" />
                                <p className="ml-4">24/7 hour working</p>
                            </div>
                            <p className="mt-4">Seller since :5 years3months</p>
                            <p className="contact_seller">Contact Seller</p>                            
                        </div>

                        <div className="col-lg-9 col-md-9">
                           {/* <div className="d-flex addreview_modal"> */}
                            {/* </div> */}
                            <TransitionsModal />
                            <div className="d-flex">
                                <p className="reviewcontent mt-3">
                                <div className="d-flex">
                                        <p className="ahmet_duncan">AHMET DUNCAN</p>
                                        <p className="ml-5">
                                        <Rating
                                            emptySymbol="fas fa-star empty-star-color"
                                            fullSymbol="fas fa-star rated-star-color"
                                            initialRating={5}
                                            readonly={false}
                                            start={0}
                                            stop={5}
                                            fractions={2}
                                        /></p>
                                    </div>
                                    <div>There are many variations of passages of Lorem Ipsum available</div>   
                                </p>
                                <p className="reviewcontent mt-3 ml-5">
                                <div className="d-flex">
                                        <p className="ahmet_duncan">AHMET DUNCAN</p>
                                        <p className="ml-5">
                                        <Rating
                                            emptySymbol="fas fa-star empty-star-color"
                                            fullSymbol="fas fa-star rated-star-color"
                                            initialRating={5}
                                            readonly={false}
                                            start={0}
                                            stop={5}
                                            fractions={2}
                                        /></p>
                                    </div>
                                    <div>There are many variations of passages of Lorem Ipsum available</div>   
                                </p>
                            </div>
                            <div className="d-flex">
                                <p className="reviewcontent mt-3">
                                <div className="d-flex">
                                        <p className="ahmet_duncan">AHMET DUNCAN</p>
                                        <p className="ml-5">
                                        <Rating
                                            emptySymbol="fas fa-star empty-star-color"
                                            fullSymbol="fas fa-star rated-star-color"
                                            initialRating={5}
                                            readonly={false}
                                            start={0}
                                            stop={5}
                                            fractions={2}
                                        /></p>
                                    </div>
                                    <div>There are many variations of passages of Lorem Ipsum available</div>   
                                </p>
                                <p className="reviewcontent mt-3 ml-5">
                                <div className="d-flex">
                                        <p className="ahmet_duncan">AHMET DUNCAN</p>
                                        <p className="ml-5">
                                        <Rating
                                            emptySymbol="fas fa-star empty-star-color"
                                            fullSymbol="fas fa-star rated-star-color"
                                            initialRating={5}
                                            readonly={false}
                                            start={0}
                                            stop={5}
                                            fractions={2}
                                        /></p>
                                    </div>
                                    <div>There are many variations of passages of Lorem Ipsum available</div>   
                                </p>
                            </div>
                            <div className="d-flex">
                                <p className="reviewcontent mt-3">
                                <div className="d-flex">
                                        <p className="ahmet_duncan">AHMET DUNCAN</p>
                                        <p className="ml-5">
                                        <Rating
                                            emptySymbol="fas fa-star empty-star-color"
                                            fullSymbol="fas fa-star rated-star-color"
                                            initialRating={5}
                                            readonly={false}
                                            start={0}
                                            stop={5}
                                            fractions={2}
                                        /></p>
                                    </div>
                                    <div>There are many variations of passages of Lorem Ipsum available</div>   
                                </p>
                                <p className="reviewcontent mt-3 ml-5">
                                <div className="d-flex">
                                        <p className="ahmet_duncan">AHMET DUNCAN</p>
                                        <p className="ml-5">
                                        <Rating
                                            emptySymbol="fas fa-star empty-star-color"
                                            fullSymbol="fas fa-star rated-star-color"
                                            initialRating={5}
                                            readonly={false}
                                            start={0}
                                            stop={5}
                                            fractions={2}
                                        /></p>
                                    </div>
                                    <div>There are many variations of passages of Lorem Ipsum available</div>   
                                </p>
                            </div>
                            <nav className="pagination-container Page navigation example mb-5">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item prev disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                    <a class="page-link next" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                           
                        </div>                  
                    </div>
                </div>    
            <Footer/>
        </div>
    )
}


export default review;