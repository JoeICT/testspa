import html from "html-literal";
import sharkimage from "../../assets/image/meanshark.jpg";

export default () => html`
  <section id="jumbotron">
    <h2>Savvy Coders Javascript Fullstack Cohort</h2>
    <a href="" onClick="alert('Hello! You clicked the Button!')"
      >"Call to Action Button"</a
    >
  </section>
  <section id="shark">
    <img src="${sharkimage}" />
  </section>
`;
