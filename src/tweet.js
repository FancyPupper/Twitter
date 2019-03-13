import React, { Component } from 'react';
import logo from './Twitter.png';
import './tweet.css';
//var tweets=;
class Tweet extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    let wa=this.props.txt.map((txtt)=>{
      return(
        <div class ="card" >
            <div class="top">
              <h1>{txtt.user}</h1>
              <h3>{txtt.id}</h3>
            </div>
            <div class ="container">
            <p>{txtt.txt}</p>
          </div>
        </div>)
    })
    return (
      <div >
        {wa}
      </div>
    );
  }
}

export default Tweet;