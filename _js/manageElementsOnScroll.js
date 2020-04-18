const logo = document.querySelector('.js-main-logo');
const nav = document.querySelector('.js-nav');
const sectionIntro = document.querySelector('.js-section-intro');

const moveElementsOnScroll = () => {
    const windowScrollTop = window.scrollY;
    if (windowScrollTop >= 50) {
        logo.classList.add('logo-on-top');
        sectionIntro.classList.add('intro-fade-out');
    } else {
        logo.classList.remove('logo-on-top');
        sectionIntro.classList.remove('intro-fade-out');
    }

    if (windowScrollTop >= 650) {
        nav.classList.add('nav-on-top');
    } else {
        nav.classList.remove('nav-on-top');
    }
};

export { moveElementsOnScroll };
