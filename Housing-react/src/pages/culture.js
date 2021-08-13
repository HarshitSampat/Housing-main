import React from "react";
import "../Styles/culture.css";
import img from "../Images/logo-4.png";
import { BsHeartFill } from "react-icons/bs";
import Footer from "../components/Footer";

function Culture() {

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
        <div className="image-background-culture"></div>
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

        <div className="about-heading text-center mt-5">Values @ Housing</div>
        <div className="about-pera">
          As Housing leapfrogs into the future, we make the most of our present.
          We are a group of ambitious and fun-loving people, many of whom have
          come from across the globe and made it to the Housing family. The only
          thing that matches the enthusiasm of our employees is the audacity of
          what we do. While we don’t sweat the small stuff, we don’t compromise
          on quality either. Check out what drives us.
        </div>

        <div>
          <article className="culture-article container" >
            <div className=""></div>
            <div className=""></div>
          </article>
          <article className="culture-article container" >
            <div className=""></div>
            <div className=""></div>
          </article>
          <article className="culture-article container" >
            <div className=""></div>
            <div className=""></div>
          </article>
          <article className="culture-article container" >
            <div className=""></div>
            <div className=""></div>
          </article>
          <article className="culture-article container" >
            <div className=""></div>
            <div className=""></div>
          </article>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Culture;
