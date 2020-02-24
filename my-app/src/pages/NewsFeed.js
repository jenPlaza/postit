// JavaScript Document
import React, {Component} from 'react';
import { Row, Col } from 'react-grid-system';
 
class NewsFeed extends Component{
	render(){
	return(
		<Row style={styles.container}>
                <Col sm={12}>
                <h1 style={styles.h1}>News Feed</h1>
                  </Col>  
	  			<Col sm={12} style={styles.col}>
	  			
	  			</Col>
	  		</Row>
  	);
  }
}

export default NewsFeed

const styles ={
		h1:{
		fontSize:'3em',
		marginTop:'-0.5%',
		color:'#ea7a0f',
	},
	col:{
		height:'100%',
		backgroundColor:'rgba(135, 135, 135, 0.6)',
															 
	}																		 
}