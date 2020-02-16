// JavaScript Document
import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import { Container, Row, Col } from 'react-grid-system';

const Header = props => {
	return(
		<header style={styles.container}>
			<Row>
				<Col xs={12} style={styles.col}>
					<Nav />
				</Col>
			</Row>
		</header>
		
	)
}
export default Header

const styles ={
	container:{
		border:'1px solid blue',
		width:'100%',
	},
}