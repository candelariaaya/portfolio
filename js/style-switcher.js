const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
  if(document.querySelector(".style-switcher").classList.contains("open")){
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// Theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

// Dark and light mode
const dayNightMode = document.querySelector(".day-night");

dayNightMode.addEventListener("click", () => {
  dayNightMode.querySelector("i").classList.toggle("fa-sun");
  dayNightMode.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark"); 
})

window.addEventListener("load", () => {
  if(document.body.classList.contains("dark")) {
    dayNightMode.querySelector("i").classList.add("fa-sun");
  } else {
    dayNightMode.querySelector("i").classList.add("fa-moon");
  }
});