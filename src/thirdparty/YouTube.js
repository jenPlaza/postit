// JavaScript Document
import React from 'react';
import YouTube from 'react-youtube';
 
//https://www.youtube.com/watch?v=-_pgcFQ0164
//https://youtu.be/-_pgcFQ0164
//https://www.youtube.com/watch?v=-__pgcFQ0164&list-PLEsfXFp6DpzQbwYDx1zgcKJ4t

//Smart Component
class ThirdParty extends React.Component {
	
	  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
		  console.log(event.target)
  }
	
	render() {
    const opts = {
      height: '190',
      width: '225',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }
    };
 
	const {videoId}= this.props
    return (
		<YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady}/>
    );
  }
}
export default ThirdParty