// JavaScript Document
import React from 'react';
import Button from '../buttons/Button'

const MyForm = props =>{

    return (
		<div style={styles.container}>
      	<form style={styles.myform} onSubmit={props.handleSubmit}>

		<h1> Create A Post</h1>
		<input type='text' style={styles.input} name='postTitle' value={props.postTitle} onChange={props.titleBind} placeholder="Title" required/>
		<p>New Item:{props.titleInput}</p>
		<input type='text' style={styles.input} name='postDescription' value={props.postDescription} onChange={props.descriptionBind} placeholder="Description" required/>
		<p>New Item:{props.descriptionInput}</p>
		<Button type='submit' id='submit' btnText='Post' className='button' />
      </form>
		
		<ul className='list'></ul>	
		</div>
		
    );
}

export default MyForm;

const styles ={
	myform:{
		padding:'1%',
		width:'auto',
		height:'auto',
		backgroundColor:'#B9B9B9',
		color:'grey',
		display:'flex',
		flexDirection:'column',
		borderRadius:'3px',
	},
	input:{
		padding:'1%',
		margin:'0.5%',
	}
}