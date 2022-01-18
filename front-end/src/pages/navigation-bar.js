import { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component
{
    render()
    {
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                        <NavLink to = "/home-page">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to = "/register-page">Register</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;