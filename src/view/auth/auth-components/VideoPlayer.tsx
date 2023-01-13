import React, { FC, useEffect, useRef } from 'react';
import videojs, { VideoJsPlayerOptions } from 'video.js';

import '../../../scss/auth-styles/videoplayer.scss';

type Props = {
  videoOption: VideoJsPlayerOptions;
};

const VideoPlayer: FC<Props> = ({ videoOption }) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const player = playerRef.current;

    if(!player) {
      const videoElement = videoRef.current
      
      if(!videoElement) return
      playerRef.current = videojs(videoElement, videoOption)
    }

    return () => {
      if (player ) {
        player.dispose();
        playerRef.current = null;
      }
    };
  // eslint-disable-next-line
  }, [])


  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
};

export default VideoPlayer;
