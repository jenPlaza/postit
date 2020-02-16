import React, { Component }  from 'react';
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import MyForm from './components/myform/MyForm'
import logo from '../src/images/postIt.png'
import SideBarLeft from './components/sidebarleft/SideBarLeft'
import SideBarRight from './components/sidebarright/SideBarRight'
import { Container, Row, Col } from 'react-grid-system';


class App extends React.Component {
  render() {
  return (
	  <div style={styles.container}>
	  	<Row>
	   		<Col xs={3} style={styles.col}>
	  			<img src={logo} alt="Logo icon"/>
	  		</Col>
	  		<Col md={9} style={styles.col}>
	  			<Header/>
	  		</Col>
	  	</Row>
	  	<Row>
    		<Col md={2} style={styles.col}>
				<SideBarLeft />
	  		</Col>
	  		<Col md={6} style={styles.col}>
    			<MyForm addName={this.addName}/>
	  		</Col>
	  		<Col md={4} style={styles.col}>
    			<SideBarRight/>
	  		</Col>
	  	</Row>
	   	<Row>
    		<Footer/>
	  	</Row>
	 </div> 
  	);
  }
}

export default App;

const styles ={
	container:{
		border:'1px solid green',
		height:'auto'
	},
	col:{
		border:'1px solid black',
		height:'auto'
	},
}