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

console.log("Hello World!");

showsArray.forEach((show) => {
    const container = document.querySelector(".shows");
    const showsContainer = document.createElement("div");
    showsContainer.classList.add("shows__container");

    const showsTable = document.createElement("table");
    const tbody = document.createElement("tbody");
    tbody.classList.add("showslist");
    const trOne = document.createElement("tr");
    trOne.classList.add("showslist__headings");
    const thOne = document.createElement("th");
    const thTwo = document.createElement("th");
    const thThree = document.createElement("th");

    const trTwo = document.createElement("tr");
    trTwo.classList.add("showslist__data")
    const tdOne = document.createElement("td");
    tdOne.classList.add("showslist__date-item");
    const tdTwo = document.createElement("td");
    tdTwo.classList.add("showslist__venue-item");
    const tdThree = document.createElement("td");
    tdThree.classList.add("showslist__location-item");

    const btn = document.createElement("button");
    btn.classList.add("btn" + "showslist__ticket-item");

    btn.textContent = "Buy Tickets"
    thOne.textContent = show.date;
    thTwo.textContent = show.venue;
    thThree.textContent = show.location;

    container.appendChild(showsContainer);
    showsContainer.appendChild(showsTable);
    showsTable.appendChild(tbody);
    tbody.appendChild(trOne);
    trOne.appendChild(thOne);
    trOne.appendChild(thTwo);
    trOne.appendChild(thThree);
    tbody.appendChild(trTwo);
    trTwo.appendChild(tdOne);
    trTwo.appendChild(tdTwo);
    trTwo.appendChild(tdThree);
    showsContainer.appendChild(btn);

});