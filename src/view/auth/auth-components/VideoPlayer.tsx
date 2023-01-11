import React, { FC, useEffect, useRef } from 'react';
import videojs, { VideoJsPlayerOptions } from 'video.js';

import '../../../scss/auth-styles/videoplayer.scss';

type Props = {
  videoOption: VideoJsPlayerOptions;
  onReady: (player: videojs.Player) => void
};

const VideoPlayer: FC<Props> = React.memo(({ videoOption, onReady }) => {
  const videoRef = useRef<any>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, videoOption, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    } else {
      const player = playerRef.current;

      player.autoplay(videoOption.autoplay);
      player.src(videoOption.sources);
    }
  }, [onReady, videoOption, videoRef])

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
});

export default VideoPlayer;
