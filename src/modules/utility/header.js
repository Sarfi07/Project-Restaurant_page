import '../../styles/header.css';
import home from '../pages/home';

const header = function () {
    // create parent div
    const tabSection = document.createElement('div');
    tabSection.setAttribute('id', 'tabs');

    // div that holds all the tab btns
    const tabBtns = document.createElement('div');
    tabBtns.setAttribute('id', 'tabBtns')

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.classList.add('active')

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = "About"


    tabBtns.appendChild(homeBtn);
    tabBtns.appendChild(menuBtn);
    tabBtns.appendChild(contactBtn);
    tabBtns.appendChild(aboutBtn);


    tabSection.appendChild(tabBtns);

    return tabSection;
}


export default header;