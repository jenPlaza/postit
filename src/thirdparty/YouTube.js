// JavaScript Document
import React from 'react';
import YouTube from 'react-youtube';

//Smart Component
class ThirdParty extends React.Component {
	
	  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
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