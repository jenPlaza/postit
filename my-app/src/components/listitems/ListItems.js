import React from 'react';
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

//Smart Component
class ListItem extends React.Component {
	state ={
		postListing: []
	}

	removeItem = key => {
		let postL = this.state.postListing
			this.state.postListing.splice(key,1)
		this.setState({postListing: this.state.postListing})
		localStorage.setItem('postListing', JSON.stringify(postL))
	}
	componentDidMount(){
	this.fetchData();
}
	fetchData(){
	fetch('https://randomuser.me/api/0.8/?results=1&nat=us')
		.then(results =>{
		return results.json();
	}).then(data =>{
		let pList = data.results.map((use)=>{
			return(
				  <li key={this.props.id} style={styles.list}>
				<span>
					<MdDelete style={styles.mdDelete} size={30} onClick={this.props.dlt}/>
					<FaEdit style={styles.faEdit} size={30}/>
				</span>
				<span key={use.results}>
				<p><b>Username:</b> {use.user.username}<br /><b>Email:</b> {use.user.email}<br/><b>Date:</b> {use.user.registered} - <b>Time:</b>{use.user.dob}</p>

				</span>
				<span style={styles.items}><b>{this.props.val.postTitle}</b></span><br />
				<span style={styles.items}>{this.props.val.postDescription}</span>
				
				</li>
			)
		})
		this.setState({post:pList});
		//console.log("state", this.state.post);
	})
}
	 render() { 
  return (
		<div>{this.state.post}</div>			
  	);
  }
}

export default ListItem

const styles ={
	list:{
		width:'100%',
		height:'auto',
		padding:'4%',
		listStyleType:'none',
		marginTop:'3%',
		marginLeft:'1%',
		marginBottom:'3%',
		background:'#B9B9B9',
		borderRadius:'3px',
		textAlign:'left',
	},
	items:{
		marginLeft:'3%',
	},
	mdDelete:{
		float:'right',
	},
	faEdit:{
		float:'right',
	},
}