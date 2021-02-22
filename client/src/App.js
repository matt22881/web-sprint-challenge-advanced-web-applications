 // eslint-disable-next-line
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* Build a PrivateRoute component that will */
         /* display BubblePage when you're authenticated */
        <Route exact path="/protected">
          <PrivateRoute />
        </Route>
              }
      </div>
    </Router>
  );
}
