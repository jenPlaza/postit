// JavaScript Document
import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const ListItem = props => {
	return(
		<li key={props.id} style={styles.list}>
<<<<<<< HEAD:my-app/src/components/listitems/ListItems.js
		<div>
		<MdDelete style={styles.mdDelete} size={36} onClick={props.dlt}/>
		<FaEdit style={styles.faEdit} size={36}/>
		</div>
=======
>>>>>>> origin/02_Application:src/components/listitems/ListItems.js
			<div style={styles.items}>{props.val.postTitle}</div>
			<div style={styles.items}>{props.val.postDescription}</div>
			<MdDelete style={styles.mdDelete} size={36} onClick={props.dlt}/>
			<FaEdit style={styles.faEdit} size={36}/>
		</li>
	)
}
export default ListItem

const styles ={
	list:{
		width:'100%',
		listStyleType:'none',
		marginBottom:'3%',
		background:'#B9B9B9',
		borderRadius:'3px',
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