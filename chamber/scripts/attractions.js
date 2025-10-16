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
            </div>
        </div>
        `;

        container.appendChild(card);
    });
}

getAttractions();