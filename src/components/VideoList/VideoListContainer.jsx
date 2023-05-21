const VideoListContainer = ({ VideoListComponent, VideoListObj, activeVideo, formatDate,handleChangeActiveVideo, withEllipsis }) => {
    return (
        <section className="videocontainer">
            <h2 className="videocontainer__title">Next Videos</h2>
            <VideoListComponent VideoListObj={VideoListObj} activeVideo={activeVideo} formatDate={formatDate} handleChangeActiveVideo={handleChangeActiveVideo} withEllipsis={withEllipsis} />
        </section>
    );
};

export default VideoListContainer;
