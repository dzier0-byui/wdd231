async function getEvents() {
    const response = await fetch("data/events.json");
    const data = await response.json();
    displayEvents(data.events);
}

function displayEvents(events) {
    const container = document.getElementById("events-grid");
    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <h2>${event.title}</h2>
            <p>${event.time}</p>
            <p>${event.location}</p>
            <p>${event.description}</p>
        `;

        container.appendChild(card);
    });
}

getEvents();