import react, { Component } from 'react';

class Registerpage extends Component {
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

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto pb-5">
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label for="Email">email</label>
                                <input
                                    type="text"
                                    placeholder="email"
                                    name="email"
                                    className="form-control"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    id="email"
                                />
                            </div>

                            <div className="form-group">
                                <label for="password">password</label>
                                <input
                                    type="text"
                                    placeholder="password"
                                    name="password"
                                    className="form-control"
                                    value={this.state.authors}
                                    onChange={this.onChangeAuthor}
                                    id="articleAuthors"
                                />
                            </div>

                            <input data-testid="Register"
                                type="Register"
                                className="btn btn-outline-warning btn-block mt-4 pb-2"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registerpage;