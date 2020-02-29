// JavaScript Document
import React from "react";

//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

//Smart Component
class SideBarLeft extends React.Component {
Links() {
  return (
    <Typography display="block" variant="body" align="left">
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
	render() {
		return (
		<Container style={styles.container}>
			<Grid container>
				<Grid item md={12} style={styles.btn}>
					<this.Links />
				</Grid>
			</Grid>
		</Container>
    );
  	}
}
 
export default SideBarLeft;

const styles ={
	container:{
		width:'90%',
		height:'100%',
		marginLeft:'5%',
	},
	btn:{
		fontSize:'1.65em',
		marginTop:'5%',
		color:'white',
	}
}
