import React from "react";
import styles from "./Card_techno.module.css";

function Card_techno({ iconClass , name}) {
  // Si iconClass est vide, on met 'ri-question-line' pour voir si quelque chose s'affiche
  const finalClass = iconClass || "ri-question-line";
  console.log("Composant Techno -> Nom:", name, "| Classe:", iconClass);
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        {/* On force une taille et une couleur pour le test */}
        <i
          className={finalClass}
          
        ></i>
      </div>
     
    </div>
  );
}

export default Card_techno;