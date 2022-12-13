// navbar toggle
const burguerIcon = document.querySelector('.navbar__burguer-icon')
const navbarComponent = document.querySelector('.navbar__burguer-icon-prompt')

burguerIcon.addEventListener('click', () => {
    navbarComponent.classList.toggle('navbar__burguer-icon-prompt--hidden')
})

