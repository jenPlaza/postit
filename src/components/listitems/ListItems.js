import React from 'react';
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles(theme => ({
root:{
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
}));

const ListItems = props =>{
  const classes = useStyles();
  return (
		<li key={props.id} className={classes.root}>
	  			<Paper className={classes.paper} variant="outlined">
					<span>
						<MdDelete className={classes.mdDelete} size={30} onClick={props.dlt}/>
						<FaEdit className={classes.faEdit} size={30}/>
					</span>
					<span className={classes.items}><b>{props.val.postTitle}</b></span><br />
					<span className={classes.items}>{props.val.postDescription}</span>
					</Paper>
				</li>
    );
}

export default ListItems;
