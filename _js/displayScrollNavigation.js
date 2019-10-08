let displayScrollNavigation = () => {
    let sectionsArray = document.getElementsByClassName('js-section');
    let scrollNav = document.getElementById('js-scroll-nav');

    for (let section of sectionsArray) {
        const navElement = document.createElement('li');
        navElement.className = 'main__nav-scroll-element';

        const navLink = document.createElement('a');
        // Get sections id to asign href to every <a>
        navLink.setAttribute('href', `#${section.id}`);

        // Create name of the link
        const navLinkName = document.createElement('span');
        navLinkName.className = 'main__nav-scroll-element-name';
        navLinkName.textContent = section.dataset.name;

        // Append <span> to <a>
        navLink.appendChild(navLinkName);
        // Append <a> to <li>
        navElement.appendChild(navLink);
        // Append <li> to <ul>
        scrollNav.appendChild(navElement);
    };
};

export default displayScrollNavigation;
