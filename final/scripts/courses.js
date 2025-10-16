async function getCourses() {
    try {
        const response = await fetch("data/courses.json"); 
        const data = await response.json();
        displayCourses(data.courses);
    } catch (error) {
        console.error("Error loading courses:", error);
    }
}

function displayCourses(courses) {
    const container = document.getElementById("local-courses-grid");
    if (!container) {
        console.error("Container not found!");
        return;
    }

    container.innerHTML = "";

    courses.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        card.innerHTML = `
        <h2 class="course-title">${course.name}</h2>
        <figure>
            <img src="${course.image}" alt="${course.name}" loading="lazy">
            <figcaption>${course.address}</figcaption>
        </figure>
        <p class="description">${course.description}</p>
        <ul class="course-details">
            <li><strong>Price Range:</strong> ${course.priceRange}</li>
            <li><strong>Difficulty:</strong> ${course.difficulty}</li>
            <li><strong>Features:</strong> ${course.features.join(", ")}</li>
        </ul>
        <a href="${course.website}" class="learn-more" target="_blank" rel="noopener">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

getCourses();