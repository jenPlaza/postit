import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

//Main
import MyForm from './components/myForm/MyForm';
import SideBarLeft from './components/sidebarleft/SideBarLeft';
import SideBarRight from './components/sidebarright/SideBarRight';
import ListItem from './components/listitems/ListItems';
import SearchInput from './components/search/SearchInput';
import Search from './components/search/Search';

//Images & Icons
import logo from '../src/images/postIt.png';
import imgUrl from '../src/images/postBkg.jpg';
import {FaUserCircle} from 'react-icons/fa';
import {GoSearch} from 'react-icons/go';
import { Row, Col } from 'react-grid-system';

//React Router
import{
	BrowserRouter as Router
}from 'react-router-dom'

function searchMe(search){
	return function(searchTitle){
		return searchTitle.postTitle.toLowerCase().includes(search.toLowerCase()) || !search
		//return searchTitle.titleInput.includes(search) || !search
	}
}

class App extends React.Component {
	state ={
		titleInput:'',
		descriptionInput:'',
		postListing: [],
		search:'',
	}

	//This is old.  Use an arrow function. Please watch my videos also. I will have the latest code.
	// this.handleSubmit = this.handleSubmit.bind(this); 
	// }

	componentDidMount(){
if(localStorage.getItem('postListing')){
		let postL = JSON.parse(localStorage.getItem('postListing'))
		this.setState({postListing:postL})
	}
}
	handleSubmit = e => {
	e.preventDefault();
	let postL = [...this.state.postListing, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
	localStorage.setItem('postListing', JSON.stringify(postL))
	e.target.reset()
  }
	removeItem = key => {
		let postL = this.state.postListing
			this.state.postListing.splice(key,1)
		this.setState({postListing: this.state.postListing})
		localStorage.setItem('postListing', JSON.stringify(postL))
	}

	//Make this global. You can write a function that will take the value based off the name attribute.
	//Try to fix this for week 3

	titleBind = e => {
		this.setState({titleInput: e.target.value})
	}
	descriptionBind = e => {
		this.setState({descriptionInput: e.target.value})
	}
	searchInfo = e =>{
	this.setState({search: e.target.value})
}	
	render() { 
		const{search} = this.state
		let searchlist = this.state.postListing.filter(searchMe(search)).map((element,i) => {
			  return <Search key={i} val={element}/>
	  })
	  
			let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} dlt={()=>this.removeItem(i)}/>
	  })
  return (
	  <Router>
	  	<div style={styles.container}>
	  		<Row style={styles.headerRow}>
	  			<Col xs={12} >
	  				<div style={styles.avatar}>
		  				<FaUserCircle style={styles.faUserCircle} size={38}/>
		  				<p md={2} style={styles.p}>Log In</p>	
		  			</div>
	  			</Col>
	  			<Col xs={12} >
	  				<Header />
	  			</Col>
	  		</Row>
	  			<Row style={styles.searchRow}>
	  			<Col xs={10} md={6} lg={2} style={styles.logo}>
	  				<img style={styles.logo} src={logo} alt="Logo icon"/>
	  			</Col>
	  			<Col xs={12} md={6} lg={10}>
	  				<form style={styles.search}>	
	  					<SearchInput placeholder="Search..." searchInfo={this.searchInfo} />
	  					<GoSearch style={styles.goS}/>
	  					<ul style={styles.searchL}>
	  						{searchlist}
	  					</ul>
	  				</form>
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
	  					<MyForm style={styles.divform} titleBind={this.titleBind} titleInput={this.state.titleInput} descriptionBind={this.descriptionBind} descriptionInput={this.state.descriptionInput} handleSubmit={this.handleSubmit} />
	  					{list}
	  				</div>
	  			</Col>
	  			<Col sm={12} lg={4} style={styles.col}>
	  				<div style={styles.divSBRight}>
    					<SideBarRight/>
	  				</div>
	  			</Col>
	  		</Row>
	  		<Row style={styles.mainRow}>
    			<Main/>
	  		</Row>
	   		<Row style={styles.footerRow}>
    			<Footer/>
	  		</Row>
	 	</div>
	</Router>
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
	padding:'2%',
	backgroundColor:'white',
	justifyContent:'center',
	},
	bodyRow:{
		marginTop:'2%',
		marginBottom:'2%',
		paddingTop:'2%',
		paddingBottom:'3%',
		textAlign:'center',
		backgroundColor:'rgba(24, 8, 0, 0.4)',
		border:'3px solid rgba(24, 8, 0)',
	},
	mainRow:{
		marginTop:'3%',
		marginBottom:'3%',
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
		marginTop:'0%',									  
	},
	avatar:{
		float:'right',
		marginRight:'3%',
	},
	p:{
		display:'none',									
	},
	search:{
		height:'32px',
		backgroundColor:'rgba(231, 231, 231, 0.8)',
		marginTop:'13%',
	},
	searchL:{
	color:'grey',
	listStyleType:'none',
	marginTop:'3%',
	},
	goS:{
		float:'right',
		marginTop:'-3%',
		marginRight:'2%',
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