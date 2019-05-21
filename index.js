// Imports Structure of each section from seperae files. 
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

//
import Navigo from 'navigo'; 

// Brings in capitalize from lodash
// Object Destructuring
import { capitalize } from 'lodash';

// Imports *(all) states from store file.
import * as states from './store';

// Origin is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

// Creates root variable to link to HTML file
// Use innerHTML property as a SETTER
const root = document.querySelector('#root');

// render receives an argument as a named parameter: 'state'
function render(state){
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;

    // Creates variable for Navigation links.
    const links = document.querySelectorAll('nav a');

    // Function for action for clicking each link. 
    // Prevent default server action to navigate away from page
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            render(states[`${e.target.closest('nav a').textContent}`]);
        });
    });
}

function handleRoutes(params){
    render(states[capitalize(params.path)]);
}

router
    .on(':path', handleRoutes)
    .on('/', () => render(states.Home))
    .resolve();
