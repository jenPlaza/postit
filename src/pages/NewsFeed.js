import React from 'react';

//grid system
import { Row, Col } from 'react-grid-system';
import MyForm from '../components/myForm/MyForm';


// function searchFor(search){
// 	return function(searchTitle){
// 		return searchTitle.postTitle.toLowerCase().includes(search.toLowerCase()) || !search
// 	}
// }

//Smart Component
class NewsFeed extends React.Component {
	//declaring states
	state ={
		titleInput:'',
		descriptionInput:'',
		postListing: [],
		search:'',
	}

	//save in local storage function
	componentDidMount(){
		if(localStorage.getItem('postListing')){
		let postL = JSON.parse(localStorage.getItem('postListing'))
		this.setState({postListing:postL})
	}
}

	//add function
	handleSubmit = e => {
		e.preventDefault();
		let postL = [...this.state.postListing, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
		localStorage.setItem('postListing', JSON.stringify(postL))
		e.target.reset()
	}

	//Binding function to link real time while typing
	titleBind = e => {
		this.setState({titleInput: e.target.value})
	}
	
	//Binding function to link real time while typing
	descriptionBind = e => {
		this.setState({descriptionInput: e.target.value})
	}
	
	//function to target search values
	searchInfo = e =>{
	this.setState({search: e.target.value})
	}

	render() { 
		//const{search} = this.state
		//loop through postListingArray
	// 	let searchlist = this.state.postListing.filter(searchFor(search)).map((element,i) => {
	// 		return <Search key={i} val={element}/>
	// })

	return (
		<div style={styles.container}>
			<Row style={styles.bodyRow}>
				<Col sm={12} lg={7} style={styles.col} >
					<div style={styles.divform}>
						<MyForm style={styles.divform} titleBind={this.titleBind} titleInput={this.state.titleInput} descriptionBind={this.descriptionBind} descriptionInput={this.state.descriptionInput} handleSubmit={this.handleSubmit} />
					</div>
				</Col>
				<Col sm={12} lg={7} style={styles.col} >
					The post should go here. Post and messages are two different arrays.
				</Col>
				</Row>
			</div>
		);
	}
}

export default NewsFeed;

const styles ={
	// container:{
	// 	backgroundImage: 'url(' + imgUrl + ')',						
	// 	height:'auto',
	// 	overflow:'hidden',
	// },
	// headerRow:{
	// 	padding:'2%',
	// 	backgroundColor:'white',
	// 	marginTop:'0',
	// 	width:'100%',
	// },
	// searchRow:{
	// paddingLeft:'2%',
	// paddingRight:'2%',
	// paddingBottom:'2%',											  
	// backgroundColor:'white',
	// justifyContent:'center',
	// },
	// bodyRow:{
	// 	marginTop:'5%',
	// 	marginBottom:'3%',
	// 	paddingTop:'2%',
	// 	paddingBottom:'3%',
	// 	textAlign:'center',
	// 	backgroundColor:'rgba(24, 8, 0, 0.4)',
	// 	border:'3px solid rgba(24, 8, 0)',
	// },
	// mainRow:{
	// 	marginTop:'3%',
	// 	marginBottom:'3%',
	// 	paddingTop:'2%',
	// 	paddingBottom:'3%',
	// 	textAlign:'center',
	// 	backgroundColor:'rgba(24, 8, 0, 0.4)',
	// 	border:'3px solid rgba(24, 8, 0)',
	// },
	// footerRow:{
	// 	backgroundColor:'white',							
	// },							
	// col:{						
	// 	height:'auto',
	// 	padding:'1%',								
	// },
	// logo:{
	// 	float:'left',
	// 	marginTop:'0%',									  
	// },
	// avatar:{
	// 	float:'right',
	// 	marginRight:'3%',
	// },
	// p:{
	// 	display:'none',									
	// },
	// search:{
	// 	height:'32px',
	// 	backgroundColor:'rgba(231, 231, 231, 0.8)',
	// 	marginTop:'13%',
	// },
	// searchL:{
	// color:'grey',
	// listStyleType:'none',
	// marginTop:'3%',
	// },
	// goS:{
	// 	float:'right',
	// 	marginTop:'-3%',
	// 	marginRight:'2%',
	// },
	// 	divSBLeft:{
	// 	height:'100%',
	// 	border:'3px solid rgba(135, 135, 135)',
	// 	borderRadius:'5px', 
	// },
	// 	divform:{
	// 	height:'auto',
	// 	backgroundColor:'rgba(135, 135, 135, 0.6)',
	// },
	// 	divSBRight:{
	// 	height:'100%',
	// 	border:'3px solid rgba(135, 135, 135)',
	// 	borderRadius:'5px',
	// },
}