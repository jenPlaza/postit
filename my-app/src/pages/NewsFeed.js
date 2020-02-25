import React from 'react';
import Messages from '../pages/Messages';
import { Row, Col } from 'react-grid-system';

//Smart Component
class NewsFeed extends React.Component {
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