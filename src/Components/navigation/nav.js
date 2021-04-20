import React from 'react';
import { ImLocation2 } from 'react-icons/im';
import { HiOutlineUser } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa'
import { BiHeart, BiCartAlt, BiSearch, BiHelpCircle } from 'react-icons/bi'
import { AiOutlineShop } from 'react-icons/ai'
import { GrShieldSecurity } from 'react-icons/gr';
import './nav.css'
import MaterialIcon from 'react-google-material-icons'
import Pin from '../../Asset/images/pin.png'
import Blogging from '../../Asset/images/blogging.png'
import User from '../../Asset/images/user.png'
import Heart from '../../Asset/images/Heart.png'
import Usersmall from '../../Asset/images/Usersmall.png'
import Cartsmall from '../../Asset/images/Cartsmall.png'
import Layer_8 from '../../Asset/images/Layer_8.png'
import Healthcare from '../../Asset/images/Healthcare.png'
import Help from '../../Asset/images/help.png'



const nav = ({ count }) => {
    return (
        <div className="w-100">
            <header className="nav-2">
                <div className="head-2 container">

                    <span><img src={Pin} />&nbsp; Dubai Festival City - Dubai</span>
                    <span><img src={Blogging} />&nbsp; &nbsp;Blog &nbsp;&nbsp;<img src={User} />&nbsp;Register or Sign in</span>
                </div>
            </header>
            <div className="youshop col-lg-12 col-md-12 p-0">
                <div className="icon container pt-3 pb-3">
                    <div className="col-lg-4 col-sm-12">
                    <div>
                        <span className="you">You</span>
                        <span className="shop">Shop</span>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-12">
                    <form>
                        <div className="search_form">
                            <input className="search_input" type="text" name="place" placeholder="Dubai, AL Karama" />
                            <button className="search"><BiSearch /></button>
                        </div>
                    </form>
                    </div>

                    <div className="col-lg-4 col-sm-12 nav_icon_right">
                        <span className="side_icons"><img src={ Usersmall }/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="side_icons"><img src={Heart} alt="heart"/></span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="side_icons"><img src={Cartsmall} /></span><span className="counter">{count}</span>
                    </div>
                </div>
                <div className="header3">
                <div className="container pt-3 pb-3">
                    <span><img src={Healthcare} className="support_icons" />&nbsp;&nbsp;Covid-19 Supplies</span>
                    <span><img src={Layer_8} className="support_icons" />&nbsp;&nbsp;Nearby Shops</span>
                    <span><img src={Help} className="support_icons" />&nbsp;&nbsp;Help</span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default nav;