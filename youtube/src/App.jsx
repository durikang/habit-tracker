import { useEffect,useState } from 'react';
import styles from './App.module.css';
import Search_header from './components/search_header/Search_header';
import Video_list from './components/video_list/Video_list';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAXZM9JYij_pnd2acWUtGPn5nVWUaYqt98", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  }, []); 

  //mount가 돼었을때만 위에 함수 호출

  return (
    <div className={styles.app}>
      <Search_header />
      <Video_list videos={videos} />
    </div>
  );
}

export default App;
