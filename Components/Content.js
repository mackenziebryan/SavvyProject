export default (state) => `<div class="content">
<header class="container">
  <h1>Mackenzie Bryan's Portfolio ${state.title}</h1>
  <h2>Developer Showcase</h2>

  <h2>
    Languages
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </h2>

  <img
    class="headshot"
    src="${state.image}"
    alt="Photo"
    width="25%"
    height="25%"
  />
</header>

<main class="container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</main>

</div>`;
