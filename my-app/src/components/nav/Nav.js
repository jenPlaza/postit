// JavaScript Document
import React from 'react'
import './Nav.css'
import {GoSearch} from 'react-icons/go'
import {FaUserCircle} from 'react-icons/fa'
import {Row, Col } from 'react-grid-system';

const Nav = () => {
      return (
		  <nav style={styles.container}>
		  	<Row>
				<Col md={9} style={styles.col}>
		  		<form style={styles.search}>
		  			<div>
		 				<input placeholder="Search.." style={styles.searchBox}/>
		  				<GoSearch style={styles.goSearch}/>
		  			</div>
		  		</form>
		 		</Col>
		  		<Col md={3} style={styles.col}>
		  		<div style={styles.avatar}>
		 
		  <FaUserCircle style={styles.faUserCircle} size={38}/>
		  				
		 
		  
		  			<p style={styles.p}>Log In</p>	
		  
		  
		  		</div>
		 		</Col>
			</Row>
		  </nav>
)
}

  export default Nav; 

const styles ={
	container:{
		height:'auto',
	},
	search:{
		border:'1px solid black',
		height:'32px',
		backgroundColor:'rgba(231, 231, 231, 0.4)',
	},
	searchBox:{
		border:'none',
		width:'95%',
		height:'30px',
		backgroundColor:'rgba(231, 231, 231, 0.4)',
	},
	avatar:{
		/*border:'1px solid green',*/
		float:'right',
		width:'100%',
		display:'flex',
		justifyContent: 'center',
	},
	p:{
		/*border:'1px solid lime',*/
		marginTop:'5px',
		marginLeft:'3%',
		fontSize:'1.3em',
	},
	
}