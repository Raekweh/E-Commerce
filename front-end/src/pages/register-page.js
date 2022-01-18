import { Component } from "react";

import Registerform from "../components/register-form";

class Registerpage extends Component{
    render() {
        return(
            <div className = "container pt-3 border border-dark border-top-0 rounded-bottom bg-light">
                <h1>Register account</h1>
                <Registerform/>
            </div>
        );
    }
}

export default Registerpage;