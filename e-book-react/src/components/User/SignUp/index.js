import { Component } from "react";
import "./style.css";
export default class SignUp extends Component{
    render(){
        return (
            <div id="signup">
                <h3 className="text-center text-white pt-5">Sign Up Form</h3>
                <div className="container">
                    <div id="signup-row" className="row justify-content-center align-items-center">
                        <div id="signup-column" className="col-md-6">
                            <div id="signup-box" className="col-md-12">
                                <form id="signup-form" className="form" action="" method="post">
                                    <h3 className="text-center text-info">Sign Up</h3>
                                    <div className="form-group">
                                        <label htmlFor="name" className="text-info">Name:</label><br />
                                        <input type="text" name="name" id="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Email:</label><br />
                                        <input type="text" name="username" id="username" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Select User Type:</label><br />
                                        <select className="form-control" defaultValue={"DEFAULT"}>
                                            <option value="DEFAULT" disabled>SELECT USER</option>
                                            <option value="reader">READER</option>
                                            <option value="publisher">PUBLISHER</option>
                                            <option value="author">AUTHOR</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <br/>
                                        <input type="submit" name="submit" className="btn btn-info btn-md" value="Sign Up" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}