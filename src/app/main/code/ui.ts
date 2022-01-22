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
      <title>Request Header Parser Service</title>
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
      <h1>Request Header Parser Microservice</h1>
    </header>

    <div class="flex-col-aiC">
      <h2>Example Usage:</h2>
      ${
    a(
      config.BASE_URL + URLs.GET_HEADER_INFO,
      config.BASE_URL + URLs.GET_HEADER_INFO,
    )
  }
    </div>

    <div class="flex-col-aiC">
      <h2>Example Output:</h2>
      <span class="example">
        {
          "ipaddress":"159.20.14.100",
          "language":"en-US,en;q=0.5",
          "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
        }
      </span>
      <span>By ${a("https://github.com/PatMan10", "PatMan10")}</span>
    </div>
`);
