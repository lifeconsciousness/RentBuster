
const navbar = document.querySelector('.navbar')
const navbarToggle = document.querySelector('.mobile-navbar-toggle')

navbarToggle.addEventListener('click', ()=> {
    const visibility = navbar.getAttribute('data-visible')
    
    if(visibility === "false"){
        navbar.setAttribute('data-visible', true)
        navbarToggle.setAttribute('aria-expanded', true)
    } else{
        navbar.setAttribute('data-visible', false)
        navbarToggle.setAttribute('aria-expanded', false)
    }
})





