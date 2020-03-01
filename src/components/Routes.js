import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//React Router
import{ Route, Switch } from 'react-router-dom'

//pages
import Messages from '../pages/Messages'
import Watch from '../pages/Watch'
import Account from '../pages/Account'
import NewsFeed from '../pages/NewsFeed';

//styles
const useStyles = makeStyles(theme => ({
  root:{
		marginTop:'3%',
		marginLeft:'1%',
		marginRight:'0.5%',
	},
}));

//exporting class Routes
export default function Routes() {
  const classes = useStyles();
  return (
		<div className={classes.root}>
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
