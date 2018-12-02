import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Github finder</h1>
      <span className={styles.madeBy}>
        Made by
        {" "}
        <a href="http://artusi.com.br" className={styles.madeByLink}>
          Rafael Artusi
        </a>
      </span>
    </header>
  );
}

export default Header;
