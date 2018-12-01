import React from "react";
import Header from "components/Header";
import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <p>We are baking a new way to find your repos!</p>
    </div>
  );
}

export default Home;
