import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
// import { mockStore } from "../setUpTests";
// import { Provider } from "react-redux";

import { App } from "./components/app/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(shallow(<App />), div);
  ReactDOM.unmountComponentAtNode(div);
});
