// JavaScript Document
import React from 'react';
import YouTube from '../thirdparty/YouTube';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//style
const useStyles = makeStyles((theme) => ({
  video: {
    marginTop: '3%',
    marginBottom: '3%',
  },
}));

//exporting class watch
export default function Watch() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.video}>
          <YouTube videoId="0ujjBmVkYhg" />
        </Grid>
        <Grid item xs={12} className={classes.video}>
          <YouTube videoId="sioZd3AxmnE" />
        </Grid>
        <Grid item xs={12} className={classes.video}>
          <YouTube videoId="ab3Sy-HnUB0" />
        </Grid>
      </Grid>
    </div>
  );
}
