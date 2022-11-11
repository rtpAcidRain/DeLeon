import Section from '../layouts/Section';
import VideoPlayer from '../VideoPlayer';
import 'video.js/dist/video-js.css';
import { isWebpSupported } from 'react-image-webp/dist/utils';

import video from '../../auth-assets/videos/video.mp4';
import preview from '../../auth-assets/images/videoPreview.jpg';
import previewWebp from '../../auth-assets/images/videoPreview.webp';

import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { VideoJsPlayerOptions } from 'video.js';

const Container = styled.div`
  margin: auto;
`;

const VideoSection: FC = React.memo(() => {
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

  return (
    <Section>
      <Container>
        <VideoPlayer videoOption={videoOptions} data-setup={`{"poster":${preview}}`} />
      </Container>
    </Section>
  );
});

export default VideoSection;
