import React from 'react';
import ListItem from '../components/listitems/ListItems';
import MyForm from '../components/myForm/MyForm';

//Material UI
import Grid from '@material-ui/core/Grid';

//Smart component
class NewsFeed extends React.Component {
	state ={
		titleInput:'',
		descriptionInput:'',
		postTitle:'',
		postDescription:'',
		postListing: [],
		search:'',
	}

//use componentDidMount to store new post listing onto object
	componentDidMount(){
	if(localStorage.getItem('postListing')){
		let postL = JSON.parse(localStorage.getItem('postListing'))
		this.setState({postListing:postL})
	}
}

//function to add a new post using arrow function expressions
	handleSubmit = e => {
	e.preventDefault();
	let postL = [...this.state.postListing, {postTitle:this.state.titleInput, postDescription:this.state.descriptionInput}]
	localStorage.setItem('postListing', JSON.stringify(postL))
	e.target.reset()
  }
	
//function to remove a new post using arrow function expressions
	removeItem = key => {
		let postL = this.state.postListing
			this.state.postListing.splice(key,1)
		this.setState({postListing: this.state.postListing})
		localStorage.setItem('postListing', JSON.stringify(postL))
	}

	//This is how you can get multiple values from one function for your forms.
	//You get the value based off the name attribute in the jsx.
	onChange = e => {
		this.setState({[e.target.name]: e.target.value});
	}

	//binding variables to real time
	titleBind = e => {
		this.setState({titleInput: e.target.value})
	}
	descriptionBind = e => {
		this.setState({descriptionInput: e.target.value})
	}
	
	render() { 
			let list = this.state.postListing.map((element,i) => {
		  return <ListItem key={i} val={element} dlt={()=>this.removeItem(i)}/>
	  })
return (
		<div>
			<Grid container>
				<Grid item xs={12}>
					<div>
						<MyForm titleBind={this.titleBind} titleInput={this.state.titleInput} descriptionBind={this.descriptionBind} descriptionInput={this.state.descriptionInput} handleSubmit={this.handleSubmit} />
						{list}
					</div>
				</Grid>
			</Grid>
		</div>
		);
	}
}

export default NewsFeed;

