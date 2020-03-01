// JavaScript Document
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//images
import logo2 from '../../images/ptBtn3.png';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root:{				
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
		width:'75%',
		marginLeft:'-15%',
		
	},
	a:{
		color:'grey',
		textDecoration:'none',
	},
	copy:{
		marginBottom:'2%',
	},
	typography:{
		color:theme.palette.secondary.main,
	}
}));

const Copyright = () => {
  const classes = useStyles();
  return (
    <Typography variant="body2" align="left" className={classes.typography}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/NewsFeed">
        Post IT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
	  <Grid item xs={0} md={2}></Grid>
	  <Grid item xs={3} md={1}>
          <Paper className={classes.paper} variant="outlined"><img src={logo2} alt="Logo2 icon" className={classes.logo2}/></Paper>
        </Grid>
	  <Grid item xs={12} md={2}>
          <Paper className={classes.paper} variant="outlined">
		<h2 className={classes.h2}>Help</h2>
					<p><a className={classes.a} href='https://reactjs.org'>Community</a></p>
					<p><a className={classes.a} href='https://reactjs.org'>Resources</a></p>
					<p><a className={classes.a} href='https://reactjs.org'>Contact</a></p>
		</Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper} variant="outlined">
		<h2 className={classes.h2}>About</h2>
					<p><a className={classes.a} href='https://reactjs.org'>Company</a></p>
					<p><a className={classes.a} href='https://reactjs.org'>Blog</a></p>
					<p><a className={classes.a} href='https://reactjs.org'>Newsletter</a></p>
		</Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper className={classes.paper} variant="outlined">
		<h2 className={classes.h2}>Terms & Policies</h2>
					<p><a className={classes.a} href='https://reactjs.org'>Policies</a></p>
					<p><a className={classes.a} href='https://reactjs.org'>Terms of Use</a></p>
					<p><a className={classes.a} href='https://reactjs.org'>Code of Contact</a></p>
		</Paper>
        </Grid>
		<Grid item xs={12} md={12}>
          <Paper className={classes.paper} variant="outlined">
		<Copyright />
		</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
