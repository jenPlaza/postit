import React from 'react';
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

//Smart Component
class Messages extends React.Component {
	state ={
		messageListing: []
	}

	removeItem = key => {
		let messageL = this.state.messageListing
			this.state.messageListing.splice(key,1)
		this.setState({messageListing: this.state.messageListing})
		localStorage.setItem('messageListing', JSON.stringify(messageL))
	}
	componentDidMount(){
	this.fetchData();
}
	fetchData(){
	fetch('https://randomuser.me/api/0.8/?results=10&nat=us')
		.then(results =>{
		return results.json();
	}).then(data =>{
		let mList = data.results.map((use)=>{
			return(
				  <li key={this.props.id} style={styles.list}>
				<span>
					<MdDelete style={styles.mdDelete} size={30} onClick={this.props.dlt}/>
					<FaEdit style={styles.faEdit} size={30}/>
				</span>
				<span key={use.results}>
				<p><b>Username:</b> {use.user.username}<br /><b>Email:</b> {use.user.email}<br/><b>Date:</b> {use.user.registered} - <b>Time:</b>{use.user.dob}<br /><br />{use.user.sha256}</p>

				</span>
				</li>
			)
		})
		this.setState({message:mList});
	})
}
	 render() { 
  return (
		<div>{this.state.message}</div>			
  	);
  }
}

export default Messages

const styles ={
	list:{
		width:'90%',
		height:'auto',
		padding:'4%',
		listStyleType:'none',
		marginTop:'3%',
		marginLeft:'1%',
		marginBottom:'3%',
		background:'#B9B9B9',
		borderRadius:'3px',
		textAlign:'left',
		wordWrap:'break-word',
	},
	mdDelete:{
		float:'right',
	},
	faEdit:{
		float:'right',
	},
}