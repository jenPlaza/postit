import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import MyForm from './components/myForm/MyForm'
import logo from '../src/images/postIt.png'
import imgUrl from '../src/images/postBkg.jpg'
import SideBarLeft from './components/sidebarleft/SideBarLeft'
import SideBarRight from './components/sidebarright/SideBarRight'
import ListItem from './components/listitems/ListItems'
import {FaUserCircle} from 'react-icons/fa'
import { Row, Col } from 'react-grid-system';


class App extends React.Component {
	state ={
		titleInput:'',
		descriptionInput:'',
		postListing: []
	};
	//This is old.  Use an arrow function. Please watch my videos also. I will have the latest code.

	// this.handleSubmit = this.handleSubmit.bind(this); 
	// }
	
	handleSubmit = e => {
		e.preventDefault();
		//Add JS validation here as well. Not just HTML5
		this.setState({
		postListing:[...this.state.postListing, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
		});
		e.target.reset()
	}
	
	removeItem = key => {
		this.state.postListing.splice(key,1)
		this.setState({postListing: this.state.postListing})
	}

	//Make this global. You can write a function that will take the value based off the name attribute.
	//Try to fix this for week 3

	titleBind = e => {
		this.setState({titleInput: e.target.value})
	}
	descriptionBind = e => {
		this.setState({descriptionInput: e.target.value})
	}
	
	render() {
	  let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} dlt={()=>this.removeItem(i)}/>
	  })
  return (
	  <div style={styles.container}>
	  	<Row style={styles.headerRow}>
	   		<Col sm={9} style={styles.logo}>
	  			<img src={logo} alt="Logo icon"/>
	  		</Col>
	  		<Col sm={3} >
	  			<div style={styles.avatar}>
		  		<FaUserCircle style={styles.faUserCircle} size={38}/>
		  		<p md={2} style={styles.p}>Log In</p>	
		  		</div>
	  		</Col>
	  	</Row>
	  	<Row style={styles.searchRow}>
	  		<Col sm={11}>
	  			<Header/>
	  		</Col>
	  	
	  	</Row>
	  
	    <Row style={styles.bodyRow}>
    		<Col sm={12} lg={3} style={styles.col}>
	  			<div style={styles.divSBLeft}>
				<SideBarLeft />
	  			</div>
	  		</Col>
	  		<Col sm={12} lg={5} style={styles.col}>
	  			<div style={styles.divform}>
	  			<MyForm style={styles.divform}
	  			titleBind={this.titleBind}
	  			titleInput={this.state.titleInput}

	  			descriptionBind={this.descriptionBind}
	  			descriptionInput={this.state.descriptionInput}
	  
	  			handleSubmit={this.handleSubmit}
	  			 />
	  
	  			{list}
	  			</div>
	  		</Col>
	  		<Col sm={12} lg={4} style={styles.col}>
	  			<div style={styles.divSBRight}>
    			<SideBarRight/>
	  		</div>
	  		</Col>
	  	</Row>
	  
	   	<Row style={styles.footerRow}>
    		<Footer/>
	  	</Row>
	 </div> 
  	);
  }
}

export default App;

const styles ={
	container:{
		backgroundImage: 'url(' + imgUrl + ')',						
		height:'auto',
		overflow:'hidden',
	},
	headerRow:{
		padding:'2%',
		backgroundColor:'white',
		margin:'0',
		width:'100%',
	},
	searchRow:{
	paddingTop:'2%',
	paddingBottom:'2%',
	backgroundColor:'white',
	justifyContent:'center',									
	},
	bodyRow:{
		marginTop:'8%',
		/*padding:'4%',*/
		marginBottom:'8%',
		paddingTop:'2%',
		paddingBottom:'3%',
		textAlign:'center',
		backgroundColor:'rgba(24, 8, 0, 0.4)',
		border:'3px solid rgba(24, 8, 0)',
	},
	footerRow:{
		backgroundColor:'white',							
	},							
	col:{						
		height:'auto',
		padding:'2%',								
	},
		logo:{
		float:'left',
		marginTop:'2%',
		height:'140px',
	},
	avatar:{
		float:'right',
		marginRight:'8%',
	},
	p:{
		display:'none',									
	},
		divSBLeft:{
		height:'100%',
		border:'3px solid rgba(135, 135, 135)',
		borderRadius:'5px', 
	},
		divform:{
		height:'100%',
		backgroundColor:'rgba(135, 135, 135, 0.6)',
	},
		divSBRight:{
		height:'100%',
		border:'3px solid rgba(135, 135, 135)',
		borderRadius:'5px',
	},
}