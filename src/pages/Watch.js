// JavaScript Document
import React from 'react';
import YouTube from '../thirdparty/YouTube';
import { Row, Col } from 'react-grid-system';
 
//Smart Component
class Watch extends React.Component {
	render(){
	return(
		<div>
			<Row>
				<Col xs={12} lg={3} style={styles.video}>
					<YouTube  videoId='0ujjBmVkYhg' />
				</Col>
				<Col xs={12} lg={3} style={styles.video}>
					<YouTube videoId='sioZd3AxmnE' />
				</Col>
				<Col xs={12} lg={3} style={styles.video}>
					<YouTube videoId='ab3Sy-HnUB0' />
				</Col>
			</Row>
		</div>
		);
	}
}

export default Watch

const styles ={
		video:{
			marginRight:'8%',
	}
}