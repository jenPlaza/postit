// JavaScript Document
import React from 'react';
import YouTube from '../thirdparty/YouTube';

//Material UI
import Grid from '@material-ui/core/Grid';
 
//Smart Component
class Watch extends React.Component {
	render(){
	return(
		<div>
			<Grid container>
				<Grid item xs={12} lg={3} style={styles.video}>
					<YouTube  videoId='0ujjBmVkYhg' />
				</Grid>
				<Grid item xs={12} lg={3} style={styles.video}>
					<YouTube videoId='sioZd3AxmnE' />
				</Grid>
				<Grid item xs={12} lg={3} style={styles.video}>
					<YouTube videoId='ab3Sy-HnUB0' />
				</Grid>
			</Grid>
		</div>
		);
	}
}

export default Watch

const styles ={
		video:{
			marginRight:'8%',
	}
}