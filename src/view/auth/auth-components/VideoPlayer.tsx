import React, { FC, useState } from 'react';

import playSvg from '../auth-assets/images/play.svg';
import pauseSvg from '../auth-assets/images/pause.svg';

type Props = {
  preview: string;
  videoInMp?: any;
  videoInWebm?: any;
  width?: string;
  height?: string;
};

const VideoPlayer: FC<Props> = React.memo(
  ({ preview, videoInMp = '', videoInWebm = '', width = '640px', height = '270px' }) => {
    // eslint-disable-next-line
    const [player, setPlayer] = useState<boolean>(false);

    return (
      <div className="videoplayer" style={{ maxWidth: `${width}`, maxHeight: `${height}` }}>
        <video className="video" id="my_video_1" preload="none" poster={preview}>
          <source src={videoInMp} type="video/mp4" />
        </video>
        <div className="player__container">
          <div className="player__buttons">
            <button className="buttons__playstart">
              <img src={player ? pauseSvg : playSvg} alt={player ? 'play' : 'pause'} />
            </button>
          </div>
          <div className="player__bar">
            <div className="bar__line">
              <div className="line__container">
                <div className="line__point"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default VideoPlayer;
