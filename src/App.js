import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SideBarLeft from './components/sidebarleft/SideBarLeft';
import Routes from './components/Routes';
import Footer from './components/footer/Footer';
import SideBarRight from './components/sidebarright/SideBarRight';

//Images & Icons
import imgUrl from '../src/images/postBkg.jpg';

//React Router
import{ BrowserRouter as Router }from 'react-router-dom'

//Material UI
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//Smart Component
class App extends React.Component {
	render() { 
	return (
		<Router>
		<div style={styles.container}>
      	<Grid container spacing={0} >
        <Grid item xs={12} style={styles.headerRow}>
          <Paper style={styles.paper} variant="outlined"><Header /></Paper>
        </Grid>
	  
		<Grid container spacing={1}>
         <Grid item xs={6} md={3}>
        <Paper style={styles.paper} variant="outlined"><SideBarLeft /></Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={styles.paper} variant="outlined"><Routes /></Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper style={styles.paper} variant="outlined"><SideBarRight /></Paper>
        </Grid>
		</Grid>
	  
	  <Grid item xs={12} style={styles.footerRow}>
          <Paper style={styles.paper} variant="outlined"><Footer /></Paper>
        </Grid>
      </Grid>
    </div>
		</Router>
		);
	}
}

export default App;

const styles ={
	container:{
		backgroundImage: 'url(' + imgUrl + ')',						
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
	},
	headerRow:{
		padding:'3%',
		backgroundColor:'white',
	},
	paper:{
		backgroundColor: "transparent",
		border:'none',
	},
	footerRow:{
		marginTop:'1%',
		padding:'3%',
		backgroundColor:'white',
	},
}