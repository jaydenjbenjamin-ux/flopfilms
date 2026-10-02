// ================================
// FLOP FILMS
// ================================


// INTRO SCREEN

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.classList.add("hide");
  }, 2400);
});


// ================================
// SCROLL REVEALS
// ================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


// ================================
// HERO PARALLAX
// ================================

const heroTitle = document.querySelector(".hero-title");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {
    heroTitle.style.transform =
      `translateY(${scrollY * 0.12}px)`;
  }
});


// ================================
// FILM GRAIN FLICKER
// ================================

const grain = document.querySelector(".grain");

setInterval(() => {
  const opacity =
    0.025 + Math.random() * 0.025;

  grain.style.opacity = opacity;
}, 130);


// ================================
// CONTACT POPUP
// ================================

const contactModal =
  document.getElementById("contactModal");

const openContact =
  document.getElementById("openContact");

const closeContact =
  document.getElementById("closeContact");


function openModal() {
  contactModal.classList.add("open");
  document.body.classList.add("modal-open");
}


function closeModal() {
  contactModal.classList.remove("open");
  document.body.classList.remove("modal-open");
}


openContact.addEventListener("click", openModal);

closeContact.addEventListener("click", closeModal);


// CLOSE IF THEY CLICK OUTSIDE THE BOX

contactModal.addEventListener("click", event => {
  if (event.target === contactModal) {
    closeModal();
  }
});


// CLOSE WITH ESCAPE KEY

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});


// ================================
// PROJECT CURSOR
// ================================

const projects =
  document.querySelectorAll(".project");

projects.forEach(project => {

  project.addEventListener("mouseenter", () => {
    document.body.style.cursor = "crosshair";
  });

  project.addEventListener("mouseleave", () => {
    document.body.style.cursor = "default";
  });

});