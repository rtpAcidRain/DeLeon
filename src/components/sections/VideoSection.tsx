import Section from '../layouts/Section';
import VideoPlayer from '../VideoPlayer';

import video from '../../assets/videos/video.mp4';
import preview from '../../assets/images/videoPreview.jpg';
import React, { FC } from 'react';

const VideoSection: FC = React.memo(() => {
  return (
    <Section>
      <div className="video-section">
        <VideoPlayer preview={preview} width="807px" height="514px" videoInMp={video} />
      </div>
    </Section>
  );
});

export default VideoSection;
