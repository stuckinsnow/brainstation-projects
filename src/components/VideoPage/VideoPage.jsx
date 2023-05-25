import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoList from '../VideoList/VideoList';
import { useEffect, useState } from 'react';
import CommentContainer from '../CommentList/CommentContainer';
import CommentList from '../CommentList/CommentList';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoListContainer from '../VideoList/VideoListContainer';
import { formatDate, countComments, withEllipsis } from '../utils/utils';
import { useParams } from 'react-router-dom';
import axios from 'axios';



function VideoPage() {


  // const [video] = useState(VideoDetailsObj);
  // const [activeVideo, setActiveVideo] = useState(VideoDetailsObj[0]);
  // const handleChangeActiveVideo = (id) => {
  //   const foundVideo = video.find((video) => video.id === id);
  //   setActiveVideo(foundVideo);
  // }


  
  const {id} = useParams();
  const [video] = useState([]);

  const [videoList, setVideoList] = useState([]);
  // const [activeVideo, setActiveVideo] = useState(VideoDetailsObj[0]);
  const [activeVideo, setActiveVideo] = useState({});


  useEffect(() => {
    axios
    .get(`https://project-2-api.herokuapp.com/videos/?api_key=92ff28cd-7e73-4069-852a-6a0708f75739`)
    .then((response) => {
      // console.log('API', response);
      setVideoList(response.data);

      if (!id) {
        axios 
        .get(`https://project-2-api.herokuapp.com/videos/${response.data[0].id}?api_key=92ff28cd-7e73-4069-852a-6a0708f75739`)
        .then((response) => {
          // console.log("no id response", response);
          setActiveVideo(response.data);
        })
      }
    });
  }, []);




  console.log('apiid:', videoList[0]?.id)

  useEffect(() => {

    if(id) {
      axios 
      .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=92ff28cd-7e73-4069-852a-6a0708f75739`)
      .then((response) => {
        // console.log("response", response);
        setActiveVideo(response.data);
      })
    }

  },[id]);

  const handleChangeActiveVideo = (id) => {
    const foundVideo = video.find((video) => video.id === id);
    setActiveVideo(foundVideo);
  }

  // console.log('videolist', videoList)



  return (
    <main>
      
       <VideoPlayer activeVideo={activeVideo} />
      <div className='pagecontainer'>
        <div className='pagecontainer__left'>
          <VideoInfo videoList={videoList} activeVideo={activeVideo} formatDate={formatDate} />
          <CommentContainer countComments={countComments} activeVideo={activeVideo} formatDate={formatDate} CommentList={CommentList} />
        </div>
        <div className='pagecontainer__right'>
          <VideoListContainer videoList={videoList} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo} withEllipsis={withEllipsis} />
        </div>
      </div>

    </main>
  )
}

export default VideoPage