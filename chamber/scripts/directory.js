async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  const container = document.getElementById("members");
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

document.getElementById("grid-view").addEventListener("click", () => {
  document.getElementById("members").classList.add("grid-view");
  document.getElementById("members").classList.remove("list-view");
});

document.getElementById("list-view").addEventListener("click", () => {
  document.getElementById("members").classList.add("list-view");
  document.getElementById("members").classList.remove("grid-view");
});

getMembers();