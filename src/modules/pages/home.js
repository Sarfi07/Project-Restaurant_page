import '../../styles/home.css';
import welcomeImg from '../../assets/images/welcome.png'

export default function home() {
    const div = document.createElement('div');
    div.classList.add('contentDiv');
    div.setAttribute('id', 'homeContent');

    const title = document.createElement('div');
    title.setAttribute('id', 'heroTitle');
    title.textContent = "Welcome to Galactic Gastronomy";

    const description = document.createElement('div');
    description.setAttribute('id', 'heroDescription');
    description.textContent = `Welcome to "Galactic Gastronomy," the extraordinary restaurant nestled in the vast expanse between Earth and Mars, where culinary delights meet the cosmos! Embark on a gastronomic journey like no other, designed exclusively for space travelers exploring the universe. Our cutting-edge eatery offers a stellar fusion of earthly flavors and intergalactic cuisine, ensuring a taste experience that's truly out of this world. At Galactic Gastronomy, we not only serve exquisite dishes but also cater to the diverse palates of spacefarers, crafting meals that fuel both body and spirit as you venture through the cosmic unknown. Join us for a dining adventure that transcends boundaries, where the stars align to create an unparalleled dining experience in the depths of space.`

    const imageContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = welcomeImg;
    imageContainer.appendChild(img);
    imageContainer.setAttribute('id', 'heroImage');


    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(imageContainer);

    return div
}