// JavaScript Document
import React from 'react';
import { Row, Col } from 'react-grid-system';

//images
import logo2 from '../../images/ptBtn3.png';
import {MdCopyright} from 'react-icons/md';

//React Router
import {NavLink} from 'react-router-dom';

import FaHome from 'react-icons/lib/ti/home-outline';
import AddLoc from 'react-icons/lib/md/add-location';
import MyFerry from 'react-icons/lib/md/directions-ferry';
import Map from 'react-icons/lib/md/map';


const Footer = () => {
	return(
		<footer className="content footer" style={styles.container}>
			<Row>
				<Col sm={11} >
					<NavLink to='/Pg1'><FaHome /></NavLink>
		  			<NavLink to='/Pg2'><AddLoc /></NavLink>
		  			<NavLink to='/Pg3'><MyFerry /></NavLink>
					<NavLink to='/Pg3'><Map /></NavLink>
				</Col>
			</Row>
	  		<Row>
				<Col lg={1} style={styles.col}>
	  			</Col>
	   			<Col xs={2} sm={2} lg={1} style={styles.col}>
	  				<img src={logo2} alt="Logo2 icon" style={styles.logo2}/>
	  			</Col>
	  			<Col sm={12} md={2.5} style={styles.col}>
	  				<h2 style={styles.h2}>Help</h2>
					<p><a style={styles.a} href='https://reactjs.org'>Community</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Resources</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Contact</a></p>
	  			</Col>
				<Col sm={12} md={2.5} style={styles.col}>
	  				<h2 style={styles.h2}>About</h2>
					<p><a style={styles.a} href='https://reactjs.org'>Company</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Blog</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Newsletter</a></p>
	  			</Col>
				<Col sm={12} md={4} style={styles.col}>
	  				<h2 style={styles.h2}>Terms & Policies</h2>
					<p><a style={styles.a} href='https://reactjs.org'>Policies</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Terms of Use</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Code of Contact</a></p>
	  			</Col>
	  		</Row>
			<Row>
				<Col md={11} >
					<div style={styles.copy}>
						<p><MdCopyright size={14}/><b>2020 Post It.</b></p>
					</div>
				</Col>
			</Row>
		</footer>
	);
}
export default Footer

const styles ={
		container:{
		width:'100%',
			height:'auto',
			paddingLeft:'5%',
			paddingRight:'5%',
	},
	col:{
		marginTop:'5%',
		color:'grey',
		backgroundColor:'white',
		marginLeft:'1%',
	},
	h2:{
		fontsize:'1.25em',
		marginTop:'-0.5%',
	},
	logo2:{
		width:'100%',
	},
	a:{
		color:'grey',
	},
	copy:{
		fontSize:'0.80em',
		backgroundColor:'white',
		marginLeft:'1%',
		
	},
}