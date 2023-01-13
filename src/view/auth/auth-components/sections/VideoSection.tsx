import Section from "../layouts/Section";
import VideoPlayer from "../VideoPlayer";
import "video.js/dist/video-js.css";
import { isWebpSupported } from "react-image-webp/dist/utils";

import video from "../../auth-assets/videos/video.mp4";
import preview from "../../auth-assets/images/videoPreview.jpg";
import previewWebp from "../../auth-assets/images/videoPreview.webp";

import { FC, memo, useEffect, useState } from "react";
import styled from "styled-components";
import { VideoJsPlayerOptions } from "video.js";
import { H3 } from "../UI/Heading";

const Container = styled.div`
  margin: auto;
`;

const VideoSection: FC = memo(() => {
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
    preload: "none",
    sources: [
      {
        src: video as string,
        type: "video/mp4",
      },
    ],
  };

  return (
    <Section>
      <H3>Вся правда о криптовалюте</H3>
      <Container>
        <VideoPlayer
          videoOption={videoOptions}
          data-setup={`{"poster":${preview}}`}
        />
      </Container>
    </Section>
  );
});

export default VideoSection;
