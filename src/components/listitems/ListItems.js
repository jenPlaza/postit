import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

//styles
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
	delete:{
		float:'right',
		color:theme.palette.secondary.main,
	},
	edit:{
		float:'right',
	},
}));

//Dummy component
const ListItems = props =>{
  const classes = useStyles();
  return (
		<li key={props.id} className={classes.root}>
	  			<Paper variant="outlined">
					<span>
						<DeleteIcon className={classes.delete} onClick={props.dlt}/>
						<EditIcon className={classes.edit} />
					</span>
					<span className={classes.items}><b>{props.val.postTitle}</b></span><br />
					<span className={classes.items}>{props.val.postDescription}</span>
					</Paper>
				</li>
    );
}

export default ListItems;
