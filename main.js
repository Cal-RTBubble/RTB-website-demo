/* ----------------------------
   HAMBURGER MENU
----------------------------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
    hamburger.classList.toggle("open");
  });
}

const dropdownToggle = document.querySelector(".dropdown-toggle");
if (dropdownToggle) {
  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
  });
}

/* ----------------------------
   CONTACT
----------------------------- */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", document.querySelector("[name='first_name']").value);
    formData.append("last_name", document.querySelector("[name='last_name']").value);
    formData.append("email", document.querySelector("[name='email']").value);
    formData.append("message", document.querySelector("[name='message']").value);

    fetch("https://script.google.com/macros/s/AKfycbwOWtZkUPUqeizk1EgqF42K9Ut8WZCrqde6fcZHN2AQd805ax2J31vBCmstjWB8sQUWEw/exec", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        if (result.status === "success") {
          alert("Your message has been sent successfully!");
          contactForm.reset();
        } else {
          alert("Server error: " + JSON.stringify(result));
        }
      })
      .catch(error => {
        alert("Error sending message. Please try again.");
        console.log(error);
      });
  });
}

/* ----------------------------
   TRANSITION EFFECT
----------------------------- */
const revealElements = document.querySelectorAll(".reveal");
if (revealElements.length > 0) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.35 }
  );

  revealElements.forEach(el => observer.observe(el));
}

/* ----------------------------
   SOFTWARE DEVELOPMENT
----------------------------- */

let currentSoftwareSlide = 0;
const softwareSlides = document.querySelectorAll(".hero-slide");

setInterval(() => {
    softwareSlides[currentSoftwareSlide].classList.remove("active");
    currentSoftwareSlide = (currentSoftwareSlide + 1) % softwareSlides.length;
    softwareSlides[currentSoftwareSlide].classList.add("active");
}, 3500);



/* ----------------------------
   SOFTWARE DEVELOPMENT
----------------------------- */

let testSlideIndex = 0;
const testSlides = document.querySelectorAll(".testing-slider .slide");

setInterval(() => {
    testSlides[testSlideIndex].classList.remove("active");
    testSlideIndex = (testSlideIndex + 1) % testSlides.length;
    testSlides[testSlideIndex].classList.add("active");
}, 3000); // change speed if needed


/* ----------------------------
   TESTING AUTOMATION
----------------------------- */
const boxes = document.querySelectorAll(".web-diff-box");
const contents = document.querySelectorAll(".web-diff-content");

if (boxes.length > 0 && contents.length > 0) {
  boxes.forEach(box => {
    box.addEventListener("click", () => {
      boxes.forEach(b => b.classList.remove("active"));
      contents.forEach(c => c.classList.remove("active"));
      box.classList.add("active");
      document.getElementById(box.dataset.target).classList.add("active");
    });
  });
}

function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    navMenu.classList.toggle("active");
  }
}

let currentSlide1 = 0;
const web1Slides = document.querySelectorAll(".web1-slide");

if (web1Slides.length > 0) {
  setInterval(() => {
    web1Slides[currentSlide1].classList.remove("active");
    currentSlide1 = (currentSlide1 + 1) % web1Slides.length;
    web1Slides[currentSlide1].classList.add("active");
  }, 3000);
}
