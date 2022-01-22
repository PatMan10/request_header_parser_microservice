import config from "./config.ts";
import { URLs } from "./utils.ts";

export const style = () => `
  * {
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
  } 

  header {
    border-bottom: 1px solid black;
    padding: 15px 0;
    margin-bottom: 25px;
    width: 95%;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  a {
    margin-bottom: 15px;
  }

  .example {
    margin-bottom: 15px;
  }

  .flex-col-aiC {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  ,
`;

export const page = (body: string) => `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Timestamp Service</title>
      <style>${style()}</style>
    </head>
    ${body}
  </html>
`;

const a = (url: string, label: string) =>
  `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const homePage = () =>
  page(`
    <header class="flex-col-aiC">
      <h1>Timestamp Microservice</h1>
    </header>

    <div class="flex-col-aiC">
      <h2>Example Usage:</h2>
      ${
    a(
      config.BASE_URL + URLs.getTimestamp("2015-12-25"),
      config.BASE_URL + URLs.getTimestamp("2015-12-25"),
    )
  }
      ${
    a(
      config.BASE_URL + URLs.getTimestamp("1451001600000"),
      config.BASE_URL + URLs.getTimestamp("1451001600000"),
    )
  }
    </div>

    <div class="flex-col-aiC">
      <h2>Example Output:</h2>
      <span class="example">{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }</span>
      <span>By ${a("https://github.com/PatMan10", "PatMan10")}</span>
    </div>
`);
