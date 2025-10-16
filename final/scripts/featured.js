async function getFeaturedCourses() {
  try {
    const response = await fetch("data/courses.json");
    const data = await response.json();

    const shuffled = data.courses.sort(() => 0.5 - Math.random());
    const featured = shuffled.slice(0, 3);

    displayFeaturedCourses(featured);
  } catch (error) {
    console.error("Error loading featured courses:", error);
  }
}

function displayFeaturedCourses(courses) {
  const container = document.getElementById("featured-courses-grid");
  if (!container) return;

  container.innerHTML = "";

  courses.forEach(course => {
    const article = document.createElement("article");
    article.classList.add("course-card");

    article.innerHTML = `
      <img src="${course.image}" alt="${course.name}" loading="lazy">
      <h3>${course.name}</h3>
      <p>${course.description}</p>
      <a href="${course.website}" class="learn-more" target="_blank" rel="noopener">Visit Course</a>
    `;

    container.appendChild(article);
  });
}

getFeaturedCourses();