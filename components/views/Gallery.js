import html from "html-literal";

export default st => html`
  <section id="gallery">
    // using reduce to construct HTML images from array
    ${st.pictures.reduce(
      (html, curr) => `${html} <img src=${curr.url} alt=${curr.title}>`,
      ``
    )}
  </section>
`;
