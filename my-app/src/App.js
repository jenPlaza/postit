import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import SideBarLeft from './components/sidebarleft/SideBarLeft';
import Footer from './components/footer/Footer';
import SideBarRight from './components/sidebarright/SideBarRight';

//pages
import Messages from './pages/Messages';
import Watch from './pages/Watch';
import Account from './pages/Account';
import NewsFeed from './pages/NewsFeed';

//Images & Icons
import imgUrl from '../src/images/postBkg.jpg';

//Material UI
import { makeStyles, Paper, Grid } from '@material-ui/core';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Lora',
  },
  palette: {
    primary: {
      light: '#B9B9B9',
      main: '#000000',
    },
    secondary: {
      main: '#ea7a0f',
      light: 'transparent',
      contrastText: '#ffffff',
    },
  },
});

//style
const useStyles = makeStyles((theme) => ({
  root: {
    height: 'auto',
    flexGrow: 1,
    overflow: 'hidden',
  },
  headerRow: {
    padding: '1%',
    backgroundColor: 'white',
  },
  paper: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  paperRight: {
    backgroundColor: 'transparent',
    border: 'none',
    marginTop: '6%',
  },
  footerRow: {
    marginTop: '1%',
    padding: '3%',
    backgroundColor: 'white',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root} style={styles.container}>
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.headerRow}>
              <Paper className={classes.paper} variant="outlined">
                <Header />
              </Paper>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} md={3}>
                <Paper className={classes.paper} variant="outlined">
                  <SideBarLeft />
                </Paper>
              </Grid>
              <Grid item xs={12} md={5}>
                <Paper className={classes.paper} variant="outlined">
                  {/* Routes*/}
                  <Switch>
                    <Route
                      exact
                      path={process.env.PUBLIC_URL + '/'}
                      component={NewsFeed}
                    />
                    <Route
                      exact
                      path={process.env.PUBLIC_URL + '/newsfeed'}
                      component={NewsFeed}
                    />
                    <Route
                      exact
                      path={process.env.PUBLIC_URL + '/messages'}
                      component={Messages}
                    />
                    <Route
                      exact
                      path={process.env.PUBLIC_URL + '/watch'}
                      component={Watch}
                    />
                    <Route
                      exact
                      path={process.env.PUBLIC_URL + '/account'}
                      component={Account}
                    />
                  </Switch>
                </Paper>
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper className={classes.paperRight} variant="outlined">
                  <SideBarRight />
                </Paper>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.footerRow}>
              <Paper className={classes.paper} variant="outlined">
                <Footer />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(' + imgUrl + ')',
  },
};
