import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import Navbar from "./Navbar";
import BuildTools from "../BuildTools/BuildTools";
import Footer from "../Footer/Footer";
import Contact from "../User/Contact/Contact";
import About from "../About/About";

import Services from "../User/Services/Services";

const Banner = () => {
  const [filter, setFilter] = useState("");
  return (
    <div>
      <Navbar setFilter={setFilter} />
      {/* {filter && <Services filter={filter} />} */}
      {filter ? <Services filter={filter} /> : null}

      {/* <div className="social-media" data-testid="images">
        <img
          src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d7e0c401a3e668a1d_facebook-logo.svg"
          alt="fb"
        />
        <img
          src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec7175d68c9b0a57ed94925_google-logo.svg"
          alt="google"
        />
        <img
          src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc333df3521cce5b6a_youtube-logo-jobs-webflow-template.svg"
          alt="youtube"
        />
        <img
          src="https://assets.website-files.com/5ec5d86528da2f24250d634c/601e13bc774d5a00bcbb0baf_linkedin-logo-jobs-webflow-template.svg"
          alt="linkedin"
        />
      </div> */}
      {filter ? null : (
        <div>
          <div className="banner-img">
            <div className="banner-title">
              <h3>
                Find <span className="banner-span">Internships</span> in Your
                <br />
                <span className="banner-span"> Favorite Domain!</span>
              </h3>
              <div className="small-tagline">
                <p>
                  Experience the real world. Intern with us and gain invaluable
                  skills.
                </p>
              </div>
            </div>
            <div className="banner-button" data-testid="btn">
              <a href="#services">Browse Interenships</a>
            </div>
          </div>
          <About />
          <Services />
          <Contact />
          <BuildTools />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Banner;
