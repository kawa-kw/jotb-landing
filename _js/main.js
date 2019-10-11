import displayScrollNavigation from './displayScrollNavigation';
import { moveElementsOnScroll, moveBgPatternOnScroll } from './manageElementsOnScroll';

document.addEventListener('DOMContentLoaded', () => {
    displayScrollNavigation();
    moveElementsOnScroll();
    moveBgPatternOnScroll();

    window.addEventListener('scroll',moveElementsOnScroll);
    window.addEventListener('scroll',moveBgPatternOnScroll);
}, false);
