import React from 'react';
//React Router
import{
	Route,
}from 'react-router-dom'

//pages
import NewsFeed from '../../pages/NewsFeed'
import Messages from '../../pages/Messages'
import Watch from '../../pages/Watch'

//Smart Component
class Main extends React.Component {
	render(){
	return(
		<section style={styles.container}>
		  	<Route exact path='/NewsFeed' component={NewsFeed}/>
		  	<Route exact path='/Messages' component={Messages}/>
		  	<Route exact path='/Watch' component={Watch}/>
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
	},
}
