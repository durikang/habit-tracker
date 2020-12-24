import React from 'react';
import styles from './video_item.module.css'
//만약 넘겨오는 파라미터의 이름을 정의하고 싶을 때
// props대신 props다음 파라미터로 넘겨오는 인자 이름
// 아래를 예를 들면 props.video 니까 {video} 로
// const Video_item = ({video}) => ( ..중략 ..)
// 혹은 {video : videoItem } => ( ..etc ..)


const Video_item = ({video: { snippet}}) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img  className={styles.thumbnail}src={snippet.thumbnails.medium.url} alt = "video thumbnail"/>
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>
    </li>
);

export default Video_item;