import React from 'react'
import "../Styles/leadership.css";
import img from "../Images/logo-4.png";
import { BsHeartFill } from "react-icons/bs";
import Footer from "../components/Footer";

function leadership() {
    return (
      <>
        <div id="innereApp" className="about-inner">
          <header className="about-header">
            <a href="/" className="about-logo">
              <img src={img} className="about-logo-img" alt="housing.com" />
            </a>

            <div className="about-header-div">
              <a href="/favourites-property" className="">
                <div className="about-a">
                  <BsHeartFill />
                  Favourite
                </div>
              </a>
            </div>
          </header>
          <div className="image-background"></div>
          {/*Nav to  redirect different pages */}
          <div className="about-nav">
            <a className="about-company" href="/about">
              Company
            </a>
            <a className="about-culture" href="/culture">
              Culture
            </a>
            <a className="about-leadership" href="/leaderShip">
              LeaderShip
            </a>
            <a className="about-joinus" href="/career">
              Join us
            </a>
          </div>
        </div>
        <Footer/>
      </>
    );
}

export default leadership
