import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';
import videoListObj from "./assets/data/videos.json";
import videoDetailsObj from "./assets/data/video-details.json";
import { useState } from 'react';
import CommentContainer from './components/CommentList/CommentContainer';
import CommentList from './components/CommentList/CommentList';
import VideoInfo from './components/VideoInfo/VideoInfo';

export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

export function countComments(videoDetails) {
  let totalComments = 0;

  for (let i = 0; i < videoDetails.length; i++) {
    totalComments += videoDetails[i].comments.length;
  }

  return totalComments;
}

function App() {
  console.log('videoList: ', videoListObj);

  const [video] = useState(videoDetailsObj);
  const [activeVideo, setActiveVideo] = useState(videoDetailsObj[0]);
  const handleChangeActiveVideo = (id) => {
    const foundVideo = video.find((video) => video.id === id);
    setActiveVideo(foundVideo);
  }
  
  return (
    <>
      <Header />
      <main>
        <VideoPlayer activeVideo={activeVideo} />
          <VideoInfo activeVideo={activeVideo} formatDate={formatDate} countComments={countComments}/>
        <CommentContainer activeVideo={activeVideo} formatDate={formatDate} CommentList={CommentList} />
        <VideoList videoList={videoListObj} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo}
        />
      </main>
    </>
  );
}

export default App;
