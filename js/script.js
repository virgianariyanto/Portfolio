//navbar
// window.onscroll = function(){
//     const header = document.querySelector('header');
//     const fixednav = header.offsetTop;

//     if (window.pageYOffset > fixednav){
//         header.classList.add('navbar-fixed');
//     }else{
//         header.classList.remove('navbar-fixed');
//     }
// };



// hamburger menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
hamburger.classList.toggle('hamburger-active');
menu.classList.toggle('hidden');
});


const logo = document.querySelector('#logo');
const landing = document.querySelector('#landing');
const brand = document.querySelector('#brand')
const website = document.querySelector('#website')

landing.addEventListener('click', function(){
    brand.classList.add('hidden');
    landing.classList.add('text-red-600');
    website.classList.remove('hidden');
    logo.classList.remove('text-pink-600');
})

logo.addEventListener('click', function(){
    website.classList.add('hidden');
    logo.classList.add('text-pink-600');
    brand.classList.remove('hidden');
    landing.classList.remove('text-red-600');
})



