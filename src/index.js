import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import Store from "./reducers/store";
import * as serviceWorker from "./services/serviceWorker";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);

serviceWorker.register();
