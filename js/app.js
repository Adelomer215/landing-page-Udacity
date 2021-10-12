/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
let sections = document.querySelectorAll('section');
const navMenu = document.querySelector('[data-menu]');
const mainElement = document.querySelector('main');
const theUl = document.querySelector('ul');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
const theButtom = document.createElement('button');
theButtom.setAttribute('class', 'creat');
theButtom.innerHTML = 'Creat Section';
navMenu.appendChild(theButtom);
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i = 0; i < sections.length; i++) {
    const navList = document.createElement('li');
    navList.innerHTML = `<a href="#section${i + 1}" class="menu__link" data-nav="section${i + 1}">section ${i + 1}</a>`;
    theUl.appendChild(navList);
}
let sectionsLength = sections.length;
theButtom.addEventListener('click', (params) => {
    const theSection = document.querySelector('section').cloneNode(true);
    const landingCon = theSection.lastElementChild;
    const theH2 = landingCon.firstElementChild;
    theSection.id = `section${sectionsLength + 1}`;
    theSection.setAttribute('data-nav', `section ${sectionsLength + 1}`);
    theSection.classList = '';
    theH2.innerHTML = `Section ${sectionsLength + 1}`;
    const newLi = `<li><a href="#section${sectionsLength + 1}" class="menu__link" data-nav="section${sectionsLength + 1}">section${sectionsLength + 1}</a></li>`;
    sectionsLength++;
    mainElement.appendChild(theSection);
    // theUl.appendChild(newLi);
    theUl.insertAdjacentHTML('beforeend', newLi);
    sections++;
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/
window.onscroll = function () {
    document.querySelectorAll('section').forEach(function (active) {
        let theActive = theUl.querySelector(`[data-nav = ${active.id}]`);
        if (active.getBoundingClientRect().top >= -200 && active.getBoundingClientRect().top <= 150) {
            active.classList.add("your-active-class");
            theActive.classList.add("active-link");
        }
        else {
            active.classList.remove("your-active-class");
            theActive.classList.remove("active-link");
        }
    });
};
// Build menu

// Scroll to section on link click
theUl.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById(`${e.target.dataset.nav}`).scrollIntoView({
        behavior: "smooth", block: "center"
    });
});
// Set sections as active


