import './CommentList.scss';

function CommentContainer({CommentList, activeVideo, formatDate}) {

  return (
    <>
      <section className="com-container">
        <h2>Join the Conversation</h2>
        <div className="newcomment">
          <div className="newcomment__pic">
            <div><img src="" alt="comment-pic" /></div>
          </div>
          <form className="form">
            <label className="form__label" htmlFor="name">Name</label>
            <textarea className="form__name" placeholder="Enter your name" name="nameTitle" id="name-submission"></textarea>
            <label className="form__label" htmlFor="content">Comment</label>
            <textarea className="form__content" placeholder="Add a new comment" name="contentTitle" id="" cols="30" rows="10"></textarea>
            <button className="btn" type="submit">Comment</button>
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
