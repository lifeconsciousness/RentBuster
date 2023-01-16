
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





