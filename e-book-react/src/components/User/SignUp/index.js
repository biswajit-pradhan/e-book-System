import { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { addUserSignUp } from "../../../action/User/SignUp";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userSignUp: {
                userName: '',
                emailId:'',
                userrole:'',
                password:'',
            },
            errors: {},
            msg: ''
        };
    }
    componentDidMount(){}
    render(){
        return (
            <div>
            <div id="signup">
                <div className="container">
                    <div id="signup-row" className="row justify-content-center align-items-center">
                        <div id="signup-column" className="col-md-6">
                            <div id="signup-box" className="col-md-12">
                                    <h3 className="text-center text-info">Sign Up</h3>
                                    <section>
                                    <div className="form-group">
                                        <label htmlFor="name" className="text-info">Name:</label><br />
                                        <input type="text" name="userName" id="name" className="form-control" 
                                        value={this.state.userSignUp.userName}
                                        onChange={this.changeHandler} />
                                        <span style={{color:'red'}}>{this.state.errors['userName']}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Email:</label><br />
                                        <input type="text" name="emailId" id="username" className="form-control" 
                                        value={this.state.userSignUp.emailId}
                                        onChange={this.changeHandler}/>
                                        <span style={{color:'red'}}>{this.state.errors['emailId']}</span>
                                    </div>
                                    <label htmlFor="userrole" className="text-info" >Select User Type:</label><br />
                                    <select className="form-control" name="userrole"
                                        value={this.state.userSignUp.userrole}
                                        onChange={this.changeHandler} >
                                        <option key={0} value="">--SELECT USER--</option>
                                        <option key={1} value="READER">READER</option>
                                        <option key={2} value="PUBLISHER">PUBLISHER</option>
                                        <option key={3} value="AUTHOR">AUTHOR</option>
                                    </select>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br />
                                        <input type="text" name="password" id="password" className="form-control"
                                            value={this.state.userSignUp.password}
                                            onChange={this.changeHandler}/>
                                        <span style={{color:'red'}}>{this.state.errors['password']}</span>
                                    </div>
                                    <span style={{color:'green'}}>{this.state.msg}</span> <br />
                                    <div className="form-group">
                                        <br/>
                                        <input className="btn btn-primary btn-lg" type="submit" value="SignUp" onClick={this.onSignUp} />
                                    </div>
                                    </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
    changeHandler= (event) =>{
        this.setState({
            userSignUp: {
                ...this.state.userSignUp, 
                [event.target.name] : event.target.value
            }
        });
    }
    onSignUp = ()=>{
        if(this.handleValidation()){
            this.postUser(this.state.userSignUp);
         }
         else{
             console.log('validation not passed..');     
         }
    }
    handleValidation(){
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const namePattern=/^[a-zA-Z.'\s]{2,25}$/;
        const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        let userName = this.state.userSignUp.userName;
        let emailId = this.state.userSignUp.emailId; 
        let password = this.state.userSignUp.password; 
        let tempErrors={}
        let formValid = true; 
        if(!userName){
            formValid = false;
            tempErrors['userName']='Name cannot be empty';
        }else if(!namePattern.test(userName)){
            formValid = false;
            tempErrors['userName']='Name must be at least 2 and maximum 25 characters';
        }
        if(!emailId){ 
            formValid = false;
            tempErrors['emailId']='Email cannot be empty';
        }else if(!emailPattern.test(emailId)){
            formValid = false;
            tempErrors['emailId']='email not valid';
        }
        if(!password){ 
            formValid = false;
            tempErrors['password']='Password cannot be empty';
        }else if(!passwordPattern.test(password)){ 
            formValid = false;
            tempErrors['password']='Password must contain 8 characters,one upper character and one captital letter';
        }
    
        this.setState({
            errors: tempErrors
        });
        return formValid;
    }
    async postUser(userSignUp){
        try {
            const response = axios.post("http://localhost:8080/api/user/signUp", userSignUp);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: "User Added"
            })
            this.props.addUserSignUp(data);
          } catch (error) {
             console.log(error.response.data.msg)
            this.setState({
                msg: 'Operation Failed'
            })
          }
    }
}
function mapStateToProps(state){
    return {
        signupList : state.userSignUp 
    }    
}

export default connect(mapStateToProps, {addUserSignUp})(SignUp);

