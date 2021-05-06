/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';


const header = document.querySelector
('.main-header');

window.addEventListener('scroll',() => {
    const scrollPos = window.scrollY;
    if(scrollPos > 10) {
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
})









/*
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=> {
   hamburger.classList.toggle('active');
   mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=> {
   const scroll_position = window.scrollY;
   if(scroll_position > 600) {
      header.style.backgroundColor = "#29323c";
   } else {
      header.style.backgroundColor = 'transparent';
   }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     mobile_menu.classList.toggle('active');
  });
});

*/
