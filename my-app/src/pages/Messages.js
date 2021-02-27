import React from 'react';
//Material UI
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from "@material-ui/core/Paper";

//color theme
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
	  typography: {
    fontFamily: 'Lora',
  },
	palette: {
    primary: {
      light: '#B9B9B9',
      main: '#000000',
    },
    secondary: {
      main: '#ea7a0f',
      contrastText: '#ffffff',
    },
  },
});

//Smart Component
class Messages extends React.Component {
	//declaring state and new object
	state ={
		messageListing: []
	}

//function to remove item
	removeItem = key => {
		let messageL = this.state.messageListing
		this.state.messageListing.splice(key,1)
		this.setState({messageListing: this.state.messageListing})
		localStorage.setItem('messageListing', JSON.stringify(messageL))
	}
	
	componentDidMount(){
	this.fetchData();
}
//fetch Api data and map json results in a list format
	fetchData(){
	fetch('https://randomuser.me/api/0.8/?results=10&nat=us')
		.then(results =>{
		return results.json();
	}).then(data =>{
		let mList = data.results.map((use)=>{
			return(
				  <li key={this.props.id} style={styles.list}>
				<Paper variant="outlined">
				<span>
					<DeleteIcon style={styles.delete} size={30} onClick={this.props.dlt}/>
					<EditIcon style={styles.edit} size={30}/>
				</span>
				<span key={use.results}>
				<p style={styles.p}><b>Username:</b> {use.user.username}<br /><b>Email:</b> {use.user.email}<br/><b>Date:</b> {use.user.registered} - <b>Time:</b>{use.user.dob}<br /><br />{use.user.sha256}</p>
				</span>
				</Paper>
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
		padding:'2%',
		listStyleType:'none',
		marginTop:'3%',
		marginLeft:'1%',
		marginBottom:'3%',
		background:'#B9B9B9',
		borderRadius:'3px',
		textAlign:'left',
		wordWrap:'break-word',
	},
	delete:{
		float:'right',
		color:theme.palette.secondary.main,
	},
	edit:{
		float:'right',
	},
	p:{
		padding:'2%',
	}
}