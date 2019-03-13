import React, { Component } from 'react';
import logo from './Twitter.png';
import './Twitter.css';
import Tweet from './tweet';
import Usercard from './usercard';

class Twitter extends Component {
  constructor(props){
    super(props);
    this.state={
      user:"Richy",
      id:"@Elpelos",
      Pplh:"tweet here",
      value:"",
      tweets:[{user:"Ari",id:"@Aribo",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{user:"Richy",id:"@Elpelos",txt:"LMAO"}]
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.onTweet = this.onTweet.bind(this);
  }
  handleChange1(event){
    this.setState({value:event.target.value})
  }
  onTweet(event){
    //alert("WAAAAA");
    let auxUser=this.state.user;
    let auxid=this.state.id;
    let auxvalue=this.state.value;
    let tweets=this.state.tweets;
    tweets.push({user:auxUser, id:auxid,txt:auxvalue});
    this.setState({tweets});
  }
  render() {
    return (
      <div className="Twitter">
        <header className="Twitter-header">
          <img src={logo} className="Twitter-logo" alt="logo" />
        </header>
          <div class="body">
            <div class="USERCARD">
              <Usercard user={this.state.user}>
              </Usercard>
                  <input type="text" name="top" placeholder={this.state.Pplh} value={this.state.value} onChange={this.handleChange1} />
                   <button id="button" type="button" value="Submit" class="btn btn-primary " onClick={this.onTweet}>Submit</button>
            </div> 
            <div id="Tweets">
              <Tweet txt={this.state.tweets}></Tweet>
            </div>
          </div>
      </div>

    );
  }
}

export default Twitter;