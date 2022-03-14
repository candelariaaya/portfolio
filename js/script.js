// Typing animation
const typed = new Typed(".typing", {
  strings:["","Web Designer", "Web Developer", "Front-End Developer"],
  typeSpeed:100,
  BackSpeed:60,
  loop:true
});

// Aside

const nav = document.querySelector(".nav")
const navList = nav.querySelectorAll("li")
const totalNavList = navList.length;

for(let i=0; i<totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function() {
    for(let j=0; j<totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this;)
  });
}

function showSection(element) 