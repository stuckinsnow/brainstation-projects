import './App.scss';
import Header from './components/Header/Header';
// import Comments from './components/Comments/comments';
// import Comments from './components/Comments/Comments';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';
import videoListObj from "./assets/data/videos.json";
import videoDetailsObj from "./assets/data/video-details.json";
import { useState } from 'react';
import CommentList from './components/CommentList/CommentList';


function App() {

console.log('videoList: ', videoListObj);

  const [activeVideo, setActiveVideo] = useState(videoDetailsObj[0]);

  // const getCurrentVideo = (id) => {
  //   videoDetailsObj.find( (video) => video.id === id )
  // } 

  // console.log(`The current Video is: ${getCurrentVideo(activeVideo.id)}`)




  return (
    <>
      <Header />
      <main>

      <VideoPlayer activeVideo={activeVideo}/>
 

      <div>
      <h1>BMX Rampage: 2021 Highlights</h1>

      <div className='videostats'>

      <article className='videostats__author'></article>
      <article className='videostats__videos'></article>
      <article className='videostats__date'></article>
      <article className='videostats__likes'></article>

      </div>

      <div className='videoinfo'>
      </div>

      </div>

      <section className="com-container">
                <h2>Join the Conversation</h2>

                <div className="newcomment">
                    <div className="newcomment__pic">
                        <div><img src="" alt="comment-pic" /></div>
                    </div>
                    <form className="form">
                        <label className="form__label" htmlFor="name">Name</label>
                        <textarea className="form__name" placeholder="Enter your name" name="nameTitle" id="name-submission"></textarea>
                        <label className="form__label" htmlFor="content">Comment</label>
                        <textarea className="form__content" placeholder="Add a new comment" name="contentTitle" id="" cols="30" rows="10"></textarea>
                        <button className="btn" type="submit">Comment</button>
                    </form>
                </div>

                <div id="commentsection" className="comments">

                       {/* <Comments /> */}
      <CommentList activeVideo={activeVideo}/>


      </div>

      </section>

      <VideoList videoList={videoListObj} test='test test'/>


      </main>
    </>
  );
}

export default App;