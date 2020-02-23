import React, {Component} from 'react';
//React Router
import{
	BrowserRouter as Router,
	Route,
	Link
}from 'react-router-dom'

//pages
import Pg1 from '../pages/Pg1'
import Pg2 from '../pages/Pg2'
import Pg3 from '../pages/Pg3'

class Main extends React.Component {
	render(){
	return(
		<section className="content main-content" style={styles.container}>
		<Row>
		  		<Col sm={12} >
		  				<Route exact path='/Pg1' component={Pg1} style={styles.page}/>
		  				<Route exact path='/Pg2' component={Pg2} style={styles.page}/>
		  				<Route exact path='/Pg3' component={Pg3} style={styles.page}/>
		  		</Col>
			</Row>
		</section>
		);
	}
}
export default Main

const styles ={
	container:{
		border:'1px solid blue',
	},
}
