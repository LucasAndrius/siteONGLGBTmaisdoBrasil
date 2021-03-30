import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { NewsProvider } from "./context/NewsContext";
import { createServer } from "miragejs";

import { App } from "./App";

createServer({
  routes() {
    // destaques: {

    // }
  },
});

ReactDOM.render(
  <BrowserRouter>
    <NewsProvider>
      <App />
    </NewsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
