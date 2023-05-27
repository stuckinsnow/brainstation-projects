import './UploadPage.scss';
import publishIcon from '../../assets/icons/publish.svg';
import videoPreview from '../../assets/images/Upload-video-preview.jpg';

function UploadPage() {
  const submitForm = () => {
    alert('Form submitted successfully!');
    window.location.href = '/';
  };

  const clickHandler = () => {
    submitForm();
  };

  return (
    <main id="upload-page">
      <section className="up-head">
        <h1>Upload Video</h1>
      </section>

      <div className="up-wrap">
        <div className="up-wrap__video">
          <span>Video Thumbnail</span>
          <img src={videoPreview} alt="video-title" />
        </div>

        <form className="up-wrap__form" onSubmit={submitForm}>
          <label className="up-wrap__form--titlelabel" htmlFor="video-title">
            Title your video </label>
          <textarea className="up-wrap__form--titletext" id="video-title" name="video-title" placeholder="Add a title to your video"></textarea>

          <label className='up-wrap__form--desclabel' htmlFor="video-description">
            Add a video description </label> <textarea className="up-wrap__form--desctext" id="video-description" name="video-description" placeholder="Add a description to your video"></textarea>
        </form>

        <div className="up-sub">
          <button className="btn up-sub__publish" type="submit" onClick={clickHandler}>
            <img src={publishIcon} alt="publish" />
            <span>Publish</span>
          </button>
          <button className="btn up-sub__cancel" type='button'>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default UploadPage;
