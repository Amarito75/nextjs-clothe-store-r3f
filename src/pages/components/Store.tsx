import styles from "@/styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Hoodie from "./Hoodie";
import TShirt from "./TShirt";
import React from "react";

function Store() {
  return (
    <>
      <div className={styles.clothes}>
        <div className={styles.card}>
          <Hoodie />
          <h2 className={styles.title}>Simple Hoodie</h2>
        </div>
        <div className={styles.card}>
          <TShirt />
          <h2 className={styles.title}>Simple Shirt</h2>
        </div>
      </div>
    </>
  );
}

export default Store;
