import Navigation from './Components/Navigation';
import Content from './Components/Content';
import Footer from './Components/Footer';

import img from './DSC_7723.jpg';

const state = {
    'image': img
};

state.title = 'Succotash';

document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Content(state)}
${Footer(state)}
`;

