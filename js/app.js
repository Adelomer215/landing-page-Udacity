const creatorButton = document.getElementById('create');
const theBode = document.querySelector('main');
const navbarList = document.getElementById('nav-bar-menu');
// start build the function that creat the sections

let sectionNumber = 0;
const createSectionAndNavList = function () {
    sectionNumber++;
    const sectionContant = `<section id="section${sectionNumber}"  data-nav="Section ${sectionNumber}">
        <div class="landing__container">
            <h2>Section ${sectionNumber}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
            dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
            imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
            bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
            elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
            nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
            semper in tellus. Sed congue et odio sed euismod.</p>
            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
            luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
            porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
    </section>`;
    const liContent = `<li><a href="#section${sectionNumber}" class="menu__link" data-nav="section${sectionNumber}">section${sectionNumber}</a></li>`;
    navbarList.insertAdjacentHTML("beforeend", liContent);

    theBode.insertAdjacentHTML("beforeend", sectionContant);
};

creatorButton.onclick = createSectionAndNavList;
// start build the function that creat the navlist

// let listLength = 0;
// const createNavList = () => {
//     listLength++;
//     const liContent = `<li><a href="#section${listLength}" class="menu__link">section${listLength}</a></li>`;
//     navbarList.insertAdjacentHTML("beforeend", liContent);

// }
// creatorButton.onclick = createNavList;

window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        let theActive = navbarList.querySelector(`[data-nav=${active.id}]`);
        if (active.getBoundingClientRect().top >= -200 && active.getBoundingClientRect().top <= 150) {
            active.classList.add("your-active-class");
            theActive.classList.add("active-link");
        }
        else {
            active.classList.remove("your-active-class");
            theActive.classList.remove("active-link");
        }
        // console.log(activeLink);
    });
};

// make the page bulid 4 section by defult when looding 
for (let i = 1; i < 5; i++) {
    createSectionAndNavList();
}


/*
    In the end, I would like to apologize for something.
    I thought that starting the construction of the project is tomorrow and that there will be a specific time to work on the project,
    but one of my friends told me that this is the last day for receiving and that I misunderstood,
    so I turned to implement the project as soon as possible and I hope I didn't make many mistakes, and thank you for this wonderful amount of information and beautiful explanation.
*/