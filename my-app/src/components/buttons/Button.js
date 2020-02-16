// JavaScript Document
//import React, {Component} from 'react'
import React from 'react'

//Dummy Component
const MyBtn = props =>{
	return(
	<button style={styles.button}>
		{props.btnText}
		</button>
	)
}
export default MyBtn

const styles ={
	button:{
		padding:'1%',
		color:'rgb(163,173,194)',
		margin:'3%',
		fontSize:'1em',
		fontWeight:'bold',
		borderRadius:'50px',
	}
}