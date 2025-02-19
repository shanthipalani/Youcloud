import React, { useState } from 'react'; 
import {  BiCartAlt, BiSearch, BiHelpCircle } from 'react-icons/bi' ;
import { SmileTwoTone, HeartTwoTone, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './nav.css' 
import Pin from '../../Asset/images/pin.png'
import Blogging from '../../Asset/images/blogging.png'
import User from '../../Asset/images/user.png'
import Heart from '../../Asset/images/Heart.png'
import Usersmall from '../../Asset/images/Usersmall.png'
import Cartsmall from '../../Asset/images/Cartsmall.png'
import Layer_8 from '../../Asset/images/Layer_8.png'
import Healthcare from '../../Asset/images/Healthcare.png'
import Help from '../../Asset/images/help.png'
 import Category from './category'
 import { Badge } from 'antd';
import { Link, useHistory } from "react-router-dom";

function Nav(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
     
            <header >
                <div className="nav-2 d-none d-md-flex">
                <div className="head-2 container">
 
<span><img src={Pin} />&nbsp; Dubai Festival City - Dubai</span>
<span><img src={Blogging} />&nbsp; &nbsp;Blog &nbsp;&nbsp;<img src={User} />&nbsp;Register or Sign in</span>
</div>
                </div>
              
                <div className="container-fluid">
                <div className="row d-md-none py-2">
          <div className="col-12 mobile-header-wrapper">
            <button 
                onClick={() => {
                    setIsOpen(!isOpen);
                  }}
            className="menu-btn p-3">
              <i className="fas fa-bars"></i>
            </button>
           

            <div className="mobile-logo-wrapper align-items-center">
            <div>
                        <span className="you">You</span>
                        <span className="shop">Shop</span>
                      
                    </div>
            </div>
            <div className="col-lg-4 nav_icon_right d-md-none">
                      <div className="pt-2 text-right">               <span className="side_icons"><UserOutlined /></span>
                    <span className="side_icons">  <HeartTwoTone twoToneColor="#eb2f96" /></span><span className="side_icons px-2"><Badge count={5} size="small" style={{fontSize: 8}}><ShoppingCartOutlined style={{fontSize: 22}} /></Badge></span></div>
                    </div>
              
          </div>
        </div> 
                </div>
            </header> 
            <div className="youshop col-lg-12 col-md-12 p-0 site site--desktop-header--spaceship-one site--mobile-header--mobile-one">
            <div className="text-center small d-md-none">
 <span><i className="fas fa-map-marker-alt"></i> Dubai Festival City - Dubai</span>
 </div> 
                <div className="icon container pt-3 pb-3">
                    <div className="col-lg-2 d-none d-md-flex">
                    <div>
                        <span className="you">You</span>
                        <span className="shop">Shop</span>
                       
                    </div>
              
                    </div>
         

                    <div className="col-lg-8 col-sm-12">
                    <form>
                        <div className="search_form">
                            <input className="search_input" type="text" name="place" placeholder="Dubai, AL Karama" />
                            <button className="search"><BiSearch /></button>
                        </div>
                    </form>
                    </div>
 
                    <div className="col-lg-2 col-sm-12 nav_icon_right d-none d-md-flex">

            <span className="side_icons"><UserOutlined /></span>
                    <span className="side_icons pl-2">  <HeartTwoTone twoToneColor="#eb2f96" /></span><span className="side_icons px-2"><Badge count={5} size="small" style={{fontSize: 10}}><ShoppingCartOutlined style={{fontSize: 25}} /></Badge></span></div>
              
              
                </div>
                <div className="header3">
                <div className="container pt-3 pb-3" style={{display:"flex"}}>
                <span>  <Category className="support_icons"  label ={"All Category"}/></span>
                    <span><img src={Healthcare} className="support_icons" />&nbsp;&nbsp;Covid-19 Supplies</span>
                    <span><img src={Layer_8} className="support_icons" />&nbsp;&nbsp;Nearby Shops</span>
                    <span><img src={Help} className="support_icons" />&nbsp;&nbsp;Help</span>
                </div>
                </div>
            </div>
        
    
        <div
      className={`default-sidebar${
        isOpen && isOpen === true ? " sidebar-open" : ""
      }`}
    >

<div
           onClick={() => {
            setIsOpen(!isOpen);
          }}
        className="sidebar-backdrop d-md-none"
      ></div>
            <div className="sidebar d-md-none">

        <div className="sidebar-content text-center">
          <ul className="nav flex-column pt-3">
          <li
                 
                  className={`nav-item ${
                    true
                      ? "selected"
                      : ""
                  }`}
                >
                  <Link
             
                    
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li
                 
                  className={`nav-item ${
                    false
                      ? "selected"
                      : ""
                  }`}
                >
                  <Link
             
                    
                    className="nav-link"
                  >
                    Profile
                  </Link>
                </li>
                <li
                 
                 className={`nav-item ${
                   false
                     ? "selected"
                     : ""
                 }`}
               >
                 <Link
            
                   
                   className="nav-link"
                 >
                   Wishlist
                 </Link>
               </li>
          </ul>
        </div>
        <div className="sidebar-footer p-2">
          <div className="sign-up pb-3">
        
              <div className="current-user-name text-center">
                <span>
    
Hello User
                </span>
              </div>
            
              <Link
                to="/auth/register"

                className="btn btn-success-gradient btn-block mt-2"
              >
                Sign up
              </Link>
        
          </div>
       
            {/* <button
              type="button"
              className="btn btn-danger btn-block mt-2"
            >
              Logout
            </button> */}
      
            <Link

              to="/auth/login"
              className="btn btn-light btn-block mt-2"
            >
              Sign In
            </Link>
        
        </div>
      </div>
   
    </div>
    
    </>)
}

export default Nav;