import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBarLeft from './components/sidebarleft/SideBarLeft';
import Routes from './components/Routes';
import Footer from './components/footer/Footer';
import SideBarRight from './components/sidebarright/SideBarRight';

//Images & Icons
import imgUrl from '../src/images/postBkg.jpg';

//grid system
import { Row, Col } from 'react-grid-system';
//React Router
import{ BrowserRouter as Router }from 'react-router-dom'


//Smart Component
class App extends React.Component {

	render() { 
	
	return (
		<Router>
			<div style={styles.container}>
				<Row style={styles.headerRow}>
					<Col xs={12} >
						<Header />
					</Col>
				</Row>
				<Row style={styles.nav}>
					<Col xs={3} >
						<SideBarLeft />
					</Col>
					<Col xs={6} >
						<Routes />
					</Col>
					<Col xs={3} >
						<SideBarRight />
					</Col>	
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
		marginTop:'0',
		width:'100%',
	},
	searchRow:{
	paddingLeft:'2%',
	paddingRight:'2%',
	paddingBottom:'2%',											  
	backgroundColor:'white',
	justifyContent:'center',
	},
	bodyRow:{
		marginTop:'5%',
		marginBottom:'3%',
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
		padding:'1%',								
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
		height:'auto',
		backgroundColor:'rgba(135, 135, 135, 0.6)',
	},
		divSBRight:{
		height:'100%',
		border:'3px solid rgba(135, 135, 135)',
		borderRadius:'5px',
	},
}