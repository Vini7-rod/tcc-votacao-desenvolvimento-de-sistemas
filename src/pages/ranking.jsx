import React from "react";
import styles from '../pages/ranking.module.css';
import noimage from '../img/noimage.png'
import Menuhamburguer from "../components/Menuhamburguer";
import {useState, useEffect} from 'react'
const rankingData = [
  { pos: 2, nome: "Coisa Brilhante", turma: "1°A", img: "/img/img2.jpg" },
  { pos: 1, nome: "Coisa Brilhante", turma: "3°C", img: "/img/img1.jpg" },
  { pos: 3, nome: "Outra Coisa Brilhante", turma: "2°ADM", img: "/img/img3.jpg" },
];



export default function Ranking() {
  return (

    <div className={styles["ranking-container"]}>
      <Menuhamburguer />
      <h1 className={styles["ranking-title"]}>Ranking</h1>
      <div className={styles["ranking-cards"]}>
        {rankingData.map((item) => (
          <div
            key={item.pos}
            className={`${styles.card} ${styles[`pos-${item.pos}`]}`}
          >
            <img src={noimage} alt={item.nome} className={styles["card-img"]} />
            <div className={styles["card-info"]}>
              <h2>{item.nome}</h2>
              <p>{item.turma}</p>
            </div>
            <div className={`${styles.medal} ${styles[`medal-${item.pos}`]}`}>
              {item.pos}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
