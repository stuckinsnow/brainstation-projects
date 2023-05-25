import './CommentList.scss';

function CommentList(props) {
  return (
    <>
      {props.activeVideo.comments?.map((comment) => {
        const formattedDate = props.formatDate(comment.timestamp);
        return (
          <div key={comment.id} className="comment">
            <div className="comment__wrapper">
              <div className="comment__info">
                <div className="comment__name">{comment.name}</div>
                <div className="comment__date">{formattedDate}</div>
              </div>
              <div className="comment__miniwrapper">{comment.comment}</div>
            </div>
            <div className="comment__pic">
              <div>
                <img src="blank" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentList;
