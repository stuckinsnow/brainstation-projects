import './UploadPage.scss';
import publishIcon from '../../assets/icons/publish.svg';

function UploadPage() {
  return (
    <main>

      <section>
        <h1>Upload Video</h1>
      </section>


      <div className='ulp'>
      <div>
        <span>Video Thumbnail</span>
          <img src="" alt="" />
      </div>
        <form className='up-form'>
          <label htmlFor="video-title">Title your video:</label>
          <textarea id="video-title" name="video-title" placeholder="Add a title to your video"></textarea>
          <label htmlFor="video-description">Video description:</label>
          <textarea id="video-description" name="video-description" placeholder="Add a description to your video"></textarea>

          <button className="btn" >
          <img src={publishIcon} alt="publish" />
          <span>Publish</span>
        </button>

        <button type="button">Cancel</button>

        </form>
      </div>
    </main>
  );
}

export default UploadPage;
