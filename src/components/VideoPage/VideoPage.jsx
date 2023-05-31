import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { useEffect, useState } from 'react';
import CommentContainer from '../CommentList/CommentContainer';
import CommentList from '../CommentList/CommentList';
import VideoInfo from '../VideoInfo/VideoInfo';
import VideoListContainer from '../VideoList/VideoListContainer';
import { formatDate, withEllipsis } from '../utils/utils';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function VideoPage() {
  const { id } = useParams();
  const [video] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [activeVideo, setActiveVideo] = useState({});

  const publicPath = 'http://localhost:8080'

  useEffect(() => {
    axios
      .get(publicPath + `/videos`)
      .then((response) => {
        setVideoList(response.data);

        if (!id) {
          axios
            .get(publicPath + `/videos/${response.data[0].id}`)
            .then((response) => {
              setActiveVideo(response.data);
            })
        }
      });
  }, []);

  useEffect(() => {

    if (id) {
      axios
        .get(publicPath + `/videos/${id}`)
        .then((response) => {
          setActiveVideo(response.data);
        })
    }

  }, [id]);

  const handleChangeActiveVideo = (id) => {
    const foundVideo = video.find((video) => video.id === id);
    setActiveVideo(foundVideo);
  }

  return (
    <main>

      <VideoPlayer activeVideo={activeVideo} />
      <div className='pagecontainer'>
        <div className='pagecontainer__left'>
          <VideoInfo videoList={videoList} activeVideo={activeVideo} formatDate={formatDate} />
          <CommentContainer activeVideo={activeVideo} formatDate={formatDate} CommentList={CommentList} />
        </div>
        <div className='pagecontainer__right'>
          <VideoListContainer videoList={videoList} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo} withEllipsis={withEllipsis} />
        </div>
      </div>

    </main>
  )
}

export default VideoPage