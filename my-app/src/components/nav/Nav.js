// JavaScript Document
import React, {Component} from 'react';
import {GoSearch} from 'react-icons/go';
import {Row, Col } from 'react-grid-system';

//React Router
import {NavLink} from 'react-router-dom';
//pages
import Pg1 from '../pages/Pg1'
import Pg2 from '../pages/Pg2'
import Pg3 from '../pages/Pg3'

const Nav = () => {
      return (
		  <nav style={styles.container}>
		  	<Row>
		  		<Col sm={12} >
		  				<NavLink to='/Pg1'>Link 1</NavLink>
		  				<NavLink to='/Pg2'>Link 2</NavLink>
		  				<NavLink to='/Pg3'>Link 3</NavLink>
		  		</Col>
			</Row>
		  </nav>
	  );
}

  export default Nav; 

const styles ={
		container:{
		width:'100%',
		padding:'2%',
		border:'1px solid red',
	}
}