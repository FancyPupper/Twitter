import React, { Component } from 'react';
import './usercard.css';
//var tweets=;
class Usercard extends Component {
  render() {
    return (
      <div className="usercard" >
        <h1>{this.props.user}</h1>
        <div className="img"></div>
        <div className="divtag">
          <h3>{this.props.id}</h3>
        </div>
      </div>

    );
  }
}

export default Usercard;