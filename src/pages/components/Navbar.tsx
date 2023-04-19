import React from "react";
import styles from "@/styles/Home.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.titlenavbar}>Home</h1>
        <h1 className={styles.titlenavbar}>Shop</h1>
      </div>
      <div className={styles.line}></div>
    </>
  );
}

export default Navbar;
