import './VideoPlayer.scss';

function VideoPlayer(props) {
    console.log('ACTIVE VIDEO:', props.activeVideo);

    return (
        <>
            <section className="hero">

  {/* Video controls src api_key=cats */}

                <video controls className="hero__video" poster={props.activeVideo.image}>
                    <source src={props.activeVideo.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section> 

            </>
    );
}

export default VideoPlayer;