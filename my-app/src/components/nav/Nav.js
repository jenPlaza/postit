// JavaScript Document
import React from 'react';
//grid system
import {Row, Col } from 'react-grid-system';

//React Router
import {NavLink} from 'react-router-dom';

//Smart Component
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
		marginTop:'0%',
	},
	nav:{
		paddingRight:'4%',
		textDecoration:'none',
		color:'#ea7a0f',
		fontSize:'1.25em',
	},
	faUserCircle:{
		float:'right',
		color:'black',
	},
	
}