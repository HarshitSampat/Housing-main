import React from 'react'
import  '../Styles/about.css'
import img from '../Images/logo-4.png'
import { BsHeartFill } from "react-icons/bs";
import Footer from "../components/Footer";
// import profile from "../Images/profile-about.jpg";

function about() {
  // const [] = useState()
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
          <div className="image-background-about"></div>
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

          <div className="abot-div">
            <div className="about-div1">
              <div className="about-heading">Welcome to Housing</div>
              <div className="about-pera">
                We are the fastest growing company in the online real estate
                space. Born out of the need to simplify the search for a home,
                free of fake listings and endless site visits, we created a
                unique property search platform that filled the gaps left by
                others in the market. Led by passionate problem-solvers, and
                backed by top investors from around the world, we are poised to
                become the most trusted place to find a home in India.
              </div>
            </div>

            <div className="about-div1">
              <div className="about-heading"> </div>
              <div className="about-pera"></div>
            </div>

            <div className="about-div1">
              <div className="about-heading">Our Vision</div>
              <div className="about-pera">
                Delivering trustworthy experiences that you cherish for a
                lifetime.
              </div>
            </div>

            <div className="about-div1">
              <div className="about-heading">Our Mission</div>
              <div className="about-pera">
                To be the first choice for our consumers and partners in their
                journey of discovering, renting, buying, selling and financing a
                home. We do that with data, design, technology, and above all
                the passion of our people, while delivering value to our
                shareholders.
              </div>
            </div>

            <div className="about-div1">
              <div className="about-heading">
                Yahan Search Khatam Karo: Our New TV Ad
              </div>
              <div className="about-pera">
                Buying, Selling, Renting, or moving into a house can be a trial
                by fire, especially in India where we often take the hassles
                involved in the process as an integral part of the home purchase
                process. Our new idea for Housing.com questions that behaviour,
                and motivates them to switch to a hassle-free experience.
              </div>
            </div>
            <video
              playsInline
              controls
              preload="none"
              poster="//c.housingcdn.com/supply/s/common/assets/youtubeThumbnail.9a2cb017.jpg"
              className="about-video"
            >
              <source src="//c.housingcdn.com/supply/s/common/assets/housing-ad-2021.9059b5a0.mp4" />
            </video>
\
          </div>
        </div>
        <Footer/>
      </>
    );
}

export default about
