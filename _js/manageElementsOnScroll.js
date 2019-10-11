let logo = document.querySelector('.js-main-logo');
let contactSectionOffset = document.querySelector('.js-section-contact').offsetTop;
let windowheight = window.innerHeight;
let bgPattern = document.querySelector('.js-bg-pattern');

let changeLogoOnScroll = () => {
    let windowScrollTop = window.scrollY;
    if (windowScrollTop >= 50) {
        logo.classList.add('logo-on-top');
    } else {
        logo.classList.remove('logo-on-top');
    }
};

let moveBgPatternOnScroll = () => {
    let windowScrollTop = window.scrollY;

    if (windowScrollTop >= contactSectionOffset - windowheight) {
        bgPattern.style.position = 'absolute';
        bgPattern.style.bottom = 'auto';
        bgPattern.style.top = `${-bgPattern.height}px`;
    } else {
        bgPattern.style.position = 'fixed';
        bgPattern.style.bottom = '0';
        bgPattern.style.top = 'auto';
    }
};



export {changeLogoOnScroll, moveBgPatternOnScroll};
