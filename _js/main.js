import displayScrollNavigation from './displayScrollNavigation';
import manageElementsOnScroll from './manageElementsOnScroll';

document.addEventListener('DOMContentLoaded', () => {
    displayScrollNavigation();

    window.addEventListener('scroll', manageElementsOnScroll);
}, false);
