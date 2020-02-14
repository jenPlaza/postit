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

//Smart Component
/*
class Mybtn extends Component{
render(){
return(
		<button style ={styles.myBtn}>
		<h2 style={styles.h2}>{this.props.btnText}</h2>
		</button>
		)
	}
}
export default MyBtn
*/

const styles ={
	button:{
		padding:'3%',
		color:'rgb(163,173,194)',
		margin:'5%',
		fontSize:'1.25em',
		fontWeight:'bold',
		cursor:'pointer',
		borderRadius:'10%',
	}
}