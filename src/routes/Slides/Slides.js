import React from 'react';
import SlideFormsandInputs from './SlideFormsandInputs'

const slides = () => {
    return(
        <div>
            <header className="masthead">
                <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="page-heading">
                                    <h3>Microscopic Slides Access</h3>
                                    <span className="subheading headingsub">Subject Number Age Sex Race Brain Region and Stain are available for querrying
                                    </span>
                                </div>
                            </div>
                    </div>
                </div>
            </header>
             <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 mx-auto">
                        <blockquote>
                         The metadata that accompanying the slides correspond to a random anonymized identifier, donor age, donor sex, donor race, brain region, and stain. This information is intended for studies of the images that are independent of the phenotypic characteristics of the donors. 
                        </blockquote>
                    </div>
                </div>
                <SlideFormsandInputs />
            </div>
         
        </div>
        )
}


export default slides;