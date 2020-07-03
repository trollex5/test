import React from 'react';
import '../css/App.css';
import * as Msg from './messagesTxt.js';
import $ from 'jquery';
//import fetch from 'isomorphic-fetch';

export class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { massage: 'Login' , username:'', password:''};

        //this.submitHandler = this.submitHandler.bind(this);
        this.submitHandler2 = this.submitHandler2.bind(this);
    }

    submitHandler = (e) => {
        e.preventDefault();

        //---------------------------------
       /*const url = 'http://localhost:3001/login';  // 'https://jsonplaceholder.typicode.com/users'
       this.myAsyncFunction(url)
       .then(response => console.log("BBB ", response));*/
        //----------------------------------

        //-----------------OK-------------
        const loginData = { user:$('input[name ="username"]').val(),
                            password:$('input[password ="password"]').val() };
        const callback = this.props.onChange;
       // console.log("JJJJJJJJJJ ", loginData);

        $.ajax({
            type: 'POST',
            url: 'http://localhost:3001/login',
            data: loginData,
            success: function(rd) {
                if(rd === "badResponse") {
                    console.log("headerRaitingTable - badResponse from -tgg-bg.com/ratingData");
                } else {
                    const response = rd;
                    console.log("rating response: ", response);
                    if(response.status === 'ok') {
                        callback(response);
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
             }
        });//---------------------------

    }

    myAsyncFunction(url) {
        var data = new FormData();
        data.append('user', 'troll');
        data.append('password', '123');
        return new Promise((resolve, reject) => {
            console.log("AAAAAAAAAAa", data);
            
            const xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send(data);
          
        });

    }

    submitHandler2(e) {
        e.preventDefault();

        

console.log("DDDFDFD ", this.state);

       fetch('http://localhost:3001/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user:'troll', password:'123'
            })
        })
       .then(this.status)
       .then(this.json)
       .then(function(data) {
         console.log('Request succeeded with JSON response', data);
       }).catch(function(error) {
         console.log('Request failed', error);
       });
        
    }

    status(response) {
        console.log("1111111111111", response);
        
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.statusText))
        }
    }
      
    json(response) {
        console.log("22222222222");
        return response.json()
    }
      
      

    userNameCangeHandler = (event) => {
        this.setState({username: event.target.value});
    }

    passwordCangeHandler = (event) => {
        this.setState({password: event.target.value});
    }
    
//action='http://localhost:3001/login' method="post"
    render() {
        return (
            <form id="inputform" onSubmit={this.submitHandler} >
                <div id="msgArea">
                    <h1>{this.state.massage}</h1>
                </div>
                <div className="form-inputs-box">
                    <label>username:</label>
                    <input
                        type='text'
                        name='username'
                        onChange={this.userNameCangeHandler}
                    />
                    <br />
                    <label>password:</label>
                    <input
                        type='password'
                        name='password'
                        onChange={this.passwordCangeHandler}
                    />
                </div>
                <input className="submit-btn" name="login" id="loginBtn" type="submit" value={ Msg.LOGIN } />
                <br />
                <button className="login-btn" name="signup" id="signupBtn" type="button" onClick={this.props.onSwitch}> { Msg.SIGNUP } </button>
            </form>
        )
    };
}