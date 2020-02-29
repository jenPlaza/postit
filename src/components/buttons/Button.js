// JavaScript Document
import React from 'react'
import Button from '@material-ui/core/Button';

//Dummy Component
const MyBtn = props =>{
	return(
		 <Button variant="contained" color="textorange" style={styles.btn}>
        {props.btnText}
      </Button>
		

	)
}
export default MyBtn

const styles ={
	btn:{
		padding:'1%',
		color:'#ea7a0f',
		margin:'1%',
		fontSize:'1em',
		fontWeight:'bold',
		backgroundColor:'white',
	}
}
