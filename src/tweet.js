import React, { Component } from 'react';
import './tweet.css';
//var tweets=;
class Tweet extends Component {
  render() {
    let wa=this.props.txt.map((txtt)=>{
      return(
        <div className="card" >
            <div className="top">
              <div className="img"></div>
              <h1>{txtt.user}</h1>
              <h3>{txtt.id}</h3>
            </div>
            <div className="container">
            <p>{txtt.txt}</p>
          </div>
        </div>)
    })
    return (
      <div>
        {wa}
      </div>
    );
  }
}

export default Tweet;