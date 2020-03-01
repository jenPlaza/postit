// JavaScript Document
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles(theme => ({
  root: {
    width:'90%',
		height:'100%',
		marginLeft:'5%',
  },
	btn:{
		fontSize:'1.25em',
		marginTop:'5%',
		color:theme.palette.secondary.main,
	}
}));

const Links = () => {
  return (
    <Typography display="block" variant="body" align="left" color="secondary">
	  <Box component="span" display="block" p={2} m={1} >
      	<Link color="inherit" href="http://localhost:3000/NewsFeed">News Feed</Link>
	  	{' '}
	  </Box>
	  <Box component="span" display="block" p={2} m={1} >
	  	<Link color="inherit" href="http://localhost:3000/Messages">Messages</Link>
	  	{' '}
	  </Box>
	  <Box component="span" display="block" p={2} m={1} >
	  	<Link color="inherit" href="http://localhost:3000/Watch">Watch</Link>
	  	{' '}
	   </Box>
    </Typography>
  );
}


export default function SideBarLeft() {
  const classes = useStyles();
  return (
		<Container className={classes.root}>
			<Grid container>
				<Grid item md={12} className={classes.btn}>
					<Links />
				</Grid>
			</Grid>
		</Container>
    );
}
