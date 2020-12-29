import { useEffect,useState } from 'react';
import styles from './App.module.css';
import Search_header from './components/search_header/Search_header';
import VideoDetail from './components/video_detail/VideoDetail';
import Video_list from './components/video_list/Video_list';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const selectVideo = (video) =>{
    setSelectedVideo(video);
  }
  
  const search = query =>{
    youtube
      .search(query)
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };
    useEffect(()=>{
      youtube
        .mostPopular()
        .then(videos => setVideos(videos))
    },[youtube]);



    //mount가 돼었을때만 위에 함수 호출
    return (
      <div className={styles.app}>
        <Search_header onSearch={search} />
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo}/>
            </div>
          )}
          <div className={styles.list}>
            <Video_list videos={videos} onVideoClick={selectVideo} display={ selectedVideo ? 'list' : 'grid' }/>
          </div>
        </section>
      </div>
    );
  }

export default App;
