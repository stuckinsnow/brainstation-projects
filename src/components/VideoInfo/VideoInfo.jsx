import './VideoInfo.scss';

function VideoInfo(props) {
    console.log('VideoInfo: ', props.activeVideo.title);
    // h1
    console.log('VideoInfo: ', props.activeVideo.channel);
    // author
    console.log('VideoInfo: ', props.activeVideo.timestamp);
    // date
    console.log('VideoInfo: ', props.activeVideo.views);
    // views
    console.log('VideoInfo: ', props.activeVideo.likes);
    // likes 
    console.log('VideoInfo: ', props.activeVideo.description);
    // main information

    return (

        <>
            <div>
                <h1>BMX Rampage: 2021 Highlights</h1>
                <div className='videostats'>
                    <article className='videostats__author'></article>
                    <article className='videostats__videos'></article>
                    <article className='videostats__date'></article>
                    <article className='videostats__likes'></article>
                </div>
                <div className='videoinfo'></div>
            </div>
        </>
    );
}

export default VideoInfo;