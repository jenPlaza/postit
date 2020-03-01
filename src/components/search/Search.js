// JavaScript Document
import React, {Component} from 'react'
 
//class Search extends Component{
	//render(){
const Search = props =>{
	return(
		<li key={this.props.id} >
		<span >{this.props.val.postTitle}</span>
		<span >{this.props.val.postDescription}</span>
		</li>
		)
	}

export default Search
