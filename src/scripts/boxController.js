import React from 'react';
 //import logo from '../logo.svg';
 import '../css/App.css';
 import { LoginForm } from './loginForm';
 import { SignupForm } from './signupForm';


 export class BoxController extends React.Component {
     
    constructor(props) {
        super(props);

        this.state = { isLogin:true, isUserLoged:false, isSignup:false};

        /*this.loginHandler = this.loginHandler.bind(this);
        this.singinHandler = this.singinHandler.bind(this);*/
        this.loginFormHandler = this.loginFormHandler.bind(this);
    }

    /*loginHandler() {
        this.setState({isLogin:true, isSignup:false});
    }
      
    singinHandler() {
        this.setState({isLogin:false, isSignup:true});
    }*/

    loginFormHandler(res) {
        //console.log("boxController/ login-Callback ", res);
        
        this.setState({ isLogin:false, isUserLoged:true, isSignup:false});
        this.props.onClockLogin({firstName:res.firstName, lastName:res.lastName});
    }

    switchHandler = (e) => {
        this.setState({isLogin:false, isSignup:true});
    }


    render() {
        return (
            <div id="formBox">
                {/*<div className="form-controller-container">
                    <button id="login" className="form-controller-btn" onClick={this.loginHandler}>Login</button>
                    <button id="signup" className="form-controller-btn" onClick={this.singinHandler}>Signup</button>
                </div>*/}
                { this.state.isLogin && <LoginForm onChange={this.loginFormHandler} onSwitch={this.switchHandler} />}
                { this.state.isSignup && <SignupForm />}
            </div>
        );
    }
}
