import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';
import VideoListObj from "./assets/data/videos.json";
import VideoDetailsObj from "./assets/data/video-details.json";
import { useState } from 'react';
import CommentContainer from './components/CommentList/CommentContainer';
import CommentList from './components/CommentList/CommentList';
import VideoInfo from './components/VideoInfo/VideoInfo';
import VideoListContainer from './components/VideoList/VideoListContainer';

export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

export function countComments(commentDetails) {
  let totalComments = 0;

  for (let i = 0; i < commentDetails.length; i++) {
    totalComments = commentDetails[i].comments.length;
  }

  return totalComments;
}

// export function withEllipsis(text) {
//   if (text.length <= 40) {
//     return text;
//   } else {
//     return text.substring(0, 40) + "...";
//   }
// }

// My original code is above, I used chatGPT to help render the last word of the truncation. I wasn't able to achieve this with css. I don't want to use anymore code from it, but it's not responsive, so isn't quite what I want


export function withEllipsis(text) {
  const maxLength = 40;
  const tabletWidth = 768;

  if (window.innerWidth < tabletWidth && text.length > maxLength) {
    const truncatedText = text.substring(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    const truncatedLastWord = truncatedText.substring(0, lastSpaceIndex);
    return truncatedLastWord + "...";
  }
  return text;
}

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
        <VideoInfo activeVideo={activeVideo} formatDate={formatDate} countComments={countComments} />
        <CommentContainer activeVideo={activeVideo} formatDate={formatDate} CommentList={CommentList} />
        <VideoListContainer VideoListComponent={VideoList} VideoListObj={VideoListObj} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo} withEllipsis={withEllipsis} />
      </main>
    </>
  );
}

export default App;
