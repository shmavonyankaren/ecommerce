import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const containerRoot = document.getElementById("root");

const root = ReactDOM.createRoot(containerRoot);

root.render(<App />);
