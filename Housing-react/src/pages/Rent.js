import React from 'react'
import Navbar1 from "../components/Navbar";
import SearchNavbar from "../components/SearchNavbar";
import payrent from "../Images/card-images/payRent.svg";
import rentAgreement from "../Images/card-images/rentAgreement.svg";
import movers from "../Images/card-images/movers.svg";
import furniture from "../Images/card-images/furniture.svg";
import property from "../Images/card-images/propertyManagement.svg";
import topProject from "../Images/topproject.png";
import Footer from "../components/Footer";

function Rent() {
    
       const city = "Ahmedabad";
    return (
      <>
        <section>
          <Navbar1></Navbar1>
        </section>
        <section id="#main">
          <div className="background-image">
            <div className="banner-Image-rent ">
              <h2 className="text-center text-white">
                Properties To rent in {city}
              </h2>/

              <div>
                <h3 className="text-center text-white h2Inheading">
                  Yahan search khatam karo
                </h3>
              </div>
              <SearchNavbar classNname="mb-5" />
            </div>    
          </div>
        </section>
        
        {/* Edge Section */}
        <div id="edghook" className="bg-light">
          <section className="edge-section">
            <div></div>
            <header className="edge-header">
              <div>
                <h1 className="edge-heading mb-3">Housing Edge</h1>
                <span></span>
                <div className="edge-pera">
                  <p className="edge-pera1 mb-4">
                    The most rewarding destination for all home-related
                    <a href="/edge" className="text-info">
                      <span> Explore All</span>
                    </a>
                  </p>
                </div>
              </div>

              <div></div>
            </header>

            
            <div className="edge-div ">
              <div className="css-card-div slider-inner ">
                <div className="">
                  <div className="css-slide-element css-slide-element1 border border-success">
                    <div className="css-card-body ml-3">
                      <a href="/edge/rent-agreement">
                        <div className="css-card-body-inside ml-1">
                          <img
                            src={rentAgreement}
                            className="img-css mt-1"
                            alt="img"
                          ></img>
                        </div>
                        <div>
                          <div className="css-text mr-3 text-success">
                            Rent Agreement
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="css-slide-element css-slide-element1 ">
                    <div className="css-card-body ml-5 border border-info">
                      <a href="/edge/pay-rent">
                        <div className="css-card-body-inside ml-3">
                          <img
                            src={payrent}
                            className="img-css mt-1"
                            alt="img"
                          ></img>
                        </div>
                        <div>
                          <div className="css-text ml-3">Pay Rent</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="css-slide-element css-slide-element1 ml-5">
                    <div className="css-card-body ml-5 border border-danger">
                      <a href="/edge/packers-and-movers">
                        <div className="css-card-body-inside ml-3 mt-1">
                          <img src={movers} className="img-css" alt="img"></img>
                        </div>
                        <div>
                          <div className="css-text ml-3 text-danger">
                            Packers And Movers
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="css-slide-element css-slide-element1 ml-5">
                    <div className="css-card-body ml-5 border border-success  ">
                      <a href="/edge/rental-furniture">
                        <div className="css-card-body-inside ml-3 mt-1">
                          <img
                            src={furniture}
                            className="img-css"
                            alt="img"
                          ></img>
                        </div>
                        <div>
                          <div className="css-text ml-3 text-success">
                            Rental Furniture
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="css-slide-element css-slide-element1 ml-5">
                    <div className="css-card-body ml-5 border border-info">
                      <a href="/edge/property-management">
                        <div className="css-card-body-inside ml-3 mt-1">
                          <img
                            src={property}
                            className="img-css"
                            alt="img"
                          ></img>
                        </div>
                        <div>
                          <div className="css-text ml-1 text-info">
                            Property Management
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* <div className="css-slide-element inacticve-slide runCss ml-5">
                  <div className="css-card-body ml-5 border border-info">
                    <a href="/payrent">
                      <div className="css-card-body-inside ml-3 mt-1">
                        <img
                          src={furniture}
                          className="img-css"
                          alt="img"
                        ></img>
                      </div>
                      <div>
                        <div className="css-text ml-3">Furniture</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="css-slide-element inacticve-slide runCss"></div>
                <div className="css-slide-element inacticve-slide runCss"></div>
                <div className="css-slide-element inacticve-slide runCss"></div>
                <div className="css-slide-element inacticve-slide runCss"></div> */}
                </div>
              </div>
              <div className="css-card-div2"></div>
            </div>
          </section>
        </div>

        {/* Spotlight section */}
        <div id="spotlightDevloper" className="topProject-div">
          <section>
            <header className="header">
              <h1 className="mb-3 text-dark spotligt-title ">
                In <span>Spotlight</span>
              </h1>
              <div className="spotlight-subtitle mb-3">
                {" "}
                Find your best place to live with us
              </div>
            </header>

            <div className="spotlight-background-image ">
              <a
                href="/artsland-projects"
                className="text-light bold bg-dark  ml-5"
              >
                View Project Details
              </a>
            </div>
          </section>
        </div>

        {/* Top projects */}
        <div id="topProjects" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title mb-3">
                Top
                <span> Projects</span>
              </h3>
              <div className="sub-title mb-4">Best developers in ahmedabad</div>
            </header>
            <div>
              <div className="card ">
                <div className="card-header bg-info text-dark">
                  <h3 className="text-light">Ahmedabad's Best Project</h3>
                </div>
                <img
                  className="card-img-top"
                  src={topProject}
                  alt="Top PRjects"
                />
                <div className="card-body">
                  <h5 className="card-title">Laxmi Developers</h5>
                  <p className="card-text">
                    The project is equipped with all the basic facilities
                    essential to meet daily requirements of the modern urban
                    lifestyle of its residents, including Power Backup, Cycling
                    & Strolling Track, Gymnasium, Badminton Court, and Swimming
                    Pool.
                  </p>
                  <a href="/buy/top-project" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div id="featuredDevelopers" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                Featured
                <span className="bold"> Developers</span>
              </h3>
              <div className="sub-title">
                Prominant Developers in Ahmedabad{" "}
              </div>
            </header>
          </section>
        </div>

        <div id="featuredProjects" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                Featured
                <span className="bold"> Projects</span>
              </h3>
              <div className="sub-title">
                Exclusive showcase of top projects
              </div>
            </header>
          </section>
        </div>

        <div id="newsAndArticles" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                Trending
                <span className="bold"> Projects</span>
              </h3>
              <div className="sub-title">
                Most sought-after projects in Ahmedabad
              </div>
            </header>
          </section>
        </div>

        <div id="housingExperts" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                Housing
                <span className="bold"> Experts</span>
              </h3>
              <div className="sub-title">
                {" "}
                Sellers with complete knowledge about locality and verified
                listings
              </div>
            </header>
          </section>
        </div>

        <div
          id="topLocalities
"
          className="topProject-div"
        >
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                Top
                <span className="bold"> Localities</span>
              </h3>
              <div className="sub-title">
                Check out the top Localities in Ahmedabad PO
              </div>
            </header>
          </section>
        </div>

        <div id="newsAndArticles" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                News
                <span className="bold"> Articles</span>
              </h3>
              <div className="sub-title">
                Read what's happening in Real Estate
              </div>
            </header>
          </section>
        </div>

        <div id="newsAndArticles" className="topProject-div">
          <section>
            <header className="header">
              <h3 className="spotligt-title">
                News
                <span className="bold"> Articles</span>
              </h3>
              <div className="sub-title">
                Read what's happening in Real Estate
              </div>
            </header>
          </section>
        </div>

        <div id="topLinks" className="topProject-div">
          <section>
            <header className="header">
              <h2 className="spotligt-title">
                Browse top links to search your home
              </h2>
            </header>
          </section>
        </div>

        <div id="footer" className="topProject-div bg-light">
          <section>
            <header className="header">
              <h2 className="spotligt-title text-warning">
                This is a footer section
              </h2>
            </header>
          </section>
        </div>
        <Footer/>
      </>
    );
}

export default Rent
