import React, { Component } from 'react';
import './tweet.css';

class Tweet extends Component {
  render() {
    let tweet=this.props.Tweets.map((Tweet)=>{
      return(
        <div className="card" key={Tweet.id}>
            <div className="top">
              <h3>{Tweet.id}</h3>
              <img className="avatar" src={Tweet.avatar}alt=""/>
              <h1>{Tweet.user_name}</h1>
              <h3>{Tweet.created_at}</h3>
            </div>
            <div className="container">
            <p>{Tweet.description}</p>
          </div>
        </div>)
    })
    return (
      <div>
        {tweet}
      </div>
    );
  }
}

export default Tweet;