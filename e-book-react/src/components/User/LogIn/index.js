import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../action/User/LogIn";
import Reader from "../../Reader";
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
          redirect: '/employee',
          isLoggedIn: false
      };
    }
  
    componentDidMount() {}
  
    render() {
       
      return (
          this.state.isLoggedIn?<div ><Reader /></div>  : 
        <div>
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                <span style={{ color : 'red'}}>{this.state.msg}</span> <br />
                  <h5 className="card-title">Enter the Credentials</h5>
                  <div className="input-group mb-3 mt-3">
                    <span className="input-group-text" >
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="userName"
                      name="userName"
                      value={this.state.user.userName}
                      onChange={this.changeHandler}
                    />
                    <span style={{ color : 'red'}}>{this.state.errors['userName']}</span>
  
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" >
                      **
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={this.state.user.password}
                      onChange={this.changeHandler}
                    />
                    <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
                  </div>
                  <div className="input-group mb-3">
                    <button className="btn btn-primary" onClick={this.login}>Login</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
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
             return this.loginUser(this.state.user);
          }
          else{
              /* Display error messages */
              console.log('validation not passed..');
               
          }
          
      }
  
      handleValidation(){
          let userName = this.state.user.userName;
          let password = this.state.user.password; 
          let tempErrors={}
          let formValid = true; 
          if(!userName){ //If name is not given
              formValid = false;
              tempErrors['userName']='userName cannot be empty';
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