// JavaScript Document
import React from 'react';
import Nav from '../nav/Nav';
import Profile from '../profile/Profile';
import Account from '../../pages/Account';

//React Router
import{
	Route,
}from 'react-router-dom'

//Dummy Component
const Header = props => {
	return(
		<header>
			<Nav />
			<Profile />
		
		<section style={styles.container}>
		  	<Route exact path='/Account' component={Account}/>
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
}
