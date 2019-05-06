import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

let initialHTML = document.body.innerHTML;

document.querySelector('#root').innerHTML = `
${Navigation}
${Content}
${Footer}
`;

