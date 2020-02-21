// JavaScript Document
import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'
import { Row, Col } from 'react-grid-system'

const Header = props => {
	return(
		<header style={styles.container}>
			<Row style={styles.row}>
				<Col style={styles.colWt}>
					<Nav />
				</Col>
			</Row>
		</header>
		
	)
}
export default Header

const styles ={
	row:{

	},
	colWt:{
		backgroundColor:'rgba(231, 231, 231, 0)',
	},
}