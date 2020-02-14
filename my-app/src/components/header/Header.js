// JavaScript Document
import React from 'react'
import './Header.css'
import Nav from '../nav/Nav'

const Header = props => {
	return(
		<header style={styles.header}>
		<h1 style={styles.h1}>{props.pgTitle}</h1>
		<Nav />
		</header>
	)
}
export default Header

const styles ={
	header:{
		border:'1px solid blue',
		display:'flex',
		flexDirection:'row',
		justifyContent: 'space-between',
		padding:'1%'
	},
	h1:{
		fontsize:'1.25em'
	}
}