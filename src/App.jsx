import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import UploadPage from './components/UploadPage/UploadPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';
import VideoListObj from "./assets/data/videos.json";
import VideoDetailsObj from "./assets/data/video-details.json";
import { useState } from 'react';
import CommentContainer from './components/CommentList/CommentContainer';
import CommentList from './components/CommentList/CommentList';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoListContainer from './components/VideoList/VideoListContainer';
import { formatDate, countComments, withEllipsis } from './components/utils/utils';

function App() {
  const [video] = useState(VideoDetailsObj);
  const [activeVideo, setActiveVideo] = useState(VideoDetailsObj[0]);
  const handleChangeActiveVideo = (id) => {
    const foundVideo = video.find((video) => video.id === id);
    setActiveVideo(foundVideo);
  }

  return (
    <>
      <Header />
      <main>
        <VideoPlayer activeVideo={activeVideo} />
        <div className='pagecontainer'>
          <div className='pagecontainer__left'>
            <VideoInfo activeVideo={activeVideo} formatDate={formatDate} />
            <CommentContainer countComments={countComments} activeVideo={activeVideo} formatDate={formatDate} CommentList={CommentList} />
          </div>
          <div className='pagecontainer__right'>
            <VideoListContainer VideoListComponent={VideoList} VideoListObj={VideoListObj} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo} withEllipsis={withEllipsis} />
          </div>
        </div>

      </main>
    </>
  );
}

export default App;
