// manual slideshow
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1;
let numberSlides = slides.length;
slideShow(currentSlide);

prev.addEventListener('click', function(){
    slideShow(currentSlide--)
})
next.addEventListener('click', function(){
    slideShow(currentSlide++)
})

function slideShow(n){
    // when currentSlide reaches up to the number of slide, it will set back to 1, which is the 1st slide 
    if(currentSlide > numberSlides){
        currentSlide = 1;
    }
    // when currentSlide reaches to the 1st slide, the prev btn will set back to the last slide
    if(currentSlide < 1){
        currentSlide = numberSlides;
    }
    for(let eachSlides = 0; eachSlides < numberSlides; eachSlides++){
        slides[eachSlides].style.display = 'none';
    }
    slides[currentSlide - 1].style.display = 'block';
}


// automatic slideshow
const slideAuto = document.querySelectorAll('.slideAuto')
let indexSlide = 0;

slideshowAuto()

function slideshowAuto(){
    let numSlides = slideAuto.length;
    if(indexSlide >= numSlides){
        indexSlide = 0
    }
    if(indexSlide < 0){
        indexSlide = numSlides - 1;
    }
    for(let eachIndex = 0; eachIndex < numSlides; eachIndex++){
        slideAuto[eachIndex].style.display = 'none'
    }
    slideAuto[indexSlide].style.display = 'block'
    setTimeout(slideshowAuto,3000)   //note: takes the values of millisecond
    indexSlide++
}


// forms
const myPassword = document.querySelector('#myPassword')
const viewPassword = document.querySelector('#viewPassword')

viewPassword.addEventListener('click', function(){
    const secret = myPassword.getAttribute('type') === 'password' ? 'text' : 'password'
    myPassword.setAttribute('type', secret)
})


const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click', function(){
    localStorage.setItem('FN', firstName.value)
    sessionStorage.setItem('LN', lastName.value)
    firstName.value = ""
    lastName.value = ""
})


// model window
const item1 = document.querySelector('#item1')
const closeModal = document.querySelector('#closeModal')
const modalWindow = document.querySelector('.modalWindow')

item1.addEventListener('click', function(){
    modalWindow.style.display = 'block';
})
closeModal.addEventListener('click', function(){
    modalWindow.style.display = 'none';
})




