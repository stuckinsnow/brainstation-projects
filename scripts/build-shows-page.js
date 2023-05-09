const showsArray = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
];
showsArray.forEach((show) => {
    const container = document.querySelector(".shows");
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");
    showsContainer.classList.add("shows__container--JS");
    const dateT = document.createElement("li");
    dateT.classList.add("showslist__headings--hidden")
    dateT.classList.add("showslist__headings")
    const venueT = document.createElement("li");
    venueT.classList.add("showslist__headings--hidden")
    venueT.classList.add("showslist__headings")
    const locationT = document.createElement("li");
    locationT.classList.add("showslist__headings--hidden")
    locationT.classList.add("showslist__headings")

    const li = document.createElement("li");

    const trTwo = document.createElement("ul");
    trTwo.classList.add("showslist")
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
    dateItem.textContent = show.date;
    venueItem.textContent = show.venue;
    locationItem.textContent = show.location;

    container.appendChild(showsContainer);
    showsContainer.appendChild(trTwo);
    trTwo.appendChild(dateT);
    trTwo.appendChild(dateItem);
    trTwo.appendChild(venueT);
    trTwo.appendChild(venueItem);
    trTwo.appendChild(locationT);
    trTwo.appendChild(locationItem);
    showsContainer.appendChild(btn);
});
function applyStyle() {
    const selectedContainer = document.querySelector('.shows__container--selected');
    if (selectedContainer) {
        selectedContainer.classList.remove('shows__container--selected');
    }
    this.classList.add('shows__container--selected');
}
const showsContainers = document.querySelectorAll('.shows__container--JS');
showsContainers.forEach(container => {
    container.addEventListener('click', applyStyle);
});