import { useEffect,useState } from 'react';
import styles from './App.module.css';
import Search_header from './components/search_header/Search_header';
import Video_list from './components/video_list/Video_list';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const search = query =>{
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };
      
    useEffect(()=>{
      youtube
        .mostPopular()
        .then(videos => setVideos(videos))
    },[]);

    //mount가 돼었을때만 위에 함수 호출

    return (
      <div className={styles.app}>
        <Search_header onSearch={search}/>
        <Video_list videos={videos} />
      </div>
    );
  }

export default App;
