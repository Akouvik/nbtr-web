import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation/Navigation.js';
import Footer from './components/Footer/Footer.js';

import Home from './routes/Home/Home.js';
import About from './routes/About/About.js';
import Contact from './routes/Contact/Contact.js';
import Slides from './routes/Slides/Slides.js';
import NP1 from './routes/NP1/NP1.js';
import PhenotypicData from './routes/PhenotypicData/PhenotypicData.js';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/slides" component={Slides}/>
            <Route path="/np1" component={NP1}/>
            <Route path="/phenotypicData" component={PhenotypicData}/>
          </Switch>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;