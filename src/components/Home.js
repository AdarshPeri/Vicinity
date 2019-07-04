import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Headlines from './Headlines';
import SearchBox from './SearchBox';

class Home extends Component {
	constructor(){
		super();
		this.state={
			sources:[],
			searchfield: ''
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
	
	onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

	render(){
		 
		 const {sources, searchfield} = this.state;
		 const filterSources = sources.filter(source =>{
     	 if(!searchfield){
     	 	return source
     	 }
     	 else{
     	 return (
     	 	source.name.toLowerCase().includes(searchfield.toLowerCase()) 
     	 	);
    	}})	

		return(
			<div>
			<div className="flex items-center justify-center pa2 mb1">
			<SearchBox searchChange={this.onSearchChange} keyword='Search for Source'/>	
			</div>	
			  <ul className="list ph3 ph5-ns pv4">
				{	
				filterSources.map((item,i)=> { 
				return (
					<li className="dib mr3" key={i}>
						<Link 
						to={item.id} 
						className="f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib hover-bg-black hover-white near-black" 
						onClick={()=>this.renderHeadlines}>
						{item.name}
						</Link>
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

