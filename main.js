const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar-list');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    document.querySelector('body').classList.toggle('overflow');

})