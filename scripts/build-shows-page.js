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

    // const showsTable = document.createElement("table");
    // const tbody = document.createElement("ul");
    // tbody.classList.add("showslist");
    // const trOne = document.createElement("tr");
    // trOne.classList.add("showslist__headings");
    const dateT = document.createElement("li");
    dateT.classList.add("showslist__headings--hidden")
    dateT.classList.add("showslist__headings")
    const venueT = document.createElement("li");
    venueT.classList.add("showslist__headings--hidden")
    venueT.classList.add("showslist__headings")
    const locationT = document.createElement("li");
    locationT.classList.add("showslist__headings--hidden")
    locationT.classList.add("showslist__headings")

    const trTwo = document.createElement("ul");
    trTwo.classList.add("showslist__data")
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
    // showsTable.appendChild(tbody);
    // tbody.appendChild(trOne);
    trTwo.appendChild(dateT);
    trTwo.appendChild(dateItem);
    trTwo.appendChild(venueT);
    trTwo.appendChild(venueItem);
    trTwo.appendChild(locationT);
    trTwo.appendChild(locationItem);
    // tbody.appendChild(trTwo);
    showsContainer.appendChild(btn);

});





// <div>
//                 <table>
//                     <tbody class="showslist">
//                         <tr class="showslist__headings">
//                             <th>Date</th>
//                             <th>Mon Sept 06 2021</th>
//                             <th>Venue</th>
//                         </tr>
//                         <tr class="showslist__data">
//                             <li class="showslist__date-item">Ronald Lane</li>
//                             <li class="showslist__venue-item">Location</li>
//                             <li class="showslist__location-item">San Francisco, CA</li>
//                     </tbody>
//                 </table>
//                 <button class="btn showslist__ticket-item">Buy Tickets</button>
//                 </div>






















// const showsArray = [
//     {
//         date: "Mon Sept 06 2021",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Tue Sept 21 2021",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Fri Oct 15 2021",
//         venue: "View Lounge",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Sat Nov 06 2021",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Fri Nov 26 2021",
//         venue: "Moscow Center",
//         location: "San Francisco, CA"
//     },
//     {
//         date: "Wed Dec 15 2021",
//         venue: "Press Club",
//         location: "San Francisco, CA"
//     },

// ];

// console.log("Hello World!");

// showsArray.forEach((show) => {
//     const container = document.querySelector(".shows");
//     const showsContainer = document.createElement("div");
//     showsContainer.classList.add("shows__container");

//     const showsTable = document.createElement("table");
//     const tbody = document.createElement("tbody");
//     tbody.classList.add("showslist");
//     const dateT = document.createElement("td");
//     dateT.classList.add("showslist__headings--hidden")
//     const venueT = document.createElement("td");
//     venueT.classList.add("showslist__headings--hidden")
//     const locationT = document.createElement("td");
//     locationT.classList.add("showslist__headings--hidden")

//     const trTwo = document.createElement("tr");
//     trTwo.classList.add("showslist__data")
//     const dateItem = document.createElement("td");
//     dateItem.classList.add("showslist__date-item");
//     const venueItem = document.createElement("td");
//     venueItem.classList.add("showslist__venue-item");
//     const locationItem = document.createElement("td");
//     locationItem.classList.add("showslist__location-item");

//     const btn = document.createElement("button");
//     btn.classList.add("btn" + "showslist__ticket-item");

//     btn.textContent = "Buy Tickets"
//     dateT.textContent = "Date";
//     venueT.textContent = "Venue";
//     locationT.textContent = "Location";
//     dateItem.textContent = show.date;
//     venueItem.textContent = show.venue;
//     locationItem.textContent = show.location;

//     container.appendChild(showsContainer);
//     showsContainer.appendChild(showsTable);
//     showsTable.appendChild(tbody);
//     trTwo.appendChild(dateT);
//     trTwo.appendChild(dateItem);
//     trTwo.appendChild(venueT);
//     trTwo.appendChild(venueItem);
//     trTwo.appendChild(locationT);
//     trTwo.appendChild(locationItem);
//     tbody.appendChild(trTwo);
//     showsContainer.appendChild(btn);

// });