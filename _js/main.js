import displayScrollNavigation from './displayScrollNavigation';
import { moveElementsOnScroll } from './manageElementsOnScroll';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        displayScrollNavigation();
        moveElementsOnScroll();
        window.addEventListener('scroll', moveElementsOnScroll);
    },
    false
);
