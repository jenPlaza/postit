// JavaScript Document
import React from 'react'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

const ListItem = props => {
	return(
		<li key={props.id} style={styles.list}>
		<span>
		<MdDelete style={styles.mdDelete} size={30} onClick={props.dlt}/>
		<FaEdit style={styles.faEdit} size={30}/>
		</span>
		<span style={styles.items}>{props.val.postTitle}</span>
			<span style={styles.items}>{props.val.postDescription}</span>
		</li>
	)
}
export default ListItem

const styles ={
	list:{
		width:'98%',
		height:'30px',
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
