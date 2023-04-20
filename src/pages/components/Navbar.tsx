import React from "react";
import styles from "@/styles/Home.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Router>
        <div className={styles.header}>
          <Link to="/home">
            <h1 className={styles.titlenavbar}>Home</h1>
          </Link>
          <Link to="/shop">
            <h1 className={styles.titlenavbar}>Shop</h1>
          </Link>
        </div>
        <div className={styles.line}></div>
      </Router>
    </>
  );
}

export default Navbar;
