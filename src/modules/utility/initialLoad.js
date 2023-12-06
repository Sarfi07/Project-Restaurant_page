import header from './header.js';
import home from '../pages/home.js'


const initialLoad = () => {
    const content = document.getElementById('content');

    content.appendChild(header());
    content.appendChild(home())

}


export default initialLoad;

