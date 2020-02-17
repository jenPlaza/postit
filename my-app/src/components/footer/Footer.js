// JavaScript Document
import React from 'react'
import './Footer.css'
import logo2 from '../../images/ptBtn3.png'
import { Row, Col } from 'react-grid-system';

const Footer = () => {
	return(
		
		<footer style={styles.container}>
	  	<Row>
	   		<Col xs={3} style={styles.col}>
	  			<img src={logo2} alt="Logo2 icon" style={styles.logo2}/>
	  		</Col>
	  		<Col md={2} style={styles.col}>
	  			<h2 style={styles.h2}>Help</h2>
				<p><a style={styles.a} href='https://reactjs.org'>Community</a></p>
				<p><a style={styles.a} href='https://reactjs.org'>Resources</a></p>
				<p><a style={styles.a} href='https://reactjs.org'>Contact</a></p>
	  		</Col>
			<Col md={2} style={styles.col}>
	  			<h2 style={styles.h2}>About</h2>
				<p><a style={styles.a} href='https://reactjs.org'>Company</a></p>
				<p><a style={styles.a} href='https://reactjs.org'>Blog</a></p>
				<p><a style={styles.a} href='https://reactjs.org'>Newsletter</a></p>
	  		</Col>
			<Col md={2} style={styles.col}>
	  			<h2 style={styles.h2}>Terms & Policies</h2>
				<p><a style={styles.a} href='https://reactjs.org'>Policies</a></p>
				<p><a style={styles.a} href='https://reactjs.org'>Terms of Use</a></p>
				<p><a style={styles.a} href='https://reactjs.org'>Code of Contact</a></p>
	  		</Col>
	  	</Row>
		</footer>
	)
}
export default Footer

const styles ={
		container:{
		backgroundColor:'white',
		padding:'5%',
		width:'100%',
		height:'auto',
		
	},
	col:{
		height:'auto',
		color:'grey',
	},
	h2:{
		fontsize:'1.25em',
	},
	logo2:{
		width:'17%',
		float:'right',
		marginRight:'2%',
	},
	a:{
		color:'grey',
	},
}