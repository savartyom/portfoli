const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const navMob = document.querySelector('.nav-mob')


navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile-nav-active')
})

navBtn.addEventListener('click', function () {
    navMob.classList.toggle('nav-mob-active')
})
