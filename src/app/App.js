import React from "react";
import { Redirect } from "react-router-dom";
import Router from "components/Router";
import routes from "config/routes";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Router routes={routes}>
        <Redirect to="/404" />
      </Router>
    </div>
  );
}

export default App;
