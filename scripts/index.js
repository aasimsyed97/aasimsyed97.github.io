// ====== Dynamic Data ======
const skills = {
  frontend: [
    { name: "HTML5", icon: "./images/html-5.png" },
    { name: "CSS3", icon: "./images/css.png" },
    { name: "JavaScript", icon: "./images/java-script.png" },
    { name: "Netlify", icon: "./images/netlify.png" }
  ],
  backend: [
    { name: "Java", icon: "./images/java.png" },
    { name: "MySQL", icon: "./images/mysql.png" },
    { name: "Spring Boot", icon: "./images/spring-boot.png" },
    { name: "Hibernate", icon: "./images/hibernate-white.svg" }
  ],
  tools: [
    { name: "GitHub", icon: "./images/github.png" },
    { name: "Postman", icon: "./images/postman-3521648.png" }
  ]
};

const projects = {
  frontend: [
    {
      title: "E-commerce Clone Website (SugarCosmetics)",
      img: "./images/Product-collage_1.jpg",
      links: [
        { label: "Demo", url: "https://startling-mooncake-efccdc.netlify.app" },
        { label: "GitHub", url: "https://github.com/aasimsyed97/SugarCosmetics01" }
      ]
    },
    {
      title: "E-commerce Clone Website (LYST.COM)",
      img: "./images/lyst6.webp",
      links: [
        { label: "Demo", url: "https://joyful-lolly-c213c9.netlify.app/index.html" },
        { label: "GitHub", url: "https://github.com/aasimsyed97/makeshift-protest-7826" }
      ]
    }
  ],
  backend: [
    {
      title: "Online Automated Auction System (Syed_Auctions)",
      img: "./images/auction4.png",
      links: [
        { label: "Demo", url: "https://github.com/aasimsyed97/selfish-desire-8154" },
        { label: "GitHub", url: "https://github.com/aasimsyed97/selfish-desire-8154" }
      ]
    },
    {
      title: "Food Delivery App (FOODU.COM)",
      img: "./images/food5.webp",
      links: [
        { label: "Demo", url: "https://drive.google.com/file/d/1AY7rmxxM6qQD9Gr0sR4ojEzUgRdxFBVU/view?usp=share_link" },
        { label: "GitHub", url: "https://github.com/PratyayChakraborty/holy-food-9262" }
      ]
    }
  ]
};

// ====== Render Skills ======
function renderSkills(skills, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  skills.forEach(skill => {
    const card = document.createElement("div");
    card.className = "skill-card";
    card.innerHTML = `
      <img src="${skill.icon}" alt="${skill.name}">
      <div class="skill-name">${skill.name}</div>
    `;
    container.appendChild(card);
  });
}
renderSkills(skills.frontend, "skills-list-frontend");
renderSkills(skills.backend, "skills-list-backend");
renderSkills(skills.tools, "skills-list-tools");

// ====== Render Projects ======
function renderProjects(projects, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}">
      <div class="project-title">${project.title}</div>
      <div class="project-links">
        ${project.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join("  ")}
      </div>
    `;
    container.appendChild(card);
  });
}

renderProjects(projects.frontend, "projects-list-frontend");
renderProjects(projects.backend, "projects-list-backend");

// ====== Hero Role Animation ======
const roles = [
  "Full Stack Web Developer",
  "Problem Solver",
  "Java Enthusiast",
  "Tech Explorer"
];
let roleIdx = 0;
const heroRole = document.getElementById("hero-role");
function animateRole() {
  heroRole.textContent = roles[roleIdx];
  roleIdx = (roleIdx + 1) % roles.length;
}
animateRole();
setInterval(animateRole, 2000);

// ====== Theme Toggle ======
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("night");
  themeToggle.innerHTML = document.body.classList.contains("night") ? "&#9790;" : "&#9788;";
});

// ====== Accent Color Switcher ======
const accentSelect = document.getElementById("accent-select");
function updateAccent() {
  document.body.classList.remove("accent-green", "accent-red", "accent-blue");
  document.body.classList.add("accent-" + accentSelect.value);
}
accentSelect.addEventListener("change", updateAccent);
updateAccent();

// ====== Footer Year ======
document.getElementById("year").textContent = new Date().getFullYear();