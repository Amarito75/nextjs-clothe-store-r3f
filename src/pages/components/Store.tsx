import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Hoodie from "./Hoodie";
import TShirt from "./TShirt";
import React from "react";
import Cap from "./Cap";
import { Link } from "react-router-dom";

function Store() {
  return (
    <>
      <div className={styles.clothes}>
        <div className={styles.card}>
          <Link to="/hoodie" style={{ textDecoration: "none" }}>
            <Hoodie />
            <div className={styles.details}>
              <h2 className={styles.title}>Simple Hoodie</h2>
              <h2 className={styles.price}>$ 59</h2>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link to="/tshirt" style={{ textDecoration: "none" }}>
            <TShirt />
            <div className={styles.details}>
              <h2 className={styles.title}>Simple Shirt</h2>
              <h2 className={styles.price}>$ 39</h2>
            </div>
          </Link>
        </div>
        <div className={styles.card}>
          <Link to="/cap" style={{ textDecoration: "none" }}>
            <Cap />
            <div className={styles.details}>
              <h2 className={styles.title}>Simple Cap</h2>
              <h2 className={styles.price}>$ 29</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Store;
