// JavaScript Document
import React, {Component} from 'react';
import {Row, Col } from 'react-grid-system';

//React Router
import {NavLink} from 'react-router-dom';
//pages
import NewsFeed from '../../pages/NewsFeed';
import Messages from '../../pages/Messages';
import Watch from '../../pages/Watch';

class Nav extends React.Component {
	render(){
      return (
		  <nav style={styles.container}>
		  	<Row>
		  		<Col xs={11} >
		  				<NavLink style={styles.nav} to="/NewsFeed">News Feed</NavLink>
		  				<NavLink style={styles.nav} to="/Messages">Messages</NavLink>
		  				<NavLink style={styles.nav} to="/Watch">Watch</NavLink>
		  		</Col>
			</Row>
		  </nav>
	  );
	}
}

  export default Nav; 

const styles ={
		container:{
		width:'95%',
		padding:'2%',
		marginTop:'-5%',
	},
	nav:{
		paddingRight:'1%',
		textDecoration:'none',
		color:'#ea7a0f',
	},
}