const body = document.querySelector('body');
const hero = document.querySelector('.hero');
const navButton = document.querySelector('#navigation-toggle');
const hamburgerMenu = document.querySelector('#mobile-menu');

const accordion = document.querySelectorAll('.accordion__header');

function navMenuToggle() {
    if(hamburgerMenu.classList.contains('hidden')) {
        hamburgerMenu.classList.remove('hidden');
        hamburgerMenu.classList.add('show');
        hero.classList.remove('flex');
        hero.classList.add('hidden');
        // body.classList.add('scroll-hidden');
    }else{
        hamburgerMenu.classList.remove('show');
        hamburgerMenu.classList.add('hidden');
        hero.classList.remove('hidden');
        hero.classList.add('flex');
        // body.classList.remove('scroll-hidden');
    }
}

function accordionToggle() {
    document.querySelector('#' + this.id).nextElementSibling.classList.toggle('flex');
    document.querySelector('#' + this.id).nextElementSibling.classList.toggle('hidden');
}

navButton.addEventListener('click', navMenuToggle);
accordion.forEach(item => item.addEventListener('click', accordionToggle));

