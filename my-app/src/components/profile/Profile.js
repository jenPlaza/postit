// JavaScript Document
import React from 'react';
import {Row, Col } from 'react-grid-system';
import {FaUserCircle} from 'react-icons/fa';

//React Router
import {NavLink} from 'react-router-dom';

class Profile extends React.Component {
	render(){
      return (
		  <nav style={styles.container}>
		  	<Row>
		  		<Col xs={11} >
		  	<NavLink to="/Account"><FaUserCircle style={styles.faUserCircle} size={38}/></NavLink>
		 		</Col>
			</Row>
		  </nav>
	  );
	}
}

export default Profile

const styles ={
		container:{
		width:'100%',
		marginTop:'-05%',
	},
	faUserCircle:{
		marginRight:'-6%',
		float:'right',
		color:'black',
	},
}

