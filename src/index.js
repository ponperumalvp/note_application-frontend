import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./Redux_thunk/store.js";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={3000}
        closeOnClick
      />
      <App />
    </BrowserRouter>
  </Provider>
);
