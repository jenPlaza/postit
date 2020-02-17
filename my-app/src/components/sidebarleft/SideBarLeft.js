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
		marginTop:'0%',
	},
	btn:{
	display:'block',
		backgroundColor:'grey',
		border:'none',
		fontSize:'1.5em',
		paddingBottom:'5%',
		color:'white',
}
}
