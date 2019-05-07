import Navigation from './Components/Navigation';
import Content from './Components/Content';
import Footer from './Components/Footer';

const state = {};

state.title = 'Succotash';

document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Content(state)}
${Footer(state)}
`;

