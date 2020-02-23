import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';

//React Router
import{
	BrowserRouter as Router,
	Route,
	Link
}from 'react-router-dom'

//pages
import NewsFeed from '../../pages/NewsFeed'
import Messages from '../../pages/Messages'
import Watch from '../../pages/Watch'

class Main extends React.Component {
	render(){
	return(
		<section className="content main-content" style={styles.container}>
		  	<Route exact path='/NewsFeed' component={NewsFeed} style={styles.page}/>
		  	<Route exact path='/Messages' component={Messages} style={styles.page}/>
		  	<Route exact path='/Watch' component={Watch} style={styles.page}/>
		</section>
		);
	}
}
export default Main

const styles ={
	container:{
		width:'90%',
		padding:'2%',
		textAlign:'center',
		color:'#ea7a0f',
	},
}
