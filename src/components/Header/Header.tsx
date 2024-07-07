import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <Link to="/">To Dos</Link>
      <Link to="add-todo">Add To Do</Link>
    </header>
  );
};

export default Header;
