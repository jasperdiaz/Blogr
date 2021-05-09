const body = document.querySelector('body');
const feature = document.querySelector('.feature');
const navButton = document.querySelector('#navigation-toggle');
const hamburgerMenu = document.querySelector('#mobile-menu');

const accordion = document.querySelectorAll('.accordion__header');

function navMenuToggle() {
    if(hamburgerMenu.classList.contains('hidden')) {
        hamburgerMenu.classList.remove('hidden');
        hamburgerMenu.classList.add('show');
        feature.classList.remove('flex');
        feature.classList.add('hidden');
        // body.classList.add('scroll-hidden');
    }else{
        hamburgerMenu.classList.remove('show');
        hamburgerMenu.classList.add('hidden');
        feature.classList.remove('hidden');
        feature.classList.add('flex');
        // body.classList.remove('scroll-hidden');
    }
}

function accordionToggle() {
    document.querySelector('#' + this.id).nextElementSibling.classList.toggle('flex');
}

navButton.addEventListener('click', navMenuToggle);
accordion.forEach(item => item.addEventListener('click', accordionToggle));

