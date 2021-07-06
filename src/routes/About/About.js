import React from 'react';


const About = () => {
    return(
        <div>
          <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 mx-auto">
                        <div class="page-heading">
                            <h3>About Our Data data</h3>
                            <span class="subheading headingsub">The image files provided are part of a continuing effort.</span>
                        </div>
                    </div>
                </div>
                </div>
            </header>
          
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 mx-auto">
                        <h2>
                            The microscopic image files were derived from multiple different brain regions,
                        </h2>
                        
                        <blockquote>
                            sectioned at 6–8-micron thickness and stained with multiple histochemical and immunohistochemical stains. Each stained slide was then scanned at 20x on a 3DHISTECH Pannoramic Flash III system.
                            The image files provided are part of a continuing effort. The archive will be periodically updated as more slides are scanned and as more postmortem donations are received by the MS-NBTR. 
                        </blockquote>
                        <p>
                            The slide images are high resolution digital neuropathology files of multiple brain regions (e.g., middle frontal gyrus, cingulate gyrus, superior temporal gyrus, hippocampus, amygdala, basal ganglia, thalamus, etc.) and multiple histochemical and immunohistochemical stains (e.g., H&E, modified Bielschowsky, amyloid beta, phosphorylated tau, alpha synuclein, TDP-43) per brain region of persons with no evident brain-related disorders, or brain disorders ranging from psychiatric conditions such as schizophrenia and major depression to Alzheimer's disease, Parkinson's disease, Lewy body disease and cerebrovascular disease.
                            <span className="aboutpage-approval">Note that not all stains and all brain regions are represented in the current archive, but additional slides and stains, brain regions and donors will be added to the archive periodically.</span>
                        </p>
                        <p>
                            Some digital neuropathology slides are from donors who died by suicide. The collection includes digital neuropathology slides from persons spanning the entire human lifespan, but it is concentrated on donors who died between the ages of 65-90 years.
                        </p>
                        <p className="about-lastparagraph">
                            The digital neuropathology slides can be <span className="aboutpage-approval">(upon request and IRB approval) </span>associated with a rich and large phenotypic dataset that include systemic and brain-related medical diagnoses during life (coded as ICD-10 codes), cognitive status during the peri-agonal stages of life, research-level assessment of meeting or failing to meet objective published criteria for clinical neurological and neuropsychiatric conditions, and objective criterion-based neuropathology diagnoses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
}


export default About;