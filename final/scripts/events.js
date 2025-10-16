async function getEvents() {
    try {
        const response = await fetch("data/events.json"); 
        const data = await response.json();
        displayEvents(data);
    } catch (error) {
        console.error("Error loading events:", error);
    }
}

function displayEvents(events) {
    const container = document.getElementById("events-grid");
    if (!container) {
        console.error("Container not found!");
        return;
    }

    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("article");
        card.classList.add("event-card");

        card.innerHTML = `
        <h3 class="event-title">${event.name}</h3>
        <p class="event-date"><strong>Date:</strong> ${formatDate(event.date)}</p>
        <p class="event-location"><strong>Location:</strong> ${event.location}</p>
        <p class="event-description">${event.description}</p>
        <a href="${event.link}" class="btn" target="_blank" rel="noopener">Learn More</a>
        `;

        container.appendChild(card);
    });
}

function formatDate(isoDate) {
    const date = new Date(isoDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
}

getEvents();