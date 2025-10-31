import { createRoot } from "react-dom/client";
import { Counter } from "./Counter";
import "./style.scss";

const root = createRoot(document.getElementById("root"));
root.render(<Counter />);
