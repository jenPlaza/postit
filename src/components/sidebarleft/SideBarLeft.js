// JavaScript Document
import React from "react";
//grid system
import { Container, Row, Col } from 'react-grid-system';

//React Router
import {NavLink} from 'react-router-dom';

//Smart Component
class SideBarLeft extends React.Component {
	render() {
		return (
		<Container style={styles.container}>
			<Row>
				<Col md={12} style={styles.btn}>
					<NavLink style={styles.btn} to="/NewsFeed">News Feed</NavLink>
					<NavLink style={styles.btn} to="/Messages">Messages</NavLink>
					<NavLink style={styles.btn} to="/Watch">Watch</NavLink>
				</Col>
			</Row>
		</Container>
    );
  	}
}
 
export default SideBarLeft;

const styles ={
	container:{
		width:'90%',
		height:'100%',
		marginLeft:'5%',
	},
	btn:{
		display:'block',
		backgroundColor:'rgba(135, 135, 135, 0)',
		border:'none',
		fontSize:'1.3em',
		marginTop:'5%',
		paddingBottom:'3%',
		color:'white',
		textDecoration:'none',
		textAlign:'left',
	}
}
