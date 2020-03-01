// JavaScript Document
import React from 'react';
//Material UI
import Grid from "@material-ui/core/Grid";

//Images & Icons
import ProfileImg from './../images/wonderlaneBoiz.jpg';

//Smart Component
class Account extends React.Component {
	state ={
		accountListing: []
	}

	componentDidMount(){
	this.fetchData();
}

fetchData(){
	fetch('https://randomuser.me/api/0.8/?results=1&nat=us&gender=male')
      .then(results => results.json()).then(data =>{
		 let profile = data.results.map((use)=>{
			return(
				  <div key={this.props.id} style={styles.list}>
				<span key={use.results}>
				<p>
				<b>First Name:</b> Bryan<br />
				<b>Last Name:</b> Rogers<br /><br />
				<b>Address 1:</b> {use.user.location.street}<br />
				<b>City:</b> {use.user.location.city} <br /> 
				<b>State:</b> {use.user.location.state} <br />
				<b>Postal Code:</b> {use.user.location.zip}<br /><br />
				<b>Username:</b> {use.user.username}<br />
				<b>Password:</b> {use.user.password}<br /><br />
				<b>Phone:</b> {use.user.phone}<br /><br />
				
				</p>
				</span>
				</div>
			)
		})
		
		this.setState({account:profile});
		//console.log("state", this.state.account);
	})
}
	 render() { 
  return (
    <div style={styles.container}>
		<Grid container spacing={2}>
	  <h1 style={styles.h1}>Welcome Back, Bryan!</h1>
	  	<Grid item xs={12} md={7} style={styles.proImg}>
				<img style={styles.pImg} src={ProfileImg} alt="profile of man and daughter"/>		
        </Grid>
        <Grid item xs={12} md={5} style={styles.proInfo} >
        		{this.state.account}
        </Grid>
      </Grid>
    </div>
  );
 }
}
export default Account

const styles ={
	container:{
		marginTop:'1%',
	},
	h1:{
		textAlign:'center',
		fontSize:'3em',
		color:'#ea7a0f',
		
	},
	pImg:{
		textAlign:'right',
		width:'100%',
	},
	proImg:{
		textAlign:'right',
		marginTop:'1%',
	},
	proInfo:{
		marginTop:'-1%',
		textAlign:'left',
		color:'#ea7a0f',
		paddingBottom:'5%',
	},
}
