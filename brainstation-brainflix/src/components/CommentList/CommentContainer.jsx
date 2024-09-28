import './CommentList.scss';
import avatar from '../../assets/images/Mohan-muruge.jpg';
import button from '../../assets/icons/add_comment.svg';

function CommentContainer({ CommentList, activeVideo, formatDate }) {

  return (
    <>
      <section className="com-container">

        <h2 className='com-container__comments'>{activeVideo.comments?.length} Comments</h2>
        <div className="newcomment">
          <div className="newcomment__pic">
            <div><img src={avatar} alt="comment-pic" /></div>
          </div>
          <form className="form">
            <div className='form__sub'>
              <label className="form__label" htmlFor="content">Join the conversation</label>
              <textarea className="form__content" placeholder="Add a new comment" name="contentTitle" id="" cols="" rows=""></textarea>
            </div>
            <button className="btn" type="submit">
              <img src={button} alt="button-image" />
              <span>Comment</span>
            </button>
          </form>
        </div>
        <div id="commentsection" className="comments">
          <CommentList activeVideo={activeVideo} formatDate={formatDate} />
        </div>

      </section>
    </>
  );
}

export default CommentContainer;
