// nav bar: hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

document.addEventListener('click', () => {
    if(navMenu.classList.contains("active")){
        navMenu.classList.remove("active")
    }
}, true);

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// products slider
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
});

// shopping cart: counter
const counter = document.querySelector('.counter');
const addCounter = document.querySelectorAll('.add-counter');

let count = 0;

function updateDisplay(){
    counter.innerHTML = count;
}

addCounter[0].addEventListener('click', () => {
    updateDisplay()
})

for(const addC of addCounter){
    addC.addEventListener('click', () => {
        count++
        updateDisplay()
    })
}

// shopping cart: show cart modal window
const shoppingBag = document.querySelector('.shopping-bag');
const cartContainer = document.querySelector('.cart-container');

shoppingBag.addEventListener('mouseover', () => {
    if(cartContainer.classList.contains("hide"))
    cartContainer.classList.remove("hide")
})

shoppingBag.addEventListener('mouseleave', () => {
    setTimeout(function(){
        cartContainer.classList.add("hide")
    },2000)
})


// modal windows
const openModal1 = document.querySelector('#item1');
const closeModal1 = document.querySelector('#close1');
const modalWindow1 = document.querySelector('#one');

openModal1.addEventListener('click', function(){
    openModal1.addEventListener('click', function(){
        modalWindow1.style.display = 'block';
    })
closeModal1.addEventListener('click', function(){
        modalWindow1.style.display = 'none';
    })
})

const openModal2 = document.querySelector('#item2');
const closeModal2 = document.querySelector('#close2');
const modalWindow2 = document.querySelector('#two');

openModal2.addEventListener('click', function(){
    openModal2.addEventListener('click', function(){
        modalWindow2.style.display = 'block';
    })
closeModal2.addEventListener('click', function(){
        modalWindow2.style.display = 'none';
    })
})

const openModal3 = document.querySelector('#item3');
const closeModal3 = document.querySelector('#close3');
const modalWindow3 = document.querySelector('#three');

openModal3.addEventListener('click', function(){
    openModal3.addEventListener('click', function(){
        modalWindow3.style.display = 'block';
    })
closeModal3.addEventListener('click', function(){
        modalWindow3.style.display = 'none';
    })
})

const openModal4 = document.querySelector('#item4');
const closeModal4 = document.querySelector('#close4');
const modalWindow4 = document.querySelector('#four');

openModal4.addEventListener('click', function(){
    openModal4.addEventListener('click', function(){
        modalWindow4.style.display = 'block';
    })
closeModal4.addEventListener('click', function(){
        modalWindow4.style.display = 'none';
    })
})

const openModal5 = document.querySelector('#item5');
const closeModal5 = document.querySelector('#close5');
const modalWindow5 = document.querySelector('#five');

openModal5.addEventListener('click', function(){
    openModal5.addEventListener('click', function(){
        modalWindow5.style.display = 'block';
    })
closeModal5.addEventListener('click', function(){
        modalWindow5.style.display = 'none';
    })
})

const openModal6 = document.querySelector('#item6');
const closeModal6 = document.querySelector('#close6');
const modalWindow6 = document.querySelector('#six');

openModal6.addEventListener('click', function(){
    openModal6.addEventListener('click', function(){
        modalWindow6.style.display = 'block';
    })
closeModal6.addEventListener('click', function(){
        modalWindow6.style.display = 'none';
    })
})
  
window.onclick = function(event){
    if(event.target == modalWindow1 || event.target == modalWindow2 || event.target == modalWindow3 || event.target == modalWindow4 || event.target == modalWindow5 || event.target == modalWindow6){
        modalWindow1.style.display = 'none';
        modalWindow2.style.display = 'none';
        modalWindow3.style.display = 'none';
        modalWindow4.style.display = 'none';
        modalWindow5.style.display = 'none';
        modalWindow6.style.display = 'none';
    }
}
