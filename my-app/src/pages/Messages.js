import React from 'react';
import ListItem from '../components/listitems/ListItems';
import { Row, Col } from 'react-grid-system';



class Messages extends React.Component {
	state ={
		titleInput:'',
		descriptionInput:'',
		postListing: [],
		search:'',
	}

	//This is old.  Use an arrow function. Please watch my videos also. I will have the latest code.
	// this.handleSubmit = this.handleSubmit.bind(this); 
	// }

	componentDidMount(){
if(localStorage.getItem('postListing')){
		let postL = JSON.parse(localStorage.getItem('postListing'))
		this.setState({postListing:postL})
	}
}
	handleSubmit = e => {
	e.preventDefault();
	let postL = [...this.state.postListing, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
	localStorage.setItem('postListing', JSON.stringify(postL))
	e.target.reset()
  }
	removeItem = key => {
		let postL = this.state.postListing
			this.state.postListing.splice(key,1)
		this.setState({postListing: this.state.postListing})
		localStorage.setItem('postListing', JSON.stringify(postL))
	}

	titleBind = e => {
		this.setState({titleInput: e.target.value})
	}
	descriptionBind = e => {
		this.setState({descriptionInput: e.target.value})
	}
	searchInfo = e =>{
	this.setState({search: e.target.value})
}	
	render() { 
			let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} dlt={()=>this.removeItem(i)}/>
	  })
  return (
	    	<Row style={styles.container}>
                <Col sm={12}>
                <h1 style={styles.h1}>Messages</h1>
                  </Col>  
	  			<Col sm={12} style={styles.col}>
	  			{list}
	  			</Col>
	  		</Row>
  	);
  }
}

export default Messages

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