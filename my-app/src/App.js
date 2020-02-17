import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyForm from './components/myform/MyForm'
import logo from '../src/images/postIt.png'
import SideBarLeft from './components/sidebarleft/SideBarLeft'
import SideBarRight from './components/sidebarright/SideBarRight'
import ListItem from './components/listitems/ListItems'
import { Row, Col } from 'react-grid-system';


class App extends React.Component {
	constructor(props) {     
    super(props);
	this.state ={
		titleInput:'',
		descriptionInput:'',
		postListing: [
			{postTitle:'', postDescription:''}
		]
	};

	this.handleSubmit = this.handleSubmit.bind(this); 
	}
	
	handleSubmit = e => {
	e.preventDefault();
	this.state.postListing.push({
		postTitle:this.state.titleInput,
		postDescription:this.state.descriptionInput
	})
    this.setState({postListing: this.state.postListing});
  }

	titleBind = e => {
	this.setState({titleInput: e.target.value})
	}
	descriptionBind = e => {
	this.setState({descriptionInput: e.target.value})
	}
	
  render() {
	  let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} />
	  })
  return (
	  <div style={styles.container}>
	  	<Row style={styles.headerRow}>
	   		<Col xs={3} style={styles.colWt}>
	  			<img src={logo} alt="Logo icon"/>
	  		</Col>
	  		<Col md={9} style={styles.colWt}>
	  			<Header/>
	  		</Col>
	  	</Row>
	  <hr />
	  	<Row style={styles.bodyRow}>
    		<Col md={2} style={styles.col}>
				<SideBarLeft />
	  		</Col>
	  		<Col md={6} style={styles.col}>
	  			<MyForm
	  				titleBind={this.titleBind}
	  				titleInput={this.state.titleInput}

	  				descriptionBind={this.descriptionBind}
	  				descriptionInput={this.state.descriptionInput}
	  
	  				handleSubmit={this.handleSubmit}
	  			 />
	  
	  			{list}
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
		backgroundColor:'#E7E7E7',
		height:'auto'
	},
	headerRow:{
		marginTop:'-4%',
	},
	bodyRow:{
		marginTop:'-5%',
		padding:'6%',
	},
	col:{
		height:'auto',
		backgroundColor:'grey',
		paddingTop:'5%',
	},
	colWt:{
		height:'auto',
		backgroundColor:'#E7E7E7',
		paddingTop:'5%',
	},
}