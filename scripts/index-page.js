const commentsForm = document.querySelector('.form');
const commentsArray = [
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me oosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
    {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },

];

for (let i = 0; i < commentsArray.length; i++) {
}


function appendComments() {

    commentsArray.forEach((commentsObj) => {

        const parentDiv = document.querySelector('#commentsection');

        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const commentElement = document.createElement("div");
        commentElement.innerHTML = commentsObj.comment;
        commentElement.classList.add("comment__miniwrapper");

        const dateElement = document.createElement("div");
        dateElement.innerHTML = commentsObj.date;
        dateElement.classList.add("comment__date");

        const nameElement = document.createElement("div");
        nameElement.innerHTML = commentsObj.name;
        nameElement.classList.add("comment__name");

        const img = document.createElement("img");
        img.src = "./assets/images/Mohan-muruge.jpg";

        const commentInfo = document.createElement("div");
        commentInfo.classList.add("comment__info");

        const imgElementWrapper = document.createElement("div");

        const imgElementBigWrapper = document.createElement("div");
        imgElementBigWrapper.classList.add("comment__pic");


        const commentWrapper = document.createElement("div");
        commentWrapper.classList.add("comment__wrapper");

        commentInfo.appendChild(nameElement);
        commentInfo.appendChild(dateElement);
        commentWrapper.appendChild(commentInfo);

        commentWrapper.appendChild(commentElement);

        commentDiv.appendChild(commentWrapper);
        imgElementWrapper.appendChild(img);
        imgElementBigWrapper.appendChild(imgElementWrapper);
        commentDiv.appendChild(imgElementBigWrapper);
        parentDiv.appendChild(commentDiv);

        console.log(commentsArray);
    });
}

commentsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (event.target.contentTitle.value === '') {
        alert('empty');
        return;
    }
    const date = new Date();
    const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('en-US', options).replace(/\//g, '/');

    const commentsObj = {
        name: event.target.contentTitle.value,
        comment: event.target.nameTitle.value,
        date: formattedDate
    };
    commentsArray.unshift(commentsObj);

    const parentDiv = document.querySelector('#commentsection');
    parentDiv.innerText = "";
    appendComments();
});

appendComments();