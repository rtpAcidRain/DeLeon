import { FC, MouseEvent, MouseEventHandler, useEffect, useRef, useState } from 'react';

import styles from './videoPlayer.module.scss';

import playSvg from '../../../assets/images/play.svg';
import pauseSvg from '../../../assets/images/pause.svg';

type Props = {
  preview: string;
  videoInMp?: any;
  videoInWebm?: any;
  width?: string;
  height?: string;
};

const VideoPlayer: FC<Props> = ({
  preview,
  videoInMp = '',
  videoInWebm = '',
  width = '640px',
  height = '270px',
}) => {
  const [player, setPlayer] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerBar = useRef<HTMLDivElement>(null);
  const playerPoint = useRef<HTMLDivElement>(null);

  const controlVideo = () => {
    if (player) {
      videoRef.current?.pause();
      setPlayer(false);
    } else {
      videoRef.current?.play();
      setPlayer(true);
    }
  };

  const onTimeUpdate = () => {
    if (videoRef.current?.currentTime) {
      setCurrentTime((videoRef.current?.currentTime / videoRef.current?.duration) * 100);
    }
  };

  const setProgress = (e: MouseEvent<HTMLDivElement>) => {
    const width = e.currentTarget.clientWidth;
    const click = e.nativeEvent.offsetX;
    if (videoRef.current) {
      const duration = videoRef.current?.duration;
      videoRef.current.currentTime = (click / width) * duration;
    }
  };

  useEffect(() => {
    if (currentTime === 100) {
      setPlayer(false);
    }
  }, [currentTime]);

  function onMouseMove() {
    console.log('asdad');
  }

  const Dragdown = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.zIndex = '1000';

    document.addEventListener('mousemove', onMouseMove);
  };

  useEffect(() => {
    document.addEventListener('mouseup', () =>
      document.removeEventListener('mousemove', onMouseMove),
    );

    return () => {
      document.removeEventListener('mouseup', () =>
        document.removeEventListener('mousemove', onMouseMove),
      );
    };
  }, []);

  return (
    <div className={styles.videoplayer} style={{ maxWidth: `${width}`, maxHeight: `${height}` }}>
      <video
        className={styles.video}
        ref={videoRef}
        onTimeUpdate={onTimeUpdate}
        id="my_video_1"
        preload="none"
        poster={preview}>
        <source src={videoInMp} type="video/mp4" />
      </video>
      <div className={styles.player__container}>
        <div className={styles.player__buttons}>
          <button onClick={controlVideo} className={styles.buttons__playstart}>
            <img src={player ? pauseSvg : playSvg} alt={player ? 'play' : 'pause'} />
          </button>
        </div>
        <div className={styles.player__bar}>
          <div className={styles.bar__line}>
            <div ref={playerBar} className={styles.line__container} onClick={(e) => setProgress(e)}>
              <div
                ref={playerPoint}
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(event) => Dragdown(event)}
                className={styles.line__point}
                style={{ left: `${currentTime}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
