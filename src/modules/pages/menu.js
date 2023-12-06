import menuCsv from '../../assets/images/menuItems.csv'
import '../../styles/menu.css';
import { makeItemDiv } from '../utility/miscelleneous';



export default function menu() {
    const d = document.createElement('div');
    d.classList.add('contentDiv');
    d.setAttribute('id', 'menuContent');
    
    // run for loop on csv file and create multiple card like item for menuItems
    for (let i = 1; i < menuCsv.length - 1; i++) {
        const item = makeItemDiv(menuCsv[i][0], menuCsv[i][1], menuCsv[i][2]);
        
        d.appendChild(item)
    }

    console.log(menuCsv)

    return d
}


