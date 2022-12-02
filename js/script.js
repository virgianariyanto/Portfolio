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