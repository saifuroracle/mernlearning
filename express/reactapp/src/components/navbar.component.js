import React, {Component} from "react";
import {Link} from "react-router-dom"


export default class Navbar extends Component{
    render(h) {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Navbar</Link>
                
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboutus">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};
