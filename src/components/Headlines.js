import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SearchBox from './SearchBox';


class Headlines extends Component{
	constructor(props){
		super(props);
		this.state={
			articles:[],
			searchfield:''
		}
	}

	componentWillMount(){
		fetch(`https://newsapi.org/v2/top-headlines?sources=${this.props.match.params.id}&apiKey=99707399967a45e89ddde9a6d13f6029`)
		.then(response=> response.json())
		.then(response=> this.setState({articles: response.articles}))
	}

	onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
	
	render(){
		console.log(this.state.articles);
		const {articles, searchfield} = this.state;
		const filterHeadlines = articles.filter(article =>{
     	 if(!searchfield){
     	 	return article
     	 }
     	 else{
     	 return (
     	 	article.description.toLowerCase().includes(searchfield.toLowerCase()) 
     	 	|| article.title.toLowerCase().includes(searchfield.toLowerCase())
     	 	);
    	}})
		return(
			<div>
				<div className="flex items-center justify-end pa2">
					<SearchBox searchChange={this.onSearchChange} keyword='Search by Keyword'/>	
					  <Link to="/" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba br-pill mr2">
					      <svg className="w1" data-icon="chevronLeft" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
					        <title>chevronLeft icon</title>
					        <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
					      </svg>
					    <span className="pl1">Back</span>
					  </Link>
					 </div>
					 
				<section className="mw7 center">
									
					<h2 className="athelas ph2 ph0-l">News</h2>					
					
					{
						filterHeadlines.map((item,i)=>
						{
							return(
							<article key={i} className="pv4 bt bb mb3 b--black-10 ph3 ph0-l br3 pointer grow">
							    <div className="flex flex-column flex-row-ns ma2">
							      <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
							        <h1 className="f3 athelas mt0 lh-title">{item.title}</h1>
							        <p className="f5 f4-l lh-copy athelas">{item.description}</p>
							      </div>
							      <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
							        <img src={item.urlToImage} className="db dim" style={{height:200, width:'auto'}} alt=''/>
							      </div>
							     </div>
							    <time className="f6 db gray">{item.publishedAt.substring(0,10)}</time>	
							 </article>
							)}
							)  						
  					}
  						
				</section>
			</div>

			)
	}
}

export default withRouter(Headlines);