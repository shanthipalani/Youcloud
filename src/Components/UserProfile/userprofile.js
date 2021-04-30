import React from 'react'
import './userprofile.css'
import Nav from '../../Components/navigation/nav'
import Footer from '../../Components/Footer/footer'
import address from '../../Asset/images/address.png'
import cardno from '../../Asset/images/cardno.png'
import invitefriends from '../../Asset/images/invitefriends.png'
import language from '../../Asset/images/language.png'
import logout from '../../Asset/images/logout.png'
import notification from '../../Asset/images/notification.png'
import payment from '../../Asset/images/payment.png'
import securitycode from '../../Asset/images/securitycode.png'
import settings from '../../Asset/images/settings.png'
import support from '../../Asset/images/support.png'
import vouchers from '../../Asset/images/vouchers.png'
import userpic from '../../Asset/images/userpic.png'


const userprofile = ()=>{
    return(
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="container mt-5">
                    <p className="user_profile_color">User Profile</p>
                </div>
                <section className="userprofile_content">
                    <div className="row">
                        <div className="col-lg-4 col-md-8">
                            <p>
                                <span className="d-flex"><img src={userpic} alt="userpic" />
                                <p className="ml-4">Fannie Jackson</p>
                                <p>+1(454)3421 1432</p>
                                
                                </span> 
                            </p>
                            <div className="d-flex ml-2 payment_content">
                                <img src={payment} alt="payment" /><p className="mt-2">Payment Method</p>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}






export default userprofile