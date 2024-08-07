import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./reduxstore/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let persitor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persitor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);

reportWebVitals();
