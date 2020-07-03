import React from 'react';
import '../css/App.css';
import $ from 'jquery';
import * as Msg from './messagesTxt.js';

export class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };

        //this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = (e) => {
        e.preventDefault();

        //-----------------OK-------------
        const loginData = { user:$('input[name ="username"]').val(),
                            email:$('input[name ="email"]').val(),
                            firstname:$('input[name ="firstname"]').val(),
                            lastname:$('input[name ="lastname"]').val(),
                            password:$('input[name ="password"]').val(),
                            confirmpassword:$('input[name ="confirmpassword"]').val() };
        const that = this;

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
                        that.props.onChange(response);
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
             }
        });//---------------------------
    }

    inputCangeHandler = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div id="msgArea">
                    <h1>{Msg.SIGNUP}</h1>
                </div>
                <div className="form-inputs-box">
                    <label>username:</label>
                    <input
                        type='text'
                        name='username'
                        onChange={this.inputCangeHandler}
                    />
                    <br />
                    <label>email:</label>
                    <input
                        type='email'
                        name='email'
                        onChange={this.emailHandler}
                    />
                    <br />
                    <label>firstname:</label>
                    <input
                        type='text'
                        name='firstname'
                        onChange={this.firstnameHandler}
                    />
                    <br />
                    <label>lasename:</label>
                    <input
                        type='text'
                        name='lastname'
                        onChange={this.lastnameHandler}
                    />
                    <br />
                    <label>password:</label>
                    <input
                        type='password'
                        name='password'
                    />
                    <br />
                    <label>confirm password:</label>
                    <input
                        type='password'
                        name='confirmpassword'
                    />
                </div>
                <input className="submit-btn" name="signup" id="signupBtn" type="submit" value={Msg.SIGNUP} />
            </form>
        )
    };
}