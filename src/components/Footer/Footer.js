import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="container-fluid">
              <ul className="footer-nav">
                  <li className="footer-link pl-5">
                      <NavLink to="#!">Home</NavLink>
                    </li>
                  <li className="footer-link pl-5">
                      <NavLink to="#!">About</NavLink>
                  </li>
                  <li className="footer-link pl-5">
                      <NavLink to="#!">Contact</NavLink>
                  </li>
              </ul>
              <hr className="" />
              <section className="">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <p>
                      Other Affiliate Links
                    </p>
                  </div>
                </div>
              </section>
           
            <div className="text-center" id="footer-copyright">
              © 2021 Copyright:
              <a className="text-white" href="#">siteurl.com</a>
            </div>
        </div>
        );
}

export default Footer;