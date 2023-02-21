import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../action/User/LogIn";
import Home from "../../Home";
import "./style.css";

export class Login extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          user:{
              userName: '',
              password: ''
          },
          errors: {},
          msg: '',
          
          redirect: '/',
          isLoggedIn: false
      };
    }
  
    componentDidMount() {}
  
    render() {
       
                   
      return (
         this.state.isLoggedIn?<div ><Home /></div>  : 
        <div id="login">
            <h3 className="text-center text-white pt-5">Login Form</h3>
            <div className="container">
                <div id="login-row" className="row justify-content-center align-items-center">
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                                <h3 className="text-center text-info">Login</h3>
                                 <span style={{ color : 'red'}}>{this.state.msg}</span> <br />
                                <div className="form-group">
                                    <label htmlFor="userNSame" className="text-info">Email:</label><br />
                                    <input className="form-control" placeholder="userName" name="userName" value={this.state.user.userName}  onChange={this.changeHandler} />
                                     <span style={{ color : 'red'}}>{this.state.errors['userName']}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input type="password" className="form-control"placeholder="Password" name="password" value={this.state.user.password} onChange={this.changeHandler}/>
                                    <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
                                </div>
                                <div className="form-group">
                                    <br/>
                                    <button className="btn btn-info btn-md" onClick={this.login}>Login</button>
                                    <span>&nbsp;&nbsp;<a href="/signup" className="text-info">Register Here</a></span>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
  
    changeHandler= (event) =>{
      this.setState({
          user: {
              ...this.state.user, 
              [event.target.name] : event.target.value
          }
      });
      }
  
  
      login = ()=>{
          /* Validate User inputs */
          if(this.handleValidation()){
              
              /* Call the API */
            this.loginUser(this.state.user);
          }
          else{
              /* Display error messages */
              console.log('validation not passed..');
               
          }
          
      }
  
      handleValidation(){
        const userNamePattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          let userName = this.state.user.userName;
          let password = this.state.user.password; 
          let tempErrors={}
          let formValid = true; 
          if(!userName){ //If name is not given
              formValid = false;
              tempErrors['userName']='userName cannot be empty';
          }else if(!userNamePattern.test(userName)){
               formValid = false;
              tempErrors['userName']='UserName not vallid';
          }
          if(!password){ //If password is not given
              formValid = false;
              tempErrors['password']='Password cannot be empty';
          }
  
          this.setState({
              errors: tempErrors
          });
  
          return formValid; 
      }
  
      async loginUser(user){
          let authCode = 'Basic ' + btoa(user.userName + ':' + user.password);
          try {
              const response = axios.get('http://localhost:8080/api/user/login',{
                  headers: {'Authorization': authCode },
              })
              const data = (await response).data;
              
              console.log('login success ' + data);
              localStorage.setItem('userName', data.userName);
              this.setState({
                  isLoggedIn : true
              })
              
             } catch (error) {
              console.error(error);
              this.setState({
                  msg: 'Invalid Credentials'
              })
            }
      }
  }
  
  function mapStateToProps(state){
      return {
            
      }    
    }
    export default connect(mapStateToProps, {login })(Login); 