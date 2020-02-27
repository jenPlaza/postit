// JavaScript Document
import React from 'react';
import ListItem from '../listitems/ListItems';
import Button from '../buttons/Button'

//Smart Component
class MyForm extends React.Component {
	state ={
		postListing: [],
	}

	handleSubmit = e => {
	e.preventDefault();
	 this.setState({
	postListing:[...this.state.postListing, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
});
e.target.reset()
  }
	
  render() {
	  let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} dlt={()=>this.removeItem(i)}/>
	  })
    return (
		<div>
      	<form style={styles.myform} onSubmit={this.props.handleSubmit}>

		<h2> Create A Post</h2>
		<input type='text' style={styles.input} name='postTitle' value={this.props.postTitle} onChange={this.props.titleBind} placeholder="Title" required/>
		<p style={styles.p}>New Item:{this.props.titleInput}</p>
		<input type='text' style={styles.input} name='postDescription' value={this.props.postDescription} onChange={this.props.descriptionBind} placeholder="Description" required/>
		<p style={styles.p}>New Item: {this.props.descriptionInput}</p>
		<Button type='submit' btnText='Post'/>
      </form>
		</div>
		);
	}
}

export default MyForm;

const styles ={
	myform:{
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
	p:{
		textAlign:'left',
		margin:'3%',
		marginTop:'0%',
		color:'white',
	},
}