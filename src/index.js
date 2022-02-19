import pageLoad from './pageLoad.js';
import menu from './menu.js';
import home from './home.js';
import contact from './contact.js';
import './style.css';

//append to DOM initial layout
const container = document.querySelector("#content");
container.append(...pageLoad());
 
//content choice
const menuCont = menu();
const homeCont = home();
const contactCont = contact();
console.log(contact())

//insert default homepage
const footer = document.querySelector(".footer");
container.insertBefore(homeCont, footer);

//select buttons
const homeButton = document.querySelector(".homeButt");
const menuButton = document.querySelector(".menuButt");
const contactButton = document.querySelector(".contactButt");

//event listener on buttons
homeButton.addEventListener('click', ()=>{
    container.replaceChild(homeCont, container.childNodes[1]);
})

menuButton.addEventListener('click', ()=>{
    container.replaceChild(menuCont, container.childNodes[1]);
})

contactButton.addEventListener('click', ()=>{
    container.replaceChild(contactCont, container.childNodes[1]);
})