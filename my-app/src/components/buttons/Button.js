// JavaScript Document
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
		padding:'2%',
		color:'#ea7a0f',
		margin:'1%',
		fontSize:'1em',
		fontWeight:'bold',
		borderRadius:'50px',
		backgroundColor:'white',
		border:'none',
		marginBottom:'5%',
	}
}
