import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import Home from "../../routes/Home/Home.js";
import NP1 from "../../routes/NP1/NP1.js";
import About from "../../routes/About/About.js";
import Contact from "../../routes/Contact/Contact.js";
import PhenotypicData from "../../routes/PhenotypicData/PhenotypicData.js";
import Slides from "../../routes/Slides/Slides.js";


class Navigation extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            isTop: true,
        };
    
    }
    
    componentDidMount(){
        document.addEventListener("scroll", this.handleScroll);
        
    }
        
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
    }
    
       handleScroll = () => {
          const isTop = window.scrollY < 200;
            if (isTop !== this.state.isTop){
                this.setState({ isTop });
                }
            }

    render(){
        return (
            <div style={{ top: 0 }}  className={this.state.isTop ? 'sticky-top' : 'sticky-top scrolling'} >
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
                              <li className="nav-item"><NavLink to="/about">About</NavLink></li>
                              <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
                              <li className="nav-item"><NavLink to="/">Home</NavLink></li>
                              <li className="nav-item"><NavLink to="/phenotypicData">PhenotypicData</NavLink></li>
                              <li className="nav-item"><NavLink to="/slides">Microscopic Slides</NavLink></li>
                          </ul>
                      </div>
                  </div>
                </Nav>
            </div>
        );
    }
 
}

export default Navigation;