import i from "../../assets/images/customers1.png";

function makeItemDiv(title, description, price) {
    const parentDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const priceDiv = document.createElement('div');
    const itemImage = document.createElement('img');

    titleDiv.classList.add('itemTitle');
    descriptionDiv.classList.add('itemDescription');
    priceDiv.classList.add('itemPrice');
    itemImage.classList.add('itemImg')
    parentDiv.classList.add('item')


    titleDiv.textContent = title;
    descriptionDiv.textContent = description;
    priceDiv.textContent = `$@^  ${price}`;
    itemImage.src = i;


    parentDiv.appendChild(titleDiv);
    parentDiv.appendChild(descriptionDiv);
    parentDiv.appendChild(priceDiv);
    parentDiv.appendChild(itemImage);

    return parentDiv;

}


export {makeItemDiv};