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
      tweets:[/*{user:"Ari",id:"@Aribo",txt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{user:"Richy",id:"@Elpelos",txt:"LMAO"}*/],
      users:[{user:"Richy", id:"@elbuen", img:"./richy.jpg"},{user:"Ariana", id:"@FancyPupper", img:"./ari.jpg"}]
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

  userChange = (event) => {
    let val = event.target.value;
    console.log(val);
    let userArray = this.state.users.filter(user => user.user === val);
    userArray = userArray[0];
    let id = userArray.id;
    let img = userArray.img;
   // alert("Cambio de usuario :c");
    this.setState({
      user: val,
      id: id,
      img: img
    })
  } 

  render() {
    return (
      <div className="Twitter">
        <header className="Twitter-header">
          <img src={logo} className="Twitter-logo" alt="logo" />
          <div className="users">
           <form className="form">
            <select value={this.state.value} onChange={this.userChange}>
              <option value="#">Select a user</option>
              <option value="Richy">Richy</option>
              <option value="Ariana">Ariana</option>
            </select>
          </form>
        </div>
        </header>
          <div className="body">
            <div className="USERCARD">
              <Usercard user={this.state.user} id={this.state.id}>
              </Usercard>
                  <input type="text" name="top" placeholder={this.state.Pplh} value={this.state.value} onChange={this.handleChange1} />
                  <button id="button" type="button" value="Submit" className="btn btn-primary " onClick={this.onTweet}>Submit</button>
            </div> 
            <div id="Tweets">
              <div>
                <Tweet txt={this.state.tweets}></Tweet>
              </div>
              </div>
          </div>
      </div>

    );
  }
}

export default Twitter;