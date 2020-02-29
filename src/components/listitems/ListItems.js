import React from 'react';
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
//Material UI
import Paper from "@material-ui/core/Paper";

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
	  			<Paper style={styles.paper} variant="outlined">
					<span>
						<MdDelete style={styles.mdDelete} size={30} onClick={this.props.dlt}/>
						<FaEdit style={styles.faEdit} size={30}/>
					</span>
					<span style={styles.items}><b>{this.props.val.postTitle}</b></span><br />
					<span style={styles.items}>{this.props.val.postDescription}</span>
					</Paper>
				</li>			
  	);
  }
}

export default ListItem

const styles ={
	list:{
		width:'98%',
		height:'auto',
		
		listStyleType:'none',
		padding:'1%',
		marginTop:'1%',
		marginBottom:'1%',
		backgroundColor:'rgba(135, 135, 135, 0.7)',
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