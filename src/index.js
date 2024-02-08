import { setBackgroundImageAndLogo, homePageContainer} from "./home.js";
import { menuPageContainer } from "./menu.js";
import { contactPageContainer } from "./contact.js";
import './style.css';

const content = document.getElementById('content');
const buttons = document.getElementsByTagName('button');

setBackgroundImageAndLogo(content);
homePageContainer(content);

buttons[0].addEventListener('click', ()=>{

    while(content.firstChild)
        content.removeChild(content.firstChild);

    homePageContainer(content);
});

buttons[1].addEventListener('click', ()=>{
    while(content.firstChild)
        content.removeChild(content.firstChild);

    menuPageContainer(content);
});

buttons[2].addEventListener('click', ()=>{
    while(content.firstChild)
        content.removeChild(content.firstChild);

    contactPageContainer(content);
});





