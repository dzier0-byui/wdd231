async function getAttractions() {
    const response = await fetch("data/attractions.json");
    const data = await response.json();
    displayAttractions(data);
}

function displayAttractions(attractions) {
    const container = document.getElementById("attractions-grid");
    container.innerHTML = "";

    attractions.forEach(attraction => {
        const card = document.createElement("div");
        card.classList.add("attraction-card");

        card.innerHTML = `
        <h2 class="attraction-title">${attraction.name}</h2>
        <div class="attraction-content">
            <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
            <div class="attraction-info">
                <p class="description">${attraction.description}</p>
                <p class="address">${attraction.address}</p>
                <button class="learn-more">Learn More</button>
            </div>
        </div>
        `;

        container.appendChild(card);
    });
}

getAttractions();


const messageEl = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const daysSince = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSince < 1) {
        messageEl.textContent = "Back so soon! Awesome!";
    } else if (daysSince === 1) {
        messageEl.textContent = "You last visited 1 day ago.";
    } else {
        messageEl.textContent = `You last visited ${daysSince} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);