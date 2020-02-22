// JavaScript Document
import React, {Component} from 'react'
 
//const Search = props =>{
class Search extends Component{
	render(){
	return(
		<li key={this.props.id} >
		<span >{this.props.val.postTitle}</span>
		<span >{this.props.val.postDescription}</span>
		</li>
	)
}
}

export default Search