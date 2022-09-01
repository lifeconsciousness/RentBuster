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
  const currentSlide = track.querySelector('.current-slide')
  const previousSlide = currentSlide.previousElementSibling
  const currentDot = carouselNav.querySelector('.current-slide')
  const previousDot = currentDot.previousElementSibling
  
  moveSlide(track, currentSlide, previousSlide);
  updateDots(currentDot, previousDot)
  counter--
  if(counter < 0){
    //move to the last slide
  }
})

rightButton.addEventListener("click", e =>{
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling
  const currentDot = carouselNav.querySelector('.current-slide')
  const nextDot = currentDot.nextElementSibling

  moveSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot)
  counter++
  if(counter > 0){
    //move to the first slide
  }
})


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


