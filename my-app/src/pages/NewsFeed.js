import React, {Component} from 'react';
import Messages from '../pages/Messages';
import { Row, Col } from 'react-grid-system';

class NewsFeed extends Component{
	render() { 
		  return <Messages />
  return (
	    	<Row>
	  			<Col sm={12}>
	  				{Messages}
	  			</Col>
	  		</Row>
  	);
  }
}

export default NewsFeed