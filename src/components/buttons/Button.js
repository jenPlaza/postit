// JavaScript Document
import React from 'react'
import Button from '@material-ui/core/Button';

//Dummy Component
const MyBtn = props =>{
	return(
		 <Button type='submit' style={styles.btn}>{props.btnText}</Button>
	)
}
export default MyBtn

const styles ={
	btn:{
		padding:'1%',
		backgroundColor:'white',
		margin:'1%',
		fontSize:'1em',
		fontWeight:'bold',
		color:'#ea7a0f',
		border:'3px solid #ea7a0f'
	}
}
