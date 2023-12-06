import '../../styles/contact.css';

export default function contact() {
    const d = document.createElement('div');
    d.classList.add('contentDiv');
    d.setAttribute('id', 'contactContent');


    const left = document.createElement('div');
    left.setAttribute('id', 'left');
    const image = document.createElement('img');
    image.src = '../../assets/images/contactImage.jpg';
    image.setAttribute('id', 'contactImage')
    left.appendChild(image);


    const right = document.createElement('div');
    right.setAttribute('id', 'right');


    // call
    const call = document.createElement('div');
    call.classList.add('contactItem');

    const callIcon = document.createElement('img');
    callIcon.classList.add('iconDiv')
    callIcon.src = '../../assets/logos/call.png';

    const callText = document.createElement('p');
    callText.textContent = "+91 12345 67890";
    callText.classList.add('iconText');

    call.appendChild(callIcon);
    call.appendChild(callText)
    
    right.appendChild(call)

    // facebook
    const facebook = document.createElement('div');
    facebook.classList.add('contactItem')

    const facebookIcon = document.createElement('img');
    facebookIcon.classList.add('iconDiv')
    facebookIcon.src = '../../assets/logos/facebook.png';

    const facebookText = document.createElement('p');
    facebookText.textContent = "example@facebook.com";
    facebookText.classList.add('iconText');

    facebook.appendChild(facebookIcon);
    facebook.appendChild(facebookText)
    
    right.appendChild(facebook);


    // twitter
    const twitter = document.createElement('div');
    twitter.classList.add('contactItem')

    const twitterIcon = document.createElement('img');
    twitterIcon.classList.add('iconDiv')
    twitterIcon.src = '../../assets/logos/twitter.png';

    const twitterText = document.createElement('p');
    twitterText.textContent = "example@twitter.com";
    twitterText.classList.add('iconText');

    twitter.appendChild(twitterIcon);
    twitter.appendChild(twitterText);
    
    right.appendChild(twitter);

    // instagram

    const instagram = document.createElement('div');
    instagram.classList.add('contactItem');

    const instagramIcon = document.createElement('img');
    instagramIcon.classList.add('iconDiv')
    instagramIcon.src = '../../assets/logos/instagram.png';

    const instagramText = document.createElement('p');
    instagramText.textContent = "example@instagram.com";
    instagramText.classList.add('iconText')

    instagram.appendChild(instagramIcon);
    instagram.appendChild(instagramText)
    
    right.appendChild(instagram)



    d.appendChild(left);
    d.appendChild(right);
    
    return d
}