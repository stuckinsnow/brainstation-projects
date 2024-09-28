function displayShows(showsArray) {
  showsArray.forEach((datesObj) => {
    const container = document.querySelector(".shows");
    const showsContainer = document.createElement("div");
    showsContainer.classList.add('shows__container', 'shows__container--JS');
    const dateT = document.createElement("li");
    dateT.classList.add('showslist__headings--hidden', 'showslist__headings');
    const venueT = document.createElement("li");
    venueT.classList.add('showslist__headings--hidden', 'showslist__headings');
    const locationT = document.createElement("li");
    locationT.classList.add('showslist__headings--hidden', 'showslist__headings');
    // const li = document.createElement("li");
    const ul = document.createElement("ul");
    ul.classList.add("showslist");
    const dateItem = document.createElement("li");
    dateItem.classList.add("showslist__date-item");
    const venueItem = document.createElement("li");
    venueItem.classList.add("showslist__venue-item");
    const locationItem = document.createElement("li");
    locationItem.classList.add("showslist__location-item");
    const btn = document.createElement("button");
    btn.classList.add("showslist__ticket-item");
    btn.textContent = "Buy Tickets"
    dateT.textContent = "Date";
    venueT.textContent = "Venue";
    locationT.textContent = "Location";
    dateItem.innerText = new Date(datesObj.date).toDateString("en-US");
    venueItem.textContent = datesObj.place;
    locationItem.textContent = datesObj.location;
    container.appendChild(showsContainer);
    showsContainer.appendChild(ul);
    ul.appendChild(dateT);
    ul.appendChild(dateItem);
    ul.appendChild(venueT);
    ul.appendChild(venueItem);
    ul.appendChild(locationT);
    ul.appendChild(locationItem);
    showsContainer.appendChild(btn);
  })
  const showsContainer = document.querySelectorAll('.shows__container--JS');
  showsContainer.forEach((container, index) => {
    console.log(container);
    container.addEventListener('click', ()=>applyStyle(showsContainer, index));
  });
};
function getShowDatesApiDisplayToDom() {
  axios.get('https://project-1-api.herokuapp.com/showdates/?api_key=18b4fbf3-5f47-4e45-97a9-ff453c63e414')
    .then(response => {
      const sortedDates = response.data.sort((a, b) => b.timestamp - a.timestamp);
      displayShows(sortedDates);
    })
    .catch(error => console.log(error));
}
function applyStyle(showsContainer, index) {
  const selectedContainer = document.querySelector('.shows__container--selected');
  if (selectedContainer) {
    selectedContainer.classList.remove('shows__container--selected');
  }
  showsContainer[index].classList.add('shows__container--selected');
}
getShowDatesApiDisplayToDom();