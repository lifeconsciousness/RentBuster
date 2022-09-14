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

let bodyElement = document.getElementById("body")
bodyElement.addEventListener("click", ()=>{
  const visibility = navbar.getAttribute('data-visible')

  if(visibility === "true"){
    console.log("navbaropen")
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

//cursor
console.clear()

const TAIL_LENGTH = 20

const cursor = document.getElementById('cursor')

let mouseX = 0;
let mouseY = 0;

let cursorCircles;
let cursorHistory = Array(TAIL_LENGTH).fill({x: 0, y: 0})

function onMouseMove(event) {
  mouseX = event.clientX
  mouseY = event.clientY
}

function initCursor() {
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let div = document.createElement('div')
    div.classList.add('cursor-circle') 
    cursor.append(div)
  }
  cursorCircles = Array.from(document.querySelectorAll('.cursor-circle'))
}

function updateCursor() {  
  cursorHistory.shift()
  cursorHistory.push({ x: mouseX, y: mouseY })
    
  for (let i = 0; i < TAIL_LENGTH; i++) {
    let current = cursorHistory[i];
    let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];
    
    let xDiff = next.x - current.x;
    let yDiff = next.y - current.y;
    
    current.x += xDiff * 0.35;
    current.y += yDiff * 0.35;
    cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i/TAIL_LENGTH})`;  
  }
  requestAnimationFrame(updateCursor)
}

document.addEventListener('mousemove', onMouseMove, false)

initCursor()
updateCursor()



//carousel
const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const leftButton = document.querySelector('.carouselBtn-left')
const rightButton = document.querySelector('.carouselBtn-right')
const carouselNav = document.querySelector('.carousel-nav')
const dots = Array.from(carouselNav.children)


const slideSize = slides[0].getBoundingClientRect()
const slideWidth = slideSize.width
let counter = 0

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
})

const moveSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide')
  targetDot.classList.add('current-slide')
}

leftButton.addEventListener("click", e =>{
  slideToLeft()
})

rightButton.addEventListener("click", e =>{
  slideToRight()
}) 

function slideToLeft(){
  let currentSlide = track.querySelector('.current-slide')
  let previousSlide = currentSlide.previousElementSibling
  let currentDot = carouselNav.querySelector('.current-slide')
  let previousDot = currentDot.previousElementSibling
  counter--

  if(counter < 0){
    counter = -1
  }
  if(counter == -1){
    previousSlide = slides[slides.length-1]
    currentSlide = slides[0]
    previousDot = dots[dots.length-1]
    counter = slides.length - 1
  }

  moveSlide(track, currentSlide, previousSlide);
  updateDots(currentDot, previousDot)
}

function slideToRight(){
  let currentSlide = track.querySelector('.current-slide')
  let nextSlide = currentSlide.nextElementSibling
  let currentDot = carouselNav.querySelector('.current-slide')
  let nextDot = currentDot.nextElementSibling
  counter++
  if(counter < 0 || counter > slides.length){
    counter = 0
  }
  if(counter > slides.length-1){
    currentSlide = slides[slides.length-1]
    nextSlide = slides[0]
    nextDot = dots[0]
    counter = 0
  }

  moveSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot)
}


carouselNav.addEventListener("click", e => {
  const targetDot = e.target.closest('button')
  
  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide')
  const currentDot = carouselNav.querySelector('.current-slide')
  const targetIndex = dots.findIndex(dot => dot === targetDot)
  const targetSlide = slides[targetIndex]

  moveSlide(track, currentSlide, targetSlide);

  updateDots(currentDot, targetDot)
})

function autoplay(){
  setInterval(function() { slideToRight()}, 8000)
}

window.onload = function() {
  autoplay()
  document.body.className += " loaded";
}


//activation of animation on scroll
//activate when picture-and-text class appears

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#firstImg")[0].classList.add("left-slideImg")
      document.querySelectorAll("#firstText")[0].classList.add("right-slideText")
    }
  })
})

observer.observe(document.querySelector("#firstText"))

const observer1 = new IntersectionObserver(entries1 => {
  entries1.forEach(entry1 => {
    if(entry1.isIntersecting){
      document.querySelectorAll("#secondText")[0].classList.add("right-slideText1")
      document.querySelectorAll("#secondImg")[0].classList.add("left-slideImg1")
    }
  })
})

observer1.observe(document.querySelector("#secondText"))

const observer2 = new IntersectionObserver(entries2 => {
  entries2.forEach(entry2 => {
    if(entry2.isIntersecting){
      document.querySelectorAll("#thirdImg")[0].classList.add("left-slideImg2")
      document.querySelectorAll("#thirdText")[0].classList.add("right-slideText2")
    }
  })
})

observer2.observe(document.querySelector("#thirdText"))

const observer3 = new IntersectionObserver(entries2 => {
  entries2.forEach(entry2 => {
    if(entry2.isIntersecting){
      document.querySelectorAll("#fourthText")[0].classList.add("right-slideText3")
      document.querySelectorAll("#fourthImg")[0].classList.add("left-slideImg3")
    }
  })
})

observer3.observe(document.querySelector("#fourthText"))





//faq accordion
document.querySelectorAll('.accordionBtn').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling
    button.classList.toggle('accordionBtn-active')
    if (button.classList.contains('accordionBtn-active')){
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else{
      accordionContent.style.maxHeight = 0
    }
  })
})

document.querySelectorAll('.accordionBtnBig').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling
    button.classList.toggle('accordionBtn-activeBig')
    if (button.classList.contains('accordionBtn-activeBig')){
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else{
      accordionContent.style.maxHeight = 0
    }
  })
})



//faq accordion observers
const accordionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a1")[0].classList.add("accordion-animationTop")
    }
  })
})

accordionObserver.observe(document.querySelector("#a1"))


const accordionObserver1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a2")[0].classList.add("accordion-animation")
    }
  })
})

accordionObserver1.observe(document.querySelector("#a2"))


const accordionObserver2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a3")[0].classList.add("accordion-animation")
    }
  })
})

accordionObserver2.observe(document.querySelector("#a3"))


const accordionObserver3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a4")[0].classList.add("accordion-animation")
    }
  })
})

accordionObserver3.observe(document.querySelector("#a4"))


const accordionObserver4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a5")[0].classList.add("accordion-animation")
    }
  })
})

accordionObserver4.observe(document.querySelector("#a5"))


const accordionObserver5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a6")[0].classList.add("accordion-animation")
    }
  })
})

accordionObserver5.observe(document.querySelector("#a6"))


const accordionObserver6 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#a7")[0].classList.add("accordion-animationBottom")
    }
  })
})

accordionObserver6.observe(document.querySelector("#a7"))



const observerForm = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#form")[0].classList.add("contact-form-animation")
    }
  })
})

observerForm.observe(document.querySelector("#form"))


const observerTextAboutUs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll("#text-wrapper")[0].classList.add("about-us-text-animation")
    }
  })
})

observerTextAboutUs.observe(document.querySelector("#text-wrapper"))

const observerCarousel = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".carousel")[0].classList.add("carousel-animation")
    }
  })
})

observerCarousel.observe(document.querySelector(".carousel"))



const observerHiddenImg = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".hidden-image1")[0].classList.add("fadeInImg")
    }
  })
})

observerHiddenImg.observe(document.querySelector(".hidden-image1"))

const observerHiddenImg1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".hidden-image2")[0].classList.add("fadeInImg")
    }
  })
})

observerHiddenImg1.observe(document.querySelector(".hidden-image2"))



//navbar closing on scroll
let theEnd = 0
let navbarElement = document.getElementById("header")
let navbarButtons = document.querySelectorAll(".active")
let moon = document.querySelector('#theme-toggle')


window.addEventListener("scroll", ()=>{
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop
  if(scrollTop > theEnd){
    navbarElement.style.top = '-70px'
    moon.style.right = '-60px'
  } else{
    navbarElement.style.top = '0'
    moon.style.right = '0px'
  }
  theEnd = scrollTop
})



//dark theme toggle
let icon = document.getElementById("moon");

  icon.onclick = function(){
      document.body.classList.toggle("dark-theme");   
      if(document.body.classList.contains("dark-theme")){
          icon.src = "/img/sun.png";
      }else{
          icon.src = "/img/moon.png";
      }     
  }

let iconNavbar = document.getElementById("moon-navbar");

  iconNavbar.onclick = function(){
      document.body.classList.toggle("dark-theme");   
      if(document.body.classList.contains("dark-theme")){
          iconNavbar.src = "/img/sun.png";
      }else{
          iconNavbar.src = "/img/moon.png";
      }     
  }