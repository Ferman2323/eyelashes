const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar-list');
let navlink = document.querySelector('.nav-link');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);