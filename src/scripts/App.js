 import React from 'react';
 //import logo from '../logo.svg';
 import '../css/App.css';
 import { BoxController } from './boxController.js';
 import * as Msg from './messagesTxt.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isBoxController:true, isMsgScreen:false, firstName:'h', lastName:'y'};
  
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(data) {
    const fn = data.firstName;
    const ln = data.lastName;
    //console.log("FFFFFFFFFFFFF ", data);
    
    this.setState({firstName:fn, lastName:ln, isMsgScreen:true, isBoxController:false});
  }

  render() {

    return (
      <article id="formWrapper">
        {this.state.isBoxController && <BoxController onClockLogin={this.loginHandler}/>}
        {this.state.isMsgScreen && <MessageScreen welcome={Msg.GREETING} 
                                                  userFirstName={this.state.firstName} 
                                                  userLastName={this.state.lastName} />}
      </article>
    );

  }
}

export default App;


export function MessageScreen(props) {
  return (
  <h1>{props.welcome + ' '} {props.userFirstName+' '}{props.userLastName}</h1>
  )
}

