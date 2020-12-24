import React from 'react';
import Video_item from '../video_item/Video_item';
import styles from './video_list.module.css';

const Video_list = (props) => (
  <ul className={styles.videos}>
      {props.videos.map(video => <Video_item key={video.id} video={video}/>)}
  </ul>          
);

export default Video_list;