// JavaScript Document
import React from "react";
import { Container, Row, Col } from 'react-grid-system';

//React Router
import {NavLink} from 'react-router-dom';
//pages
import NewsFeed from '../../pages/NewsFeed';
import Messages from '../../pages/Messages';
import Watch from '../../pages/Watch';

class SideBarLeft extends React.Component {
  render() {
    return (
      <Container style={styles.btn}>
		<Row>
			<Col md={12} style={styles.col}>
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
	btn:{
	display:'block',
		backgroundColor:'rgba(135, 135, 135, 0)',
		border:'none',
		fontSize:'1.3em',
		marginTop:'5%',
		paddingBottom:'3%',
		color:'white',
		textDecoration:'none',
	}
}
