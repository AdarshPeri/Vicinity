import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Headlines from './Headlines';

class Home extends Component {
	constructor(){
		super();
		
		this.state={
			sources:[]
		}
	}
	componentWillMount(){
		fetch("https://newsapi.org/v2/sources?apiKey=99707399967a45e89ddde9a6d13f6029")
		.then(response => response.json())
		.then(response=> this.setState({sources: response.sources}));
	}

	renderHeadlines=()=>{
		return <Headlines />
	}
	

	render(){
		
		return(
			<div>
			  <ul className="list ph3 ph5-ns pv4">
				{	
				this.state.sources.map((item,i)=> { 
				return (
					<li className="dib mr3" key={i}>
						<Link to={item.id} className="f6 f5-ns b db pa2 link dim black" onClick={()=>this.renderHeadlines}>{item.name}</Link>
					</li>
					)}
					)
				}
			</ul>	
			
			</div>
			)
	}
}

export default Home;

