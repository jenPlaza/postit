// JavaScript Document
import React from 'react';
//import Profile from '../profile/Profile';
//import SearchInput from '../search/SearchInput';
//import Search from './components/search/Search';

//React Router
import{ NavLink } from 'react-router-dom'

//grid system
import { Col } from 'react-grid-system';

//Images & Icons
import logo from '../../images/postIt.png';
import {GoSearch} from 'react-icons/go';


//Dummy Component
const Header = props => {
	return(
		<header>
			{/* <Profile /> */}
			<Col xs={10} md={6} lg={2} style={styles.logo}>
				<img style={styles.logo} src={logo} alt="Logo icon"/>
			</Col>
				<Col xs={12} md={6} lg={10}>
					<form style={styles.search}>	
						{/* <SearchInput placeholder="Search..." searchInfo={this.searchInfo} /> */}
						<GoSearch style={styles.goS}/>
						{/* <ul style={styles.searchL}>
							{searchlist}
						</ul> */}
					</form>
				</Col>
			<section style={styles.container}>
				<NavLink style={styles.nav} to="/Account">John Doe</NavLink>
			</section>
		</header>
		
	)
}
export default Header

const styles ={
	container:{
		width:'90%',
		padding:'2%',
		textAlign:'center',
	},
	searchRow:{
	paddingLeft:'2%',
	paddingRight:'2%',
	paddingBottom:'2%',											  
	backgroundColor:'white',
	justifyContent:'center',
	},							
	col:{						
		height:'auto',
		padding:'1%',								
	},
	logo:{
		float:'left',
		marginTop:'0%',									  
	},
	avatar:{
		float:'right',
		marginRight:'3%',
	},
	p:{
		display:'none',									
	},
	search:{
		height:'32px',
		backgroundColor:'rgba(231, 231, 231, 0.8)',
		marginTop:'13%',
	},
	searchL:{
	color:'grey',
	listStyleType:'none',
	marginTop:'3%',
	},
	goS:{
		float:'right',
		marginTop:'-3%',
		marginRight:'2%',
	}
}