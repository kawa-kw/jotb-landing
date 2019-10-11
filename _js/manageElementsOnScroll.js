let logo = document.querySelector('.js-main-logo');
let sectionIntro = document.querySelector('.js-section-intro');
let sectionContactOffset = document.querySelector('.js-section-contact').offsetTop;
let windowheight = window.innerHeight;
let bgPattern = document.querySelector('.js-bg-pattern');

let moveElementsOnScroll = () => {
    let windowScrollTop = window.scrollY;
    if (windowScrollTop >= 50) {
        logo.classList.add('logo-on-top');
        sectionIntro.classList.add('intro-fade-out');
    } else {
        logo.classList.remove('logo-on-top');
        sectionIntro.classList.remove('intro-fade-out');
    }
};

let moveBgPatternOnScroll = () => {
    let windowScrollTop = window.scrollY;

    if (windowScrollTop >= sectionContactOffset - windowheight) {
        bgPattern.style.position = 'absolute';
        bgPattern.style.bottom = 'auto';
        bgPattern.style.top = `${-bgPattern.height}px`;
    } else {
        bgPattern.style.position = 'fixed';
        bgPattern.style.bottom = '0';
        bgPattern.style.top = 'auto';
    }
};



export {moveBgPatternOnScroll, moveElementsOnScroll};
