// JavaScript Document
import React from 'react';
import Button from '../buttons/Button'

const MyForm = props =>{

    return (
		<div style={styles.container}>
      <form
		style={styles.myform}
		onSubmit={props.addTitle}>
		<h1> Create A Post</h1>
		<input type='text' style={styles.input} onChange={props.titleBind} placeholder="Title" className='title' />
		<p>New Item:{props.titleInput}</p>
		<input type='text' style={styles.input} onChange={props.descriptionBind} placeholder="Description" className='description' />
		<p>New Item:{props.descriptionInput}</p>
		<Button id='submit' btnText='Post' className='button' />
      </form>
		
		<ul className='list'></ul>	
		</div>
		
    );
}

// No need to connect()!
export default MyForm;

const styles ={
	myform:{
		padding:'1%',
		width:'auto',
		height:'auto',
		backgroundColor:'#B9B9B9',
		color:'grey',
		display:'flex',
		flexDirection:'column'
	},
	input:{
		padding:'1%',
		margin:'0.5%'
	}
}