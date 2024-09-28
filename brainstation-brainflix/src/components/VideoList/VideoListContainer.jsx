import VideoList from './VideoList';

const VideoListContainer = ({ videoList, activeVideo, formatDate,handleChangeActiveVideo, withEllipsis, useState, useEffect }) => {
    return (
        <section className="videocontainer">
            <h2 className="videocontainer__title">Next Videos</h2>
            <VideoList videoList={videoList} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo} withEllipsis={withEllipsis} useState={useState} useEffect={useEffect}/>
        </section>
    );
};

export default VideoListContainer;
