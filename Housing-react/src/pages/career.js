import React from 'react'
import "../Styles/career.css";
import img from "../Images/logo-4.png";
import { BsHeartFill } from "react-icons/bs";
import banner from '../Images/careerPoster.jpg'
import banner1 from '../Images/careerimg2.jpg'
import Footer from "../components/Footer";


function career() {
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
          <div className="image-background-career"></div>
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

          <div className="career-img-div">
            <img src={banner} className="career-img" alt="img" />
            <div className="career-heading text-center mt-5">You @ Housing</div>
            <div>
              We are not looking for another brick in the wall. If you have what
              it takes and can give us compelling reasons that make you stand
              out from the rest (for all the right reasons, of course!), then
              we’d like to hear from you
            </div>
          </div>
          <img src={banner1} alt="img-2" className="carrer-img-2"/>

        </div>
        <Footer/>
      </>
    );
}

export default career
