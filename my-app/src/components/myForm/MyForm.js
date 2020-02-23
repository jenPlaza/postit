// JavaScript Document
import React from 'react';
import Button from '../buttons/Button'

const MyForm = props =>{
    return (
		<div style={styles.container}>
      	<form style={styles.myform} onSubmit={props.handleSubmit}>

		<h1> Create A Post</h1>
		<input type='text' style={styles.input} name='postTitle' value={props.postTitle} onChange={props.titleBind} placeholder="Title" required/>
		<p style={styles.p}>New Item:{props.titleInput}</p>
		<input type='text' style={styles.input} name='postDescription' value={props.postDescription} onChange={props.descriptionBind} placeholder="Description" required/>
		<p style={styles.p}>New Item:{props.descriptionInput}</p>
		<Button type='submit' btnText='Post'/>
      </form>
		</div>
    );
}



export default MyForm;

const styles ={
	myform:{
		width:'auto',
		height:'auto',
		backgroundColor:'rgba(135, 135, 135, 0.7)',
		color:'white',
		display:'flex',
		flexDirection:'column',
		borderRadius:'5px',
	},
	input:{
		padding:'1%',
		margin:'1%',
	},
	p:{
		textAlign:'left',
		margin:'3%',
	}
}