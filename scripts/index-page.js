const commentsForm = document.querySelector('.form');
const parentDiv = document.querySelector('#commentsection');
const commentsArray = [];
function displayComment(commentsArray) {
  parentDiv.innerText = '';

  commentsArray.forEach(commentsObj => {
    const img = document.createElement("img");
    img.src = "./assets/images/Mohan-muruge.jpg";
    const name = document.createElement("div");
    name.innerText = commentsObj.name;
    name.classList.add("comment__name");
    const date = document.createElement("div");
    date.innerText = new Date(commentsObj.timestamp).toLocaleDateString("en-US",
      {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    // line 13 from chatGPT
    date.classList.add("comment__date");
    const comment = document.createElement("div");
    comment.classList.add("comment");
    const commentMiniWrapper = document.createElement("div");
    commentMiniWrapper.classList.add("comment__miniwrapper");
    commentMiniWrapper.innerText = commentsObj.comment;
    const commentWrapper = document.createElement("div");
    commentWrapper.classList.add("comment__wrapper");
    const commentInfo = document.createElement("div");
    commentInfo.classList.add("comment__info");
    const imgElementBigWrapper = document.createElement("div");
    imgElementBigWrapper.classList.add("comment__pic");
    const imgElementWrapper = document.createElement("div");
    comment.appendChild(commentWrapper);
    comment.appendChild(imgElementBigWrapper);
    commentWrapper.appendChild(commentInfo);
    commentInfo.appendChild(name);
    commentInfo.appendChild(date);
    commentWrapper.appendChild(commentMiniWrapper);
    imgElementBigWrapper.appendChild(imgElementWrapper);
    imgElementWrapper.appendChild(img);
    parentDiv.appendChild(comment);
  })
};
function getCommentsApiDisplayToDom() {
  axios.get('https://project-1-api.herokuapp.com/comments/?api_key=18b4fbf3-5f47-4e45-97a9-ff453c63e414')
    .then(response => {
      const sortedComments = response.data.sort((a, b) => b.timestamp - a.timestamp);
      displayComment(sortedComments);
    })
    .catch(error => console.log(error));
}
function addComment(commentsObj) {
  axios.post('https://project-1-api.herokuapp.com/comments?api_key=18b4fbf3-5f47-4e45-97a9-ff453c63e414', commentsObj)
    .then(() => {
      getCommentsApiDisplayToDom();
    })
    .catch(error => console.log(error));
}

commentsForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = event.target.nameTitle.value;
  const comment = event.target.contentTitle.value;
  if (!comment) {
    alert('Comment cannot be empty');
    return;
  }
  addComment({ name, comment });
  event.target.reset();
});
getCommentsApiDisplayToDom();