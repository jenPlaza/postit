import React from 'react';
import ListItem from '../components/listitems/ListItems';
import { Row, Col } from 'react-grid-system';

class Messages extends React.Component {
	state ={
		postListing: []
	}

	removeItem = key => {
		let postL = this.state.postListing
			this.state.postListing.splice(key,1)
		this.setState({postListing: this.state.postListing})
		localStorage.setItem('postListing', JSON.stringify(postL))
	}
	componentDidMount(){
		if(localStorage.getItem('postListing')){
		let postL = JSON.parse(localStorage.getItem('postListing'))
		this.setState({postListing:postL})
	}
}
	render() { 
			let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} dlt={()=>this.removeItem(i)}/>
	  })
  return (
	    	<Row style={styles.container}>
               
	  			<Col sm={12} style={styles.col}>
					{list}
	  			</Col>
	  		</Row>
  	);
  }
}

export default Messages

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
	}																		 
}