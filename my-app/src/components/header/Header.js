// JavaScript Document
import React from 'react';

//React Router
import{ NavLink } from 'react-router-dom'

//grid system
import { Row, Col } from 'react-grid-system';

//Images & Icons
import logo from '../../images/postIt.png';
import {GoSearch} from 'react-icons/go';


//Dummy Component
const Header = props => {
	return(
		<header>
			<section>
				<NavLink style={styles.nav} to="/Account">John Doe</NavLink>
			
			{/* <Profile /> */}
				<Row>
			<Col xs={6} md={4} lg={3} style={styles.col}>
				<img style={styles.logo} src={logo} alt="Logo icon"/>
			</Col>
				<Col xs={12}>
					<form style={styles.search}>	
						{/* <SearchInput placeholder="Search..." searchInfo={this.searchInfo} /> */}
						<GoSearch style={styles.goS}/>
						{/* <ul style={styles.searchL}>
							{searchlist}
						</ul> */}
					</form>
				</Col>
		</Row>
			</section>
		</header>
		
	)
}
export default Header

const styles ={	
		nav:{
		float:'right',
		marginRight:'3%',
	},
	logo:{
		float:'left',
		padding:'1%',
		width:'200%',
	},
	col:{
		marginBottom:'5%',									
	},
	search:{
		height:'32px',
		backgroundColor:'rgba(231, 231, 231, 0.8)',
		bottom:'0%',
		position:'absolute',
		width:'100%',
	},
	goS:{
		float:'right',
		marginTop:'1%',
		marginRight:'2%',
	}
}