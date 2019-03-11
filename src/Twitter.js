import React, { Component } from 'react';
//import './Twitter.css';

class Twitter extends React.Component {
	constructor(props){
		super(props);
		this.state={
			user:'Default',
			time:'1/1/2019'
		}
	 	this.handleChange1 = this.handleChange1.bind(this);
	 	this.handleChange2 = this.handleChange2.bind(this);
	 	this.reset=this.reset.bind(this);
	}
	handleChange1(event){
		this.setState({top:event.target.value})
	}
	handleChange2(event){
		this.setState({bot:event.target.value})
	}
	reset(event){
		this.setState({top:'Back at it again',bot:'Retry'})
	}
	render(){
		return(
			<div classname='Twitter'>
				<form>
					<input type="text" name="top" value={this.state.top} onChange={this.handleChange1}/>
					<input type="text" name="bot" value={this.state.bot} onChange={this.handleChange2}/>
					<button type="button" name="reset" onClick={this.reset}>Reset </button>
				</form>
				<div class="background">
					<div>
						<h3>{this.state.top}</h3>
					</div>
					<div class="center">
					</div>
					<div>
						<h3>{this.state.bot}</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default Twitter;