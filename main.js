import Navigation from './Components/Navigation';
import Content from './Components/Content';
import Footer from './Components/Footer';

import img from './DSC_7723.jpg';
import { link } from 'fs';

const states = {
    'home': {
        'title': 'Succotash',
        'image': img,
        'links': {'primary': ['Home', 'About', 'Contact'],
      'dropdown': ['Class Project', 'Hack-a-Thon', 'Demo']}
    },
    'contact': {
        'title': 'Contact me!',
        'image': img,
        'links': {'primary': ['Home', 'About', 'Contact'],
        'dropdown': ['Class Project', 'Hack-a-Thon', 'Demo']}
    },
    'about': {
        'title': 'About me',
        'image': img,
        'links': {'primary': ['Home', 'About', 'Contact'],
        'dropdown': ['Class Project', 'Hack-a-Thon', 'Demo']}
    }
};

const root = document.querySelector('#root');

function render(state){
    root.innerHTML = `
${Navigation(state)}
${Content(state)}
${Footer(state)}
`;
}


render(states.home);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        render(states[`${e.target.textContent.toLowerCase()}`]);
    });
});
