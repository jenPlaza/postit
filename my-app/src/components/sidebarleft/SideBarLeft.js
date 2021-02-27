// JavaScript Document
import React from 'react';
//React Router
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

//Material UI
import { Grid, Container, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    color: '#ea7a0f',
  },
  btn: {
    fontSize: '1.25em',
    marginTop: '5%',
    //color: theme.palette.secondary.main,
  },
}));

const Links = () => {
  return (
    <Typography display="block" variant="body" align="left" color="secondary">
      <Box component="span" display="block" p={2} m={1}>
        <Link style={{ color: '#ea7a0f' }} to="/postit/newsfeed">
          News Feed
        </Link>{' '}
      </Box>
      <Box component="span" display="block" p={2} m={1}>
        <Link style={{ color: '#ea7a0f' }} to="/postit/messages">
          Messages
        </Link>{' '}
      </Box>
      <Box component="span" display="block" p={2} m={1}>
        <Link to="/postit/watch" style={{ color: '#ea7a0f' }}>
          Watch
        </Link>{' '}
      </Box>
    </Typography>
  );
};

//exporting class SideBarLeft
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
