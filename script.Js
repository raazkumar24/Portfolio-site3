const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const faBars = document.querySelector(".fa-bars");
const faTimes = document.querySelector(".fa-xmark");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  faBars.style.display = faBars.style.display === "none" ? "block" : "none";
  faTimes.style.display = faTimes.style.display === "none" ? "block" : "none";
});

// document.addEventListener("DOMContentLoaded", () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navbar = document.querySelector('.navbar');

//     menuToggle.addEventListener('click', () => {
//         navbar.classList.toggle('active');
//     });
// });

document.addEventListener("scroll", () => {
  const currentScrollY = window.pageYOffset;
  const links = document.querySelectorAll(".navbar a");

  links.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= currentScrollY + 10 &&
      section.offsetTop + section.offsetHeight > currentScrollY + 10
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    if (link.classList.contains("active")) {
      //for after
      link.classList.remove("after");
    } else {
      link.classList.add("after");
    }
  });
});

document.querySelector(".navbar").addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    event.preventDefault();

    const targetSection = document.querySelector(event.target.hash);
    targetSection.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll(".navbar a").forEach((link) => {
      link.classList.remove("active");
    });

    event.target.classList.add("active");
  }
});

//for smooth scrolling
// window.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   const scrollAmount = event.deltaY;

//   window.scrollBy({
//     top: scrollAmount,
//     behavior: 'smooth'
//   });
// });

const scrollContainer = document.querySelector(".projects-item");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -300, // Adjust the scroll amount based on your project card width
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 300, // Adjust the scroll amount based on your project card width
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".scroll-animation, .slide-in-right,  .slide-in-left,   .slide-in-up, .slide-in-down "
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => observer.observe(element));
});

const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = contactForm.querySelector('input[type="text"]');
  const emailInput = contactForm.querySelector('input[type="email"]');
  const messageTextarea = contactForm.querySelector("textarea");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageTextarea.value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! We received your message.`);
    contactForm.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
