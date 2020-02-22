// JavaScript Document
import React from 'react'
import './Nav.css'
import {GoSearch} from 'react-icons/go'
/*import {FaUserCircle} from 'react-icons/fa'*/
import {Row, Col } from 'react-grid-system';

const Nav = () => {
      return (
		  <nav style={styles.container}>
		  	<Row style={styles.row}>
		  <Col md={0} style={styles.row}>
		  </Col>
				<Col md={12} style={styles.col}>
		  		<form style={styles.search}>
		  			<div>
		 				<input placeholder="Search.." style={styles.searchBox}/>
		  				<GoSearch style={styles.goSearch}/>
		  			</div>
		  		</form>
		 		</Col>
			</Row>
		  </nav>
)
}

  export default Nav; 

const styles ={
/*	container:{
		border:'1px solid green',
	},
	row:{
		
		border:'1px solid blue',
	},
	col:{
		width:'100%',
		border:'1px solid red',
	},*/
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