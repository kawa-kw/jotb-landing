let manageElementsOnScroll = () => {
    let logo = document.querySelector('.js-main-logo');
    let windowScrollTop = window.scrollY;

    if (windowScrollTop >= 50) {
        logo.classList.add('logo-on-top');
    } else if (windowScrollTop < 50) {
        logo.classList.remove('logo-on-top');
    }
};

export default manageElementsOnScroll;
