import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from './components/navbar.component'
import Contactus from './components/contactus.component'
import Aboutus from './components/about.component'

function App() {
  return (
    <Router>
        <Navbar />
        <Route path="/contactus" exact component={Contactus} />
        <Route path="/aboutus" exact component={Aboutus} />
    </Router>
  );
}

export default App;
