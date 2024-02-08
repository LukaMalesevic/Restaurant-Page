import pizzaImage from '../dist/images/pizza.png';

function menuPageContainer(element)
{
    const container = document.createElement('div');
    container.id = 'page-container-menu';
    container.classList.add('grid');

    const content = document.getElementById('content');
    content.style.height = '200%';

    const pizzas = ['Margarita', 'Chocolate', 'Sardina',
        'Melon', 'Capricosa', 'Tropicana', 'Chicken',
        'Yoghurt', 'Cheese++', 'Sweet Pizza'];

    for(let i = 0; i < 10; i++)
    {
        const pizza = document.createElement('div');
        pizza.classList.add('pizza-choice')

        const pizzaImg = new Image();
        pizzaImg.src = pizzaImage;
        pizzaImg.id = 'pizza-img';
        pizza.appendChild(pizzaImg);

        const title = document.createElement('h2');
        title.innerHTML = pizzas[i];
        title.style.color = 'black';
        pizza.appendChild(title);

        const txt = document.createElement('p');
        txt.innerHTML = 'Lorem Ipsum è un testo segnaposto utilizzato' +
        'nel settore della tipografia e della stampa.';
        pizza.appendChild(txt);

        container.appendChild(pizza);
        
    }

    element.appendChild(container);

}

export { menuPageContainer }