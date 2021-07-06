import React from 'react';
import { Jumbotron,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return(
        <div id="home">
           <header className="masthead">
                  <div className="overlay"></div>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 col-md-10 mx-auto">
                              <div className="site-heading">
                                  <h3>Mount Sinai Neuropathology Open Data Store</h3>
                                  <span className="subheading headingsub">A High resolution Digital Neuropathology of the Human Brain </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </header>
           
           <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 mx-auto">
                    <div className="post-preview">
                            <h2 className="post-title">The Icahn School of Medicine at Mount Sinai Brain and Tissue Repository (MS-NBTR)</h2>
                            <h4>has been in operation since 1982  </h4>
                            <blockquote>
                              Our mission is to promote understanding of the human brain in health and disease and the brain features that govern behavior and cognition through detailed and direct study. The MS-NBTR banks and distributes brain and related tissue specimens to research laboratories throughout the world, including laboratories at Mount Sinai, for expert study and the advancement of knowledge.
                            </blockquote>
                            <p>To promote this mission further, we aim to provide to the neuroscience community at large high-resolution microscopic images of some of the slides that have been used for neuropathological characterization and diagnosis of the banked brains.</p>
                            <p>We are eternally grateful for and in awe of the generosity and altruism demonstrated by our donors and their families. Making these tens of thousands of images freely available to the scientific community is but one way of expressing our gratitude and the hope that scientific studies of these images will enhance the value of each donation even further. The work performed by the MS-NBTR has been supported by grants from the National Institutes of Health, the Veterans Administration and the Leir Charitable Foundation.</p>
                            <a href="https://neurobiobank.nih.gov" target="_blank">Fixed and frozen tissue specimens for the banked cases are available through the NIH funded and managed Neurobiobank portal..</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 mx-auto mb-5 pb-5">
          <h2>
            Significant quantities of additional phenotypic (behavioral, medical, and neuropathological) data are available for most donors.
          </h2>
          <blockquote>
            The types of available granular data are listed in the table below. These data will be made available to users upon request. Users should <a href="/contact">contact us</a> to discuss the individual project/study aims; inclusion/exclusion criteria; the sample sizes available; the sample sizes needed; and the phenotypic information that should be associated with each slide. We will then construct a data set and slide deck that meets the requirements and make the slides and associated data available.
          </blockquote>
          </div>
            <div className="col-md">
            <NavLink to="/slides">
                <h2 className="link-header">Slides <i class="fas fa-microscope"></i></h2>
                <p className="redirect-text">
                Click here to view all avaialable slides with basic metadata including brain region, stain, and limited demograpic data (age, race, sex, predominant brain-related diagnosis).
                </p>
             </NavLink>
            </div>
            <div className="col-md">
            <NavLink to="/PhenotypicData">
                <h2 className="link-header">Neuropathology and Clinical Data<i class="fas fa-brain"></i></h2>
                <p className="redirect-text">
                 We have many additional data available (over 2000 data points)! These data include things like full diagnostic and medication history, CERAD and CDR results, extended demographic info, etc. Please click here for a brief overview of these additional data.
                </p>
            </NavLink>
            </div>
          </div>
        </div>
        </div>
        );
}

export default Home;