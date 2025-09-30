import React from "react";
import { useLocation } from "react-router-dom";
import Menuhamburguer from "../components/Menuhamburguer";
import styles from '../pages/escolha.module.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Escolha() {
  const query = useQuery();
  const serie = query.get("serie"); 

  return (
    <div className={styles.principal}>
      <Menuhamburguer />
      <h1 className={styles.tituloEscolha}>Turma {serie}°A</h1>
      <p className={styles.rodape}>VOTE NO SEU PROJETO FAVORITO</p>

      <div className={styles.grid}>
        <div className={`${styles.card} ${styles.selecionado}`}>
          <h2>Bagulho que brilha</h2>
          <div className={styles.progress}>
            <div className={styles.fill} style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Bagulho que reluz</h2>
          <div className={styles.progress}>
            <div className={styles.fill} style={{ width: "30%" }}></div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>Bagulho que solta luz</h2>
          <div className={styles.progress}>
            <div className={styles.fill} style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

