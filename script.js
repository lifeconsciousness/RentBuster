//navigation bar toggle on phone devises
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

//language choice button click on mobile

const languageIcon = document.querySelector(".selected-lang")
let langListToggle = false

languageIcon.addEventListener('click', ()=>{
    if(!langListToggle){
        document.getElementById("languages").style.display = "block";
        langListToggle = true
    }else if(langListToggle){
        document.getElementById("languages").style.display = "none";
        langListToggle = false
    }
})

navbarToggle.addEventListener('click', ()=>{
    document.getElementById("languages").style.display = "none";
})








