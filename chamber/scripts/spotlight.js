async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    const filteredMembers = data.members.filter(member => 
        member.membership === "Silver" || member.membership === "Gold"
    );

    const randomMembers = getRandomMembers(filteredMembers, 3);

    displayGridMembers(randomMembers);
}

function getRandomMembers(members, count) {
    const shuffled = [...members].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displayGridMembers(members) {
    const container = document.getElementById("members-grid");
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p class="membership">Membership: ${member.membership}</p>
        `;

        container.appendChild(card);
    });
}

getMembers();