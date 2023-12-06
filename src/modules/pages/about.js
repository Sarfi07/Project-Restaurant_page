import '../../styles/about.css';
import customers1 from '../../assets/images/customers1.png'


export default function about() {
    const d = document.createElement('div');
    d.classList.add('contentDiv');
    d.setAttribute('id', 'aboutContent')

    const heading = document.createElement('p');
    heading.textContent = "Our Happy Customers!";
    heading.classList.add('heading')

    d.appendChild(heading);


    const g1 = document.createElement('div');
    g1.classList.add('review')
    const g1Image = document.createElement('img');
    g1Image.src = customers1;
    const g1Text = document.createElement('p')
    g1Text.textContent =  "Absolutely thrilled with my experience at [Restaurant Name]! The ambiance was welcoming, staff attentive, and the culinary journey unmatched. Every dish was a burst of flavor, a testament to the chef's expertise. The presentation, impeccable. Whether it's a special occasion or a casual night out, [Restaurant Name] delivers an unforgettable dining experience. Kudos to the entire team! ⭐⭐⭐⭐⭐";

    g1.appendChild(g1Image);
    g1.appendChild(g1Text);


    const g2 = document.createElement('div');
    g2.classList.add('review')
    const g2Image = document.createElement('img');
    g2Image.src = customers1;
    const g2Text = document.createElement('p');
    g2Text.textContent =  "Absolutely thrilled with my experience at [Restaurant Name]! The ambiance was welcoming, staff attentive, and the culinary journey unmatched. Every dish was a burst of flavor, a testament to the chef's expertise. The presentation, impeccable. Whether it's a special occasion or a casual night out, [Restaurant Name] delivers an unforgettable dining experience. Kudos to the entire team! ⭐⭐⭐⭐⭐";

    g2.appendChild(g2Image);
    g2.appendChild(g2Text);


    const g3 = document.createElement('div');
    g3.classList.add('review');
    const g3Image = document.createElement('img');
    g3Image.src = customers1;
    const g3Text = document.createElement('p');
    g3Text.textContent =  "Absolutely thrilled with my experience at [Restaurant Name]! The ambiance was welcoming, staff attentive, and the culinary journey unmatched. Every dish was a burst of flavor, a testament to the chef's expertise. The presentation, impeccable. Whether it's a special occasion or a casual night out, [Restaurant Name] delivers an unforgettable dining experience. Kudos to the entire team! ⭐⭐⭐⭐⭐";

    g3.appendChild(g3Image);
    g3.appendChild(g3Text);


    d.appendChild(g1);
    d.appendChild(g2);
    d.appendChild(g3);




    return d;
}