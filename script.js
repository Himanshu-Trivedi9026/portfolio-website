// ==== Theme Toggle without SVG ====
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "🌞" : "🌙";
  themeToggle.title = theme === "dark" ? "Light Mode" : "Dark Mode";
}

let currentTheme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
setTheme(currentTheme);

themeToggle.addEventListener("click", () => {
  currentTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(currentTheme);
});

// ==== Mobile Nav Toggle ====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ==== Typing Effect ====
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");
const roles = ["Frontend Developer", "AI Developer", "Software Developer", "Web Developer", "Creative Coder", "Tech Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = roles[roleIndex];
  const visible = current.substring(0, charIndex);
  typedText.textContent = visible;
  cursor.style.visibility = visible === "" ? "hidden" : "visible";

  if (!isDeleting && charIndex < current.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeEffect, 300);
});

// ==== AOS Init ====
AOS.init();

// ==== Project Filters ====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      card.style.display = filter === 'all' || category === filter ? 'block' : 'none';
    });
  });
});

// ==== Project Modal ====
const modal = document.getElementById("project-modal");
const modalTitle = document.querySelector(".modal-title");
const modalDesc = document.querySelector(".modal-desc");
const openModals = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".modal-close");

openModals.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = "2D Platformer";
    modalDesc.textContent = "A fun 2D game built using HTML5 Canvas and JavaScript.";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", event => {
  if (event.target === modal) modal.style.display = "none";
});

// ==== GitHub Stars/Forks ====
const githubBtns = document.querySelectorAll(".github-btn");

githubBtns.forEach(btn => {
  const repo = btn.getAttribute("data-repo");
  if (!repo) return;
  fetch(`https://api.github.com/repos/${repo}`)
    .then(res => res.json())
    .then(data => {
      if (data.stargazers_count) {
        btn.innerHTML = `⭐ ${data.stargazers_count} | 🍴 ${data.forks_count}`;
      }
    });
});

// ==== Certificate Section (Show 2 Only) ====
const certificates = [
  {
    title: "Artificial Intelligence In Partnership with Google",
    issuer: "Smartbridge",
    date: "15 Jul ,2025",
    thumb: "assets/certificates/ai-internship.png",
    full: "assets/certificates/ai-internship.png",
    platform: "ai-ml"
  },
  {
    title: "IBM Cloud Essentials",
    issuer: "IBM",
    date: "Jul 2025",
    thumb: "assets/certificates/ibmcloud.png",
    full: "assets/certificates/ibmcloud.png",
    platform: "cloud"
  },
  {
    title: "Project Completion",
    issuer: "Smartbridge",
    date: "14 Jul ,2025",
    thumb: "assets/certificates/project-completion.png",
    full: "assets/certificates/project-completion.png",
    platform: "ai-ml"
  },
  {
    title: "Python & C Certificate",
    issuer: "VITyarthi",
    date: "Jul 2025",
    thumb: "assets/certificates/PythonandC-Certificate.jpg",
    full: "assets/certificates/PythonandC-Certificate.jpg",
    platform: "programming"
  },
  {
    title: "Java Programming",
    issuer: "VITyarthi",
    date: "Apr 2025",
    thumb: "assets/certificates/Javacertificate.png",
    full: "assets/certificates/Javacertificate.png",
    platform: "programming"
  },
  {
    title: "AI & ML",
    issuer: "IBM",
    date: "May 2024",
    thumb: "assets/certificates/AIML.png",
    full: "assets/certificates/AIML.png",
    platform: "ai-ml"
  },
  {
    title: "Getting Started with AI",
    issuer: "IBM",
    date: "Jul 2025",
    thumb: "assets/certificates/gettingstartedwithai.png",
    full: "assets/certificates/gettingstartedwithai.png",
    platform: "ai-ml"
  },
  {
    title: "Journey to Cloud",
    issuer: "IBM",
    date: "Jul 2025",
    thumb: "assets/certificates/journeytocloud.png",
    full: "assets/certificates/journeytocloud.png",
    platform: "cloud"
  },
  {
    title: "NPTEL Certification",
    issuer: "NPTEL",
    date: "Jul 2025",
    thumb: "assets/certificates/nptel.png",
    full: "assets/certificates/nptel.png",
    platform: "nptel"
  },
  {
    title: "Web Development Internship",
    issuer: "VITyarthi",
    date: "Jul 2025",
    thumb: "assets/certificates/webdev.png",
    full: "assets/certificates/webdev.png",
    platform: "webdevlopment"
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    date: "Jul 2025",
    thumb: "assets/certificates/matlab.png",
    full: "assets/certificates/matlab.png",
    platform: "programming"
  }
];

const certGrid = document.getElementById("certificateGrid");
certificates.forEach((cert, index) => {
  const card = document.createElement("div");
  card.className = "certificate-card";
  if (index < 2) card.classList.add("visible");
  card.setAttribute("data-aos", "zoom-in");
  card.innerHTML = `
    <img src="${cert.thumb}" alt="${cert.title}" class="cert-thumb" />
    <h3>${cert.title}</h3>
    <p>Issued by ${cert.issuer} — ${cert.date}</p>
    <a href="#" class="btn preview-btn" data-full="${cert.full}">Preview</a>
  `;
  certGrid.appendChild(card);
});

// ==== Show More / Less Button ====
const toggleBtn = document.getElementById("toggleCertificatesBtn");
let showAll = false;

toggleBtn.addEventListener("click", () => {
  showAll = !showAll;
  const certCards = document.querySelectorAll(".certificate-card");
  certCards.forEach((card, index) => {
    if (index >= 2) {
      if (showAll) {
        card.classList.add("visible");
      } else {
        card.classList.remove("visible");
      }
    }
  });
  toggleBtn.textContent = showAll ? "Show Less" : "Show More";
});

// ==== Certificate Modal ====

const certModal = document.getElementById("certificateModal");
const certModalImg = document.getElementById("modalImage");
const certCloseBtn = document.querySelector(".modal-close");

document.addEventListener("click", e => {
  if (e.target.classList.contains("preview-btn")) {
    e.preventDefault();
    certModal.style.display = "block";
    certModalImg.src = e.target.getAttribute("data-full");
  }
  if (e.target === certModal || e.target === certCloseBtn) {
    certModal.style.display = "none";
  }
});
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(contactForm);

  fetch(contactForm.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "green";
        contactForm.reset();
      } else {
        formStatus.textContent = "Oops! Something went wrong.";
        formStatus.style.color = "red";
      }
    })
    .catch(() => {
      formStatus.textContent = "Failed to send message. Please try again later.";
      formStatus.style.color = "red";
    });
});
