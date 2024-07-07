import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

import styles from "./MainLayOut.module.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
