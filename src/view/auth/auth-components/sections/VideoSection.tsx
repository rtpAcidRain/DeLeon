import Section from '../layouts/Section';
import VideoPlayer from '../VideoPlayer';
import 'video.js/dist/video-js.css';
import { isWebpSupported } from 'react-image-webp/dist/utils';

import video from '../../auth-assets/videos/video.mp4';
import preview from '../../auth-assets/images/videoPreview.jpg';
import previewWebp from '../../auth-assets/images/videoPreview.webp';

import {FC, memo, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import videojs, { VideoJsPlayerOptions } from 'video.js';

const Container = styled.div`
  margin: auto;
`;

const VideoSection: FC = memo(() => {
  const playerRef = useRef<videojs.Player | null>(null)
  const [previewImage, setPreviewImage] = useState(preview);

  useEffect(() => {
    if (isWebpSupported) {
      setPreviewImage(previewWebp);
    }
  }, []);

  const videoOptions: VideoJsPlayerOptions = {
    autoplay: false,
    controls: true,
    poster: previewImage,
    preload: 'none',
    sources: [
      {

        src: video as string,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player: videojs.Player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };


  return (
    <Section>
      <Container>
        <VideoPlayer onReady={handlePlayerReady} videoOption={videoOptions} data-setup={`{"poster":${preview}}`} />
      </Container>
    </Section>
  );
});

export default VideoSection;
