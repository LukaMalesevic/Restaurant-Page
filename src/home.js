import backgroundImage from '../dist/images/bg.jpg';
import pizzaGuy from '../dist/images/pizzaGuy.png';
import logoImage from '../dist/images/pesterac-high-resolution-logo-transparent.png';


function setBackgroundImageAndLogo(element)
{
    element.style.backgroundImage = `url(${backgroundImage})`;

    const logo = new Image();
    logo.src = logoImage;
    logo.id = 'logo';

    document.body.appendChild(logo);
}



function homePageContainer(element)
{
    const content = document.getElementById('content');
    content.style.height = '85%';
    
    const container = document.createElement('div');
    container.id = 'page-container';

    let headers = [document.createElement('h2'),
    document.createElement('h2'),
    document.createElement('h2')];

    headers[0].innerHTML = "Welcome to Pesterac's pizza";
    headers[1].innerHTML = 'With you since 1389, giving you best taste and experience';
    headers[2].innerHTML = 'Visit us or order!';

    container.appendChild(headers[0]);
    container.appendChild(headers[1]);

    const pizzaGuyImage = new Image();
    pizzaGuyImage.src = pizzaGuy;
    pizzaGuyImage.id = 'pizza-guy';

    container.appendChild(pizzaGuyImage);

    container.appendChild(headers[2]);
    
    element.appendChild(container);
}

export{
    setBackgroundImageAndLogo, homePageContainer
}