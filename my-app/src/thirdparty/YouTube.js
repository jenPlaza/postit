// JavaScript Document
import React from 'react';
import YouTube from 'react-youtube';

//Smart Component
class ThirdParty extends React.Component {
  videoOnReady(event) {
    // access to player
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: '400',
      width: '100%',
      playerVars: {
        autoplay: 1,
        mute: 1,
      },
    };

    const { videoId } = this.props;
    return (
      <YouTube videoId={videoId} opts={opts} onReady={this.videoOnReady} />
    );
  }
}

export default ThirdParty;
