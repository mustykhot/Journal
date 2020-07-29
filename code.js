const ham = document.querySelector('.hamburger');
const navHam = document.querySelector('.nav-hamburger')
const nav = document.querySelector('.navbar-container');
const searchHam = document.querySelector('.search-hamburger');
const search = document.querySelector('.search-input-container');
const searchBtn = document.querySelector('button.search');

ham.addEventListener('click', () => {

  if (nav.className === 'navbar-container') {
    nav.classList.add('responsive');
  } else {
    nav.className = 'navbar-container';
  }
});

navHam.addEventListener('click', () => {
  if (nav.className === 'navbar-container') {
    nav.classList.add('responsive');
  } else {
    nav.className = 'navbar-container';
  }
});

searchBtn.addEventListener('click', () => {
  if (search.className === 'search-input-container') {
    search.classList.add('show');
  }

  else {
    search.classList = 'search-input-container'
  }
});

searchHam.addEventListener('click', () => {
  if (search.className === 'search-input-container') {
    search.classList.add('show');
  }

  else {
    search.classList = 'search-input-container'
  }
});


// let myVar;

// function preload() {
//   myVar = setTimeout(showpage, 4000);
// }

// const showpage = () => {
//   document.querySelector('#preloader').style.display = 'none';
//   document.querySelector("nav").style.display = 'block';
//   document.querySelector("header").style.display = 'block';
//   document.querySelector("footer").style.display = 'block';
//   document.querySelector(".history-section").style.display = 'block';
//   document.querySelector(".personnel-section").style.display = 'block';
//   document.querySelector(".projects-section").style.display = 'block';
//   document.querySelector(".services-section").style.display = 'block';
//   document.querySelector(".testimony-section").style.display = 'block';
//   document.querySelector(".hamburger").style.display = 'block';
// }

const nextButton = document.querySelector('.next-button');
const moveFlex = document.querySelector('.move-flex');
let shift = 0;

nextButton.addEventListener('click', e => {
  if (shift === 0) {
    shift += 300;
    moveFlex.style.transform = `translateX(-${shift}px)`;
    e.target.textContent = 'PREVIOUS';
  }

  else if (shift === 300) {
    shift -= 300;
    moveFlex.style.transform = `translateX(-${shift}px)`;
    e.target.textContent = 'NEXT';
  }
});