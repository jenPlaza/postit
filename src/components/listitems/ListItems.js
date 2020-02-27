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
	 render() { 
  return (
		<li key={this.props.id} style={styles.list}>
				<span>
					<MdDelete style={styles.mdDelete} size={30} onClick={this.props.dlt}/>
					<FaEdit style={styles.faEdit} size={30}/>
				</span>
				<span style={styles.items}><b>{this.props.val.postTitle}</b></span><br />
				<span style={styles.items}>{this.props.val.postDescription}</span>
				
				</li>			
  	);
  }
}

export default ListItem

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