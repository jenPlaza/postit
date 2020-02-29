// JavaScript Document
import React from 'react';

//images
import logo2 from '../../images/ptBtn3.png';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Footer extends React.Component {
Copyright() {
  return (
    <Typography variant="body2" align="left" style={styles.typography}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/NewsFeed">
        Post IT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 render(){
	return(
    <div style={styles.container}>
      <Grid container spacing={3}>
	  <Grid item xs={12} md={3}>
          <Paper style={styles.paper} variant="outlined"><img src={logo2} alt="Logo2 icon" style={styles.logo2}/></Paper>
        </Grid>
	  <Grid item xs={12} md={2}>
          <Paper style={styles.paper} variant="outlined">
		<h2 style={styles.h2}>Help</h2>
					<p><a style={styles.a} href='https://reactjs.org'>Community</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Resources</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Contact</a></p>
		</Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper style={styles.paper} variant="outlined">
		<h2 style={styles.h2}>About</h2>
					<p><a style={styles.a} href='https://reactjs.org'>Company</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Blog</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Newsletter</a></p>
		</Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper style={styles.paper} variant="outlined">
		<h2 style={styles.h2}>Terms & Policies</h2>
					<p><a style={styles.a} href='https://reactjs.org'>Policies</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Terms of Use</a></p>
					<p><a style={styles.a} href='https://reactjs.org'>Code of Contact</a></p>
		</Paper>
        </Grid>
		<Grid item xs={12} md={12}>
          <Paper style={styles.paper} variant="outlined">
		<this.Copyright />
		</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
}

export default Footer

const styles ={
	container:{				
		height:'auto',
		flexGrow: 1,
		overflow:'hidden',
		textAlign:'left',
	},
	paper:{
	backgroundColor:'white',
		border:'none',
	},	
	h2:{
		fontSize:'1.25em',
		marginTop:'-0.5%',
	},
	logo2:{
		width:'25%',
		float:'right',
	},
	a:{
		color:'grey',
		textDecoration:'none',
	},
	copy:{
		marginBottom:'2%',
	},
	typography:{
		color:'#ea7a0f',
	}
}
