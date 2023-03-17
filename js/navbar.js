//navigation bar toggle on phone devises
const navbar = document.querySelector('.navbar')
const navbarToggle = document.querySelector('.mobile-navbar-toggle')
let isOpen = false

navbarToggle.addEventListener('click', ()=> {
    const visibility = navbar.getAttribute('data-visible')
    
    if(visibility === "false"){
        navbar.setAttribute('data-visible', true)
        navbarToggle.setAttribute('aria-expanded', true)
        isOpen = true
    } else{
        navbar.setAttribute('data-visible', false)
        navbarToggle.setAttribute('aria-expanded', false)
        isOpen = false
    }
})

let bodyElement = document.getElementById("body")
bodyElement.addEventListener("click", ()=>{
  const visibility = navbar.getAttribute('data-visible')

  if(visibility === "true"){
    console.log("navbaropen")
    navbar.setAttribute('data-visible', false)
    navbarToggle.setAttribute('aria-expanded', false)
  }
  
  if(langListToggle){
    document.getElementById("languages").style.display = "none";
    langListToggle = false
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




//navbar closing on scroll
let theEnd = 0
let navbarElement = document.getElementById("header")
let navbarButtons = document.querySelectorAll(".active")
let moon = document.querySelector('#theme-toggle')



window.addEventListener("scroll", ()=>{
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop
  if(scrollTop > theEnd){
    if(!isOpen){
      navbarElement.style.top = '-70px'
      moon.style.right = '-60px'
    }
  } else{
    navbarElement.style.top = '0'
    moon.style.right = '0px'
  }
  theEnd = scrollTop
})



