import React from "react";
import styles from "../pages/escolha.module.css"; // Reutilizando o mesmo CSS
import noimage from "../img/noimage.png";

export default function ProjetoCard({ titulo, percentual, selecionado }) {
  return (
    <div className={`${styles.card} ${selecionado ? styles.selecionado : ""}`}>
      <img src={noimage} alt="Imagem do projeto" className={styles.noimage} />
      <h2>{titulo}</h2>
      <div className={styles.progress}>
        <div className={styles.fill} style={{ width: `${percentual}%` }}></div>
      </div>
    </div>
  );
}
