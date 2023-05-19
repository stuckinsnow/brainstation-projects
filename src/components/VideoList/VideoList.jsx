import './VideoList.scss';

function VideoList(props) {
    // console.log('props: ', props);
    // console.log('props.videoList:', props.videoList);

    return (

        <>

            {props.videoList.map((video) => {
                return (
                <>
                <div>{video.id}</div>
                <div>{video.title}</div>
                <div>{video.channel}</div>
                
                </>)
            })}

        </>

    )
   
}

export default VideoList;