import React, {  useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
}
const Navigation = () => {
    
    const [isShrunk,setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 200 ||
            document.documentElement.scrollTop > 200)
        ) {
          return true;
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false;
        }

        return isShrunk;
      });
    };

    // Previous logic.
  }, []);

        return (
            <div 
            style={{ top: 0 }} 
            className =
            {isShrunk}
             >
                <Nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
                  <div className="container" >
                      <Navbar.Brand><NavLink to="/" id="msNamelogo">MSNBTR</NavLink></Navbar.Brand>
                      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                          Menu
                          <i className="fas fa-bars"></i>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="nav-list">
                              <li className="nav-item"><NavLink to="/np1">NP1</NavLink></li>
                              <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                              <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                              <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                              <li className="nav-item"><NavLink to="/phenotypicData">PhenotypicData</NavLink></li>
                              <li className="nav-item"><NavLink to="/slides">Microscopic Slides</NavLink></li>
                          </ul>
                      </div>
                  </div>
                </Nav>
            </div>
        );
 
}

export default Navigation;