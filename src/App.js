import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
//This link was updated.
import MyForm from './components/myForm/MyForm'
import logo from '../src/images/postIt.png'
import imgUrl from '../src/images/post.jpg'
import SideBarLeft from './components/sidebarleft/SideBarLeft'
import SideBarRight from './components/sidebarright/SideBarRight'
import ListItem from './components/listitems/ListItems'
import { Row, Col } from 'react-grid-system';


class App extends React.Component {
	// This is old and no longer needed.
	// constructor(props) {     
    // super(props);
	// this.
	state ={
		titleInput:'',
		descriptionInput:'',
		postListing: [
			//You are telling the app that you want a  title and description to be empty on first load.  
			// {
			// 	postTitle:'', 
			// 	postDescription:''
			// }
		]
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
					<div style={styles.div}>
					<SideBarLeft />
					</div>
				</Col>
				<Col md={6} style={styles.col}>
			{/* Fix syntax */}
			<div style={styles.divform}>
						<MyForm
							titleBind={this.titleBind}
							titleInput={this.state.titleInput}
							descriptionBind={this.descriptionBind}
							descriptionInput={this.state.descriptionInput}	
							handleSubmit={this.handleSubmit}
						/>	
						<ul>{list}</ul>
			</div>
					</Col>
					<Col md={4} style={styles.col}>
			<div style={styles.divSBRight}>
						<SideBarRight/>
			</div>
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
		backgroundImage: 'url(' + imgUrl + ')',								
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
		backgroundColor:'rgba(135, 135, 135, 0.6)',
		paddingTop:'5%',
	},
	colWt:{
		height:'auto',
		backgroundColor:'rgba(231, 231, 231, 0.4)',
		paddingTop:'5%',
	},
		div:{
		marginTop:'-15%',
		height:'100%',
		backgroundColor:'rgba(135, 135, 135, 0.6)',
	},
		divform:{
		marginTop:'-4%',
		height:'100%',
		backgroundColor:'rgba(135, 135, 135, 0.6)',
	},
		divSBRight:{
		marginTop:'-9%',
		height:'100%',
		backgroundColor:'rgba(135, 135, 135, 0.5)',
	},
}