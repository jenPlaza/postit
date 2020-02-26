// JavaScript Document
import React from 'react';
import { Row, Col } from 'react-grid-system';

//Images & Icons
import Pic from './../images/wonderlaneBoiz.jpg';

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
		.then(results =>{
		return results.json();
	}).then(data =>{
		let profile = data.results.map((use)=>{
			return(
				  <div key={this.props.id} style={styles.list}>
				<hr/>
				<span key={use.results}>
				<p>
				<b>First Name:</b> {use.user.name.first}<br />
				<b>Last Name:</b> {use.user.name.last}<br /><br />
				<b>Address 1:</b> {use.user.location.street}<br />
				<b>City:</b> {use.user.location.city} <br /> 
				<b>State:</b> {use.user.location.state} <br />
				<b>Postal Code:</b> {use.user.location.zip}<br /><br />
				<b>Username:</b> {use.user.username}<br />
				<b>Password:</b> {use.user.password}<br /><br />
				<b>Phone:</b> {use.user.phone}<br /><br />
				
				</p>
				</span>
				<hr/>
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
	  <Row>
	  <Col xs={6}>
	  <h1 style={styles.h1}>Welcome Back! </h1>
	  </Col>
	  </Row>
	  <Row style={styles.row}>
	  <Col xs={10} md={6} lg={6} style={styles.proImg}>
	  				<img style={styles.pic} src={Pic} alt="Logo icon"/>
	  			</Col>
	  <Col xs={10} md={6} lg={4} style={styles.proInfo}>
		{this.state.account}
	  </Col>
	  </Row>
	  </div>
  	);
  }
}

export default Account

const styles ={
	container:{
		marginTop:'3%',
	},
	h1:{
		textAlign:'Right',
		fontSize:'3em',
		color:'#ea7a0f',
		
	},
	proImg:{
		textAlign:'right',	
	},
	proInfo:{
		marginTop:'-1%',
		textAlign:'left',
		color:'#ea7a0f',	
	},
}
