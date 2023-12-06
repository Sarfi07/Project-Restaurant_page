import initialLoad from './modules/utility/initialLoad.js';
import home from './modules/pages/home.js';
import menu from './modules/pages/menu.js';
import about from './modules/pages/about.js';
import contact from './modules/pages/contact.js';
import './styles/index.css';



initialLoad();

function clearContent() {
    const divs = document.querySelectorAll('.contentDiv');
    const btns = document.querySelectorAll('#tabBtns button');

    divs.forEach(div => {
        div.style.display = "none";

    })

    btns.forEach(btn => {
        btn.classList.remove('active');
    })
}

const btns = document.querySelectorAll('#tabBtns button');
const content = document.getElementById('content')

btns.forEach(btn => {
    
    btn.addEventListener('click', () => {
        const name = btn.textContent.toLocaleLowerCase();
        if (name == "home") {
            clearContent();
            btn.classList.add('active');
            content.appendChild(home());
        }
        else if (name == 'menu') {
            clearContent();
            btn.classList.add('active');
            content.appendChild(menu());
        }
        else if (name == "contact") {
            clearContent();
            btn.classList.add('active');
            content.appendChild(contact());
        }
        else if (name == "about") {
            clearContent();
            btn.classList.add('active');
            content.appendChild(about())
        }
    })

})

