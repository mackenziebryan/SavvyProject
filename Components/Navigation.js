function buildIconHTML(link){

    // If link.icon exists, it is truthy so the if will take effect.
    // If link.icon is not there it's undefined or falsey so it will not take effect and return empty string
    if(link.icon){
        return `<span class='${link.icon}'></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `<li><a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(link)}${link.text}</a></li>`;
    });

    return linksHTML;
}


export default (state) => `<nav>
    <ul class="flex">
      ${buildNavHTML(state.links.primary)}
      <li>
        Portfolio
        <ul id="dropdown">
          ${buildNavHTML(state.links.dropdown)}
        </ul>
      </li>
    </ul>
  </nav>`;
