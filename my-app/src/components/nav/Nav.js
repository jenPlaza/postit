// JavaScript Document
import React, {Component} from 'react'

import {GoSearch} from 'react-icons/go';
import {Row, Col } from 'react-grid-system';

const Nav = () => {
      return (
		  <nav>
		  	<Row>
		  <Col md={0}>
		  </Col>
				<Col md={12}>
		  		<form style={styles.search}>
		  			<div>
		 				<input placeholder="Search.." style={styles.searchBox}/>
		  				<GoSearch/>
		  </div>
		  		</form>
		 		</Col>
			</Row>
		  </nav>
);
}

  export default Nav; 

const styles ={
	search:{
		height:'32px',
		backgroundColor:'rgba(231, 231, 231, 0.5)',
	},
	searchBox:{
		border:'none',
		width:'95%',
		height:'30px',
		backgroundColor:'rgba(231, 231, 231, 0.4)',
	},
}