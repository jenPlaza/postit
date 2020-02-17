// JavaScript Document
import React from "react";
/*import '../sidebarleft/SideBarLeft.css';*/
 import { Container, Row, Col } from 'react-grid-system';

class SideBarLeft extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
		<Row>
			<Col md={12} style={styles.col}>
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
	container:{
		height:'auto',
		
	},
	btn:{
	display:'block',
		backgroundColor:'rgba(135, 135, 135, 0)',
		border:'none',
		fontSize:'1.5em',
		marginTop:'5%',
		
		paddingBottom:'5%',
		color:'white',
}
}
