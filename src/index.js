import { HomePage } from './home-page.js';
import { MenuPage } from './menu-page.js';
import { AboutPage } from './about-page.js';
import { ContactPage } from './contact-page.js';

HomePage();

const homeTab = document.querySelector('.home');
homeTab = addEventListener('click', HomePage);

const menuTab = document.querySelector('.menu');
menuTab = addEventListener('click', MenuPage);

const aboutTab = document.querySelector('.about');
aboutTab = addEventListener('click', AboutPage);

const contactTab = document.querySelector('.contact');
contactTab = addEventListener('click', ContactPage);
