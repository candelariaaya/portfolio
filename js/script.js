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
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for(let i=0; i<totalNavList; i++) {
  const a = navList[i].querySelector("a");
  
  a.addEventListener("click", function() {
    
    removeBackSection();

      for(let j=0; j<totalNavList; j++) {
        if(navList[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
    if(window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for(let i=0; i<totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for(let i=0; i<totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for(let i=0; i<totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".contact-me").addEventListener("click", function() {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
  

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0; i<totalSection; i++) {
    allSection[i].classList.toggle("open")
  }
}


//EmailJS - Contact form
function sendMail() {
  var params = {
     from_name : document.getElementById("formName").value,
     email_id : document.getElementById("formEmail").value,
     subject : document.getElementById("formSubject").value,
     message : document.getElementById("formMessage").value
  }

  const inputs = document.querySelectorAll('input, textarea');
  
  const alertError = document.getElementById("msg-error");
  const alertOk = document.getElementById("msg-ok");
  
  if(!params.email_id || params.email_id === null) {
    return alertError.classList.remove("hidden");
  }
  if(!params.message || params.message === null) {
    return alertError.classList.remove("hidden");
  } else {
    emailjs.send("service_ucw4a39", "template_wsqhn6r", params)
      .then(function(res) {    
      alert("Thank you!");
      inputs.forEach (input => {
        input.value = '';
        });
      return console.log(res.status);
    });
  }
}

function closeAlert() {
  document.querySelector(".close-msg").addEventListener("click", () => {
    document.getElementById("msg-error").style.display = "none";
  });
}

