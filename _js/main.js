import displayScrollNavigation from './displayScrollNavigation';
import { changeLogoOnScroll, moveBgPatternOnScroll } from './manageElementsOnScroll';

document.addEventListener('DOMContentLoaded', () => {
    displayScrollNavigation();
    changeLogoOnScroll();
    moveBgPatternOnScroll();

    window.addEventListener('scroll',changeLogoOnScroll);
    window.addEventListener('scroll',moveBgPatternOnScroll);
}, false);
