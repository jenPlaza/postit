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
					<Col>
						<Header />
					</Col>
				</Row>
				<Row style={styles.nav}>
					<Col xs={12} lg={2.5}>
						<SideBarLeft />
					</Col>
					<Col xs={6.4} lg={6}>
						<Routes />
					</Col>
					<Col xs={12} lg={3.5}>
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
		padding:'3%',
		backgroundColor:'white',
		width:'100%',
	},
	nav:{
		marginTop:'5%',
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
}