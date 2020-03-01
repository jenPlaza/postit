import React from 'react';
import ListItem from '../components/listitems/ListItems';
import MyForm from '../components/myForm/MyForm';
/*import Search from '../components/search/Search';*/

//Material UI
import Grid from '@material-ui/core/Grid';

/*function searchMe(search){
	return function(searchTitle){
		return searchTitle.postTitle.toLowerCase().includes(search.toLowerCase()) || !search
	}
}*/

class NewsFeed extends React.Component {
	state ={
		titleInput:'',
		descriptionInput:'',
		postTitle:'',
		postDescription:'',
		postListing: [],
		search:'',
	}

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
	
	/*searchInfo = e =>{
	this.setState({search: e.target.value})
}	*/
	render() { 
		/*const{search} = this.state
		let searchlist = this.state.postListing.filter(searchMe(search)).map((element,i) => {
			  return <Search key={i} val={element}/>
	  })*/
	  
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

