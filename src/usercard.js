import React, { Component } from 'react';
import logo from './Twitter.png';
import './usercard.css';
//var tweets=;
class Usercard extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div class="usercard" >
        <h1>{this.props.user}</h1>
      </div>
    );
  }
}

export default Usercard;