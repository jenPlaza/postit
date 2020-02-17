// JavaScript Document
import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const ListItem = props => {
	return(
		<li key={props.id} style={styles.list}>
		<div style={styles.icons}>
		<FaEdit style={styles.faEdit} size={38}/>
		<MdDelete style={styles.mdDelete} size={38}/>
		</div>
			<div style={styles.items}>{props.val.postTitle}</div>
			<div style={styles.items}>{props.val.postDescription}</div>
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
	icons:{
		float:'right',
	}

}