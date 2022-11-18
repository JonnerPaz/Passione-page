// navbar toggle
const burguerIcon = document.querySelector('.header__burguer-icon')
const navbarComponent = document.querySelector('.navbar__mobile-component')

burguerIcon.addEventListener('click', () => {
    navbarComponent.classList.toggle('navbar__mobile-component--hidden')
})

