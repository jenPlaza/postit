// JavaScript Document
import React from 'react'
import './Footer.css'
import logo2 from '../../images/postIt2.png'
import { Container, Row, Col } from 'react-grid-system';

const Footer = () => {
	return(
		
		<footer style={styles.container}>
	  	<Row>
	   		<Col xs={3} style={styles.col}>
	  			<img src={logo2} alt="Logo2 icon" style={styles.logo2}/>
	  		</Col>
	  		<Col md={2} style={styles.col}>
	  			<h2 style={styles.h2}>Help</h2>
				<p><a style={styles.a} href='#'>Community</a></p>
				<p><a style={styles.a} href='#'>Resources</a></p>
				<p><a style={styles.a} href='#'>Contact</a></p>
	  		</Col>
			<Col md={2} style={styles.col}>
	  			<h2 style={styles.h2}>About</h2>
				<p><a style={styles.a} href='#'>Company</a></p>
				<p><a style={styles.a} href='#'>Blog</a></p>
				<p><a style={styles.a} href='#'>Newsletter</a></p>
	  		</Col>
			<Col md={2} style={styles.col}>
	  			<h2 style={styles.h2}>Terms & Policies</h2>
				<p><a style={styles.a} href='#'>Policies</a></p>
				<p><a style={styles.a} href='#'>Terms of Use</a></p>
				<p><a style={styles.a} href='#'>Code of Contact</a></p>
	  		</Col>
	  	</Row>
		</footer>
	)
}
export default Footer

const styles ={
		container:{
		border:'1px solid green',
		width:'100%',
		height:'auto',
	},
	col:{
		border:'1px solid black',
		height:'auto',
		color:'grey',
	},
	h2:{
		fontsize:'1.25em',
	},
	logo2:{
		width:'20%',
		float:'right',
		marginRight:'5%',
	},
	a:{
		color:'grey',
	},
}