import React, {Component} from "react";
import {Link} from "react-router-dom"


export default class Navbar extends Component{
    render(h) {
        return(
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contactus" >Contact Us</Link>
            </nav>
        )
    }
};
