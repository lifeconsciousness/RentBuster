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



