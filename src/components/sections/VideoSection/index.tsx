import Section from '../../layouts/Section';
import VideoPlayer from '../../UI/VideoPlayer';

import styles from './videoSection.module.scss';

import video from '../../../assets/videos/video.mp4';
import preview from '../../../assets/images/videoPreview.jpg';

type Props = {};

const VideoSection = (props: Props) => {
  return (
    <Section>
      <div className={styles.root}>
        <VideoPlayer preview={preview} width="807px" height="514px" videoInMp={video} />
      </div>
    </Section>
  );
};

export default VideoSection;
