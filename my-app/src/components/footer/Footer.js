// JavaScript Document
import React from 'react'
import './Footer.css'

const Footer = () => {
	return(
		<footer style={styles.footer}>
		<p>this is the footer</p>
		</footer>
	)
}
export default Footer

const styles ={
	footer:{
		display:'flex',
		flexDirection:'row',
		fontSize: '0.65em',
		justifyContent: 'center',
		padding:'1%',
		border:'1px solid green'
	},
	h1:{
		fontsize:'1.25em'
	}
}