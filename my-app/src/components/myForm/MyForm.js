// JavaScript Document
import React from 'react';
import Button from '../buttons/Button'

const MyForm = props =>{
    return (
      <form
		style={styles.myform}
		onSubmit={props.addTitle}>
		<h1> Create A Post</h1>
		<input 
		style={styles.input}
		placeholder="Title" />
		<input 
		style={styles.input}
		placeholder="Description" />
		<Button btnText='Post' />
      </form>
    );
}

// No need to connect()!
export default MyForm;

const styles ={
	myform:{
		margin:'1px solid orange',
		padding:'1%',
		width:'auto',
		height:'auto',
		backgroundColor:'rgba(163,173,194,0.5)',
		color:'rgba(163,173,194)',
		display:'flex',
		flexDirection:'column'
	},
	input:{
		padding:'1%',
		margin:'0.5%'
	}
}