import React from 'react';

//React Router
import{ Route, Switch } from 'react-router-dom'

//pages
import Messages from '../pages/Messages'
import Watch from '../pages/Watch'
import Account from '../pages/Account'
import NewsFeed from '../pages/NewsFeed';



//Smart Component  This can be a dummy component also. It does not need a state.
class Routes extends React.Component {
	render(){
		return(
			<div style={styles.container}>
				<Switch>
					<Route exact path='/' component={NewsFeed} />
					<Route exact path='/Newsfeed' component={NewsFeed} />
					<Route exact path='/Messages' component={Messages} />
					<Route exact path='/Watch' component={Watch} />
					<Route exact path='/Account' component={Account} />
				</Switch>
			</div>
		);
	}
}
export default Routes

const styles ={
	container:{
		marginTop:'3%',
		marginLeft:'1%',
		marginRight:'0.5%',
	},
}
