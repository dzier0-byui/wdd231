async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayGridMembers(data.members);
    displayTableMembers(data.members);
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

function displayTableMembers(members) {
    const tbody = document.querySelector("#members-table tbody");
    tbody.innerHTML = "";

    members.forEach(member => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.address}</td>
            <td>${member.phone}</td>
            <td><a href="${member.website}" target="_blank">Visit Website</a></td>
            <td>${member.membership}</td>
        `;

        tbody.appendChild(row);
    });
}

const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");
const gridSection = document.getElementById("members-grid");
const tableSection = document.getElementById("members-table");

gridBtn.addEventListener("click", () => {
    gridSection.style.display = "grid";
    tableSection.style.display = "none";
});

listBtn.addEventListener("click", () => {
    gridSection.style.display = "none";
    tableSection.style.display = "block";
});

getMembers();