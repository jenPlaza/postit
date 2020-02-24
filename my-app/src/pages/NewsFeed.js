import React, {Component} from 'react';
import Messages from '../pages/Messages';
import { Row, Col } from 'react-grid-system';

class NewsFeed extends Component{
	state ={
		postListing: []
	}

	componentDidMount(){
		if(localStorage.getItem('postListing')){
		let postL = JSON.parse(localStorage.getItem('postListing'))
		this.setState({postListing:postL})
	}
}
	render() { 
			let msgs = this.state.postListing.map((element,i) => {
		  return <Messages key={i} val={element} />
	  })
  return (
	    	<Row style={styles.container}>
                <Col sm={12} style={styles.newsfeed}>
                <h1 style={styles.h1}>News Feed</h1>
                  </Col>  
	  			<Col sm={12} style={styles.col}>
	  			{msgs}
	  			</Col>
	  		</Row>
  	);
  }
}

export default NewsFeed

const styles ={
		container:{
		padding:'3%',
		marginLeft:'4%'
		},
		h1:{
		fontSize:'3em',
		marginTop:'-0.5%',
		color:'#ea7a0f',
	},
	col:{
		paddingRight:'4.5%',
		paddinLeft:'4%',
		backgroundColor:'rgba(135, 135, 135, 0.6)',
		borderRadius:'5px',
	},
	messages:{
	display:'none',											  
	},
}