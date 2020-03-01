// JavaScript Document
import React from 'react';
import SearchInput from '../../components/search/SearchInput';

//Images & Icons
import logo from '../../images/postIt.png';
import {GoSearch} from 'react-icons/go';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  root:{				
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
}));

const Links = () => {
	const classes = useStyles();
  return (
     <Typography display="block" align="center" >
      	<Link className={classes.typography} href="http://localhost:3000/Account">
	  		<SettingsIcon />
	  	</Link>
    </Typography>
  );
}

export default function Header() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
		<Box component="span" display="inline" p={1} m={1} className={classes.col}><Links /></Box>
		<Box component="span" display="inline" p={1} m={1} className={classes.colName}><p className={classes.typography}>Bryan Rogers</p></Box>
		<Box component="span" display="inline" p={1} m={1} className={classes.col}><AccountBoxIcon /></Box>
	
		<Grid container spacing={1}>
	  	<Grid item xs={12} md={4}>
				<img src={logo} alt="Logo icon"/>		
        </Grid>
        <Grid item xs={12} className={classes.searchBox} >
        		<SearchInput className={classes.search}/>
				<GoSearch className={classes.goS}/>
        </Grid>
      </Grid>
    </div>
  );
}

