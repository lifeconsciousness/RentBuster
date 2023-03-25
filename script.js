
//main js code 
function loadContent() {
  console.log('content loaded')

  const video = document.querySelector('.youtube-video')
  video.src = 'https://www.youtube-nocookie.com/embed/xwSltGbK46E'

  //activation of animation on scroll

  //how we work animation on scroll
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




  const observerHiddenImg = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        document.querySelectorAll(".hidden-image1")[0].classList.add("left-slideImg1")
      }
    })
  })

  observerHiddenImg.observe(document.querySelector(".hidden-image1"))

  const observerHiddenImg1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        document.querySelectorAll(".hidden-image2")[0].classList.add("left-slideImg3")
      }
    })
  })

  observerHiddenImg1.observe(document.querySelector(".hidden-image2"))





  //faq accordion functionality
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



  //animation for form
  const observerForm = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        document.querySelectorAll("#form")[0].classList.add("contact-form-animation")
      }
    })
  })

  observerForm.observe(document.querySelector("#form"))


  //about us animation

  const observerCarousel = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        document.querySelectorAll(".carousel")[0].classList.add("carousel-animation")
        document.querySelectorAll("#text-wrapper")[0].classList.add("about-us-text-animation")
      }
    })
  })

  observerCarousel.observe(document.querySelector(".text-wrapper"))


  //blog animation

  const observerBlog = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add(`slideLeft`)
      }
    })
  })

  document.querySelectorAll(".article").forEach(article => observerBlog.observe(article))


  //faq animation

  // const accordionObserver = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if(entry.isIntersecting){
  //       entry.target.classList.add(`fadeInAccordion`)
  //     }
  //   })
  // })

  // document.querySelectorAll(`.accordion`).forEach(accordion => accordionObserver.observe(accordion))



  //articles functionality

  const articles = document.querySelectorAll(`.article`)
  const readMores = document.querySelectorAll(`.read-more`)
  const closeButtons = document.querySelectorAll(`.close-button`)

  let navbarElement1 = document.getElementById("header")
  let moon1 = document.querySelector('#theme-toggle')


  readMores.forEach((readMore, index) => readMore.addEventListener(`click`,()=>{
    articles[index].classList.remove(`blog-post`)
    articles[index].classList.add(`article-expanded`)

    navbarElement1.style.top = '-70px'
    moon1.style.right = '-60px'
  }))

  closeButtons.forEach((button, index) => button.addEventListener(`click`,()=>{
    articles[index].classList.remove(`article-expanded`)
    articles[index].classList.add(`blog-post`)
  }))



  //dark theme toggle
  let icon = document.getElementById("moon")
  let iconNavbar = document.getElementById("moon-navbar")

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");   
    if(document.body.classList.contains("dark-theme")){
      icon.src = "./translatedPages/sun.png";
      iconNavbar.src = "./translatedPages/sun.png";
    }else{
      icon.src = "./translatedPages/moon.png";
      iconNavbar.src = "./translatedPages/moon.png";
    }     
  }

  iconNavbar.onclick = function(){
    document.body.classList.toggle("dark-theme");   
    if(document.body.classList.contains("dark-theme")){
      iconNavbar.src = "./translatedPages/sun.png";
      icon.src = "./translatedPages/sun.png";
    }else{
      iconNavbar.src = "./translatedPages/moon.png";
      icon.src = "./translatedPages/moon.png";
    }     
  }



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

}


//cookie consent logic
document.addEventListener('DOMContentLoaded', () => {
  const loadButton = document.querySelector('.load-button');
  loadButton.addEventListener('click', () => {
    localStorage.setItem('cookieChoice', '0')
    location.reload()
  });


  if(localStorage.getItem('cookieChoice') === '0'){
    loadContent()
  }
});