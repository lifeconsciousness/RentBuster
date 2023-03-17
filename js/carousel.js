
//carousel
const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children)
const leftButton = document.querySelector('.carouselBtn-left')
const rightButton = document.querySelector('.carouselBtn-right')
const carouselNav = document.querySelector('.carousel-nav')
const dots = Array.from(carouselNav.children)
let interval


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
  resetInterval()
})

rightButton.addEventListener("click", e =>{
  slideToRight()
  resetInterval()
}) 

function resetInterval(){
  clearInterval(interval)
  autoplay()
}

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
  interval = setInterval(function() { slideToRight()}, 7000)
}

window.onload = function() {
  autoplay()
  document.body.className += " loaded";
}



