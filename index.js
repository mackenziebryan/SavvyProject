// Imports Structure of each section from seperae files. 
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

// Imports *(all) states from store file.
import * as states from './store';

// Creates root variable to link to HTML file
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
            render(states[`${e.target.textContent}`]);
        });
    });
}

// Renders the home page.
render(states.Home);
