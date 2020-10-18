import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App/App";
import "./popup.css";

var mountNode = document.getElementById("popup");
ReactDOM.render(<App />, mountNode);
