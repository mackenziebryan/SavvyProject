function buildNavHTML(stateLinks){
  let linksHTML = '';

  stateLinks.forEach((link) => {
    linksHTML += `<li><a href="">${link}</li>`
  });

  return linksHTML;
}


export default (state) => `<nav class="container">
${buildNavHTML(state.links.primary)}
<li><i class="fas fa-leaf">Portfolio</i>
  <ul id="dropdown">
  ${buildNavHTML(state.links.dropdown)}
  </ul>
</li>
</nav>`;
