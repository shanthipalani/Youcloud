import React, { useState } from 'react';
import { BiCartAlt, BiSearch, BiHelpCircle } from 'react-icons/bi';
import { SmileTwoTone, HeartTwoTone, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './nav.css';
import Pin from '../../Asset/images/pin.png';
import Blogging from '../../Asset/images/blogging.png';
import User from '../../Asset/images/user.png';
import Heart from '../../Asset/images/Heart.png';
import Usersmall from '../../Asset/images/Usersmall.png';
import Cartsmall from '../../Asset/images/Cartsmall.png';
import Layer_8 from '../../Asset/images/Layer_8.png';
import Healthcare from '../../Asset/images/Healthcare.png';
import Truck from '../../Asset/images/delivery-truck.png';
import Shield from '../../Asset/images/shield.png';
import CreditCard from '../../Asset/images/credit-card.png';
import Help from '../../Asset/images/help.png';
import YouCloudlogo from '../../Asset/images/YouCloudlogo.png';
import Category from './category';
import { Badge } from 'antd';
import { Link, useHistory } from "react-router-dom";

function Nav1(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  let history = useHistory();
  return (
    <>

      <header >
        <div className="nav-2 ">
          <div className="head-2  store_container">

            <span><Link to="/"><img src={Pin} className="pr-2" style={{ height: 14 }} /></Link><small>Dubai Festival City - Dubai</small></span>
            <span><img src={Blogging} className="pr-2" style={{ height: 12 }} /><small className="pr-4">Blog</small>
            {props.purchase ? (<>
              <img src={Shield} className="pr-2" style={{ height: 14 }} /><small className="pr-4">Guarantee</small>
              <img src={CreditCard} className="pr-2" style={{ height: 14 }} /><small className="pr-4">Payment</small>
              <img src={Truck} className="pr-2" style={{ height: 14 }} /><small className="pr-4">Delivery</small>
            </>): null}
            
            <Link to="Signin" style={{color: "white"}}><img src={User} className="pr-2" style={{ height: 14 }} /><small className="pr-4">Register or Sign in</small></Link></span>
          </div>
        </div>

        <div className="container-fluid ">
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
                <Link to="/">
                  <span className="you">You</span>
                  <span className="shop">Shop</span>

                </Link>
              </div>
              <div className="col-lg-4 nav_icon_right d-md-none d-flex flex-row justify-content-end">
                <span className="side_icons"> <Link to="/Userprofile"> <img src={Usersmall} className="pr-3" style={{ height: 16 }} /></Link></span>
                <span className="side_icons">  <img src={Heart} className="pr-3" style={{ height: 15 }} /></span>
                <span className="side_icons"><Badge count={5} size="small" style={{ fontSize: 8, top: 6, background: "#57bf86" }}><a href="/Cart"> <img src={Cartsmall} className="pr-2 " style={{ height: 18 }} /></a></Badge></span>

              </div>

            </div>
          </div>
        </div>
      </header>
      <div className="youshop col-lg-12 col-md-12 p-0 site site--desktop-header--spaceship-one site--mobile-header--mobile-one">
        <div className="text-center small d-md-none">
          <span><i className="fas fa-map-marker-alt"></i> Dubai Festival City - Dubai</span>
        </div>
        <div className="icon navcontainer store_container pt-2 pb-3">
          <div className="row w-100 m-0">
            <div className="col-lg-2 col-4 d-none d-md-flex p-0">
              {/* <Link to="/" className="">
                <span className="you">You</span>
                <span className="shop">Shop</span>

              </Link> */}
                <img src={YouCloudlogo} alt="logo" className="youcloudlogo_width mt-2" />

            </div>

            {props.storeName != null ?   <div className="col-lg-2 col-12">
                   <div>
                <small>{props.storeName}</small>
              </div>

            </div> : null}


            <div className="col-md-4 col-lg-6 mx-auto col-sm-12">
              <form onSubmit={() =>  history.push("Search")}>
                <div className="search_form">
                  <input className="search_input" type="text" name="place" placeholder="Dubai, AL Karama" />
                  <button type="submit" className="search"><BiSearch /></button>
                </div>
              </form>
            </div>          

            <div className="col-lg-2 col-md-4 col-sm-12 nav_icon_right d-none d-md-flex">

              <span className="side_icons"> <Link to="/Userprofile"> <img src={Usersmall} className="pr-md-4" style={{ height: 18 }} /></Link></span>
              <span className="side_icons pl-2">  <img src={Heart} className="pr-md-4" style={{ height: 18 }} /></span>
              <span className="side_icons px-2"><Badge count={5} size="large" style={{ fontSize: 10, top: 6, background: "#57bf86" }}> <Link to="/Cart"> <img src={Cartsmall} className="pr-3 " style={{ height: 18 }} /></Link></Badge></span>
            </div>
          </div>


        </div>
        <div className="header3">
          <div className="store_container" style={{ display: "flex" }}>
            {props.hasCategory ? <span className="htabs pr-md-4">  <Category className="support_icons" label={"All Category"} /></span> : null}
            <span className="htabs pr-md-4 py-3"><img src={Healthcare} className="support_icons pr-2" style={{ height: 20 }} />Covid-19 Supplies</span>
            <span className="htabs pr-md-4 py-3"><img src={Layer_8} className="support_icons pr-2" style={{ height: 18 }} />Nearby Shops</span>
            <span className="htabs pr-md-4 py-3"><img src={Help} className="support_icons pr-2" style={{ height: 20 }} />Help</span>
          </div>
        </div>
      </div>


      <div
        className={`default-sidebar${isOpen && isOpen === true ? " sidebar-open" : ""
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

                className={`nav-item ${true
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

                className={`nav-item ${false
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

                className={`nav-item ${false
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

export default Nav1;