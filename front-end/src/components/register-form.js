import React, { Component } from "react";

class Registerform extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = 
        {
            email:'',
            password:'',
        }
    }

    onChangeEmail(e){
      this.setState({
        email: e.target.value
      });
    }

    onChangePassword(e){
      this.setState({
        password: e.target.value
      });
    }

    //Need a On button here

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto pb-5">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="Email">Email</label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    name="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeEmail}
                                    id="registerEmail"
                                />
                            </div>

                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    id="registerPassword"
                                />
                            </div>

                            <input data-testid="Register"
                                type="submit"
                                className="btn btn-outline-warning btn-block mt-4 pb-2"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registerform;