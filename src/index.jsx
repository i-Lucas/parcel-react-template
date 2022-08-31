import { createRoot } from "react-dom/client";

import "./assets/styles/reset.css";
import Router from "../src/router";

const root = createRoot(document.getElementById('root'));
root.render(<Router />);