// JavaScript Document
import React from 'react';
import Button from '../buttons/Button'
//Material UI
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root:{
		backgroundColor:'rgba(135, 135, 135, 0.7)',
		color:'white',
		display:'flex',
		flexDirection:'column',
		borderRadius:'5px',
		width:'100%',
	},
	input:{
		padding:'1%',
		margin:'1%',
		marginTop:'-1%',
	},
	h2:{
		textAlign:'center',
	},
	p:{
		textAlign:'left',
		margin:'3%',
		marginTop:'0%',
		color:'white',
	},
}));

const MyForm = props =>{
  const classes = useStyles();
  return (
		<div>
      	<form className={classes.root} onSubmit={props.handleSubmit}>

		<h2 className={classes.h2}> Create A Post</h2>
		<input type='text' className={classes.input} name='postTitle' value={props.postTitle} onChange={props.titleBind} placeholder="Title" required/>
		<p className={classes.p}>New Item:{props.titleInput}</p>

		<input type='text' className={classes.input} name='postDescription' value={props.postDescription} onChange={props.descriptionBind} placeholder="Description" required/>
		<p className={classes.p}>New Item: {props.descriptionInput}</p>
		  <Button type='submit' btnText='Post'/>
      </form>
		</div>
    );
}
export default MyForm;