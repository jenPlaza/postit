// JavaScript Document
import React from 'react';
import SearchInput from '../../components/search/SearchInput';

//Material UI
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';

//Images & Icons
import logo from '../../images/postIt.png';
import {GoSearch} from 'react-icons/go';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

class Header extends React.Component {
Link() {
  return (
    <Typography display="block" align="center" >
      	<Link style={styles.typography} href="http://localhost:3000/Account">
	  		<SettingsIcon />
	  	</Link>
    </Typography>
  );
}

render(){
return(
    <div style={styles.container}>
		<Box component="span" display="inline" p={1} m={1} style={styles.col}><this.Link /></Box>
		<Box component="span" display="inline" p={1} m={1} style={styles.colName}><p style={styles.typography}>Bryan Rogers</p></Box>
		<Box component="span" display="inline" p={1} m={1} style={styles.col}><AccountBoxIcon /></Box>
	
		<Grid container spacing={1}>
	  	<Grid item xs={12} md={4}>
				<img style={styles.logo} src={logo} alt="Logo icon"/>		
        </Grid>
        <Grid item xs={12} style={styles.searchBox} >
        		<SearchInput style={styles.search}/>
				<GoSearch style={styles.goS}/>
        </Grid>
      </Grid>
    </div>
  );
 }
}

export default Header

const styles ={
	container:{				
		flexGrow:'1',
		overflow:'hidden',
		textAlign:'left',
	},
	col:{
		float:'right',
	},
	colName:{
		float:'right',
		padding:'0',
		margin:'0%',
	},
	typography:{
		color:'#ea7a0f',
	},
	logo:{
		width:'115%',
		marginTop:'-15%',
	},
	searchBox:{
	backgroundColor:'rgba(231, 231, 231, 0.8)',
	border:'none',
	},
	search:{
		height:'32px',
		backgroundColor:'rgba(231, 231, 231, 0.8)',
	},
	goS:{
		float:'right',
		marginTop:'-2.25%',
		marginRight:'2%',
		backgroundColor:'transparent',
	}
}
