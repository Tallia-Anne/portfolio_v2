import React from "react";
import styles from "./Card_techno.module.css";

// On reçoit "icon" (qui est juste le nom, ex: "react-native") depuis le parent
function Card_techno({ name, icon }) {
 const iconCode = icon || "code";
 const iconUrl = `https://img.icons8.com/color/100/${iconCode}.png`;

  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        <img src={iconUrl} alt={name} className={styles.logo} />
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  );
}

export default Card_techno;
