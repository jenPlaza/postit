// JavaScript Document
import React from "react";
 import { Container, Row, Col } from 'react-grid-system';

class SideBarLeft extends React.Component {
  render() {
    return (
      <Container style={styles.btn}>
		<Row>
			<Col md={12}>
				<button style={styles.btn}href="#">News Feed</button>
          		<button style={styles.btn}href="#">Messages</button>
          		<button style={styles.btn}href="#">Watch</button>
			</Col>
	  	</Row>
      </Container>
    );
  }
}
 
export default SideBarLeft;

const styles ={
	btn:{
	display:'block',
		backgroundColor:'rgba(135, 135, 135, 0)',
		border:'none',
		fontSize:'1.3em',
		marginTop:'5%',
		/*paddingBottom:'3%',*/
		color:'white',
}
}
