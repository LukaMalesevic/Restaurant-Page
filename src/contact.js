import adress from '../dist/images/adress.jpg';

function contactPageContainer(element)
{
    const content = document.getElementById('content');
    content.style.height = '85%';

    const container = document.createElement('div');
    container.id = 'page-container';

    const telephone = document.createElement('h2');
    const streetview = document.createElement('h2');

    telephone.innerHTML = '📞 011 8727163';
    streetview.innerHTML = '📍 Obrenovac Savska 41';

    container.appendChild(telephone);
    container.appendChild(streetview);

    const googleMaps = new Image();
    googleMaps.src = adress;
    googleMaps.style.height = '65%';

    container.appendChild(googleMaps);

    element.appendChild(container);
}

export {
    contactPageContainer
}