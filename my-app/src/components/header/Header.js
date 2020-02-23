// JavaScript Document
import React from 'react';
import Nav from '../nav/Nav';
import { Row, Col } from 'react-grid-system';

const Header = props => {
	return(
		<header>
			<Row>
				<Col style={styles.colWt}>
					<Nav />
				</Col>
			</Row>
		</header>
		
	)
}
export default Header

const styles ={
	colWt:{
		backgroundColor:'rgba(231, 231, 231, 0)',
	},
}