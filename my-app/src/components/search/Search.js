// JavaScript Document
import React, { Component } from 'react'
 
const Search = props =>{
	return(
		<li key={this.props.id}>
		<span>{this.props.val,title}</span>
		<span>{this.props.val,description}</span>
		</li>
	)
}

export default Search

const styles ={
	search:{
		border:'1px solid red',
	}
}