import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cientista from "../img/cientista.png";
import labo from "../img/labo.png";
import onda from "../img/onda.png";
import styles from "../pages/App.module.css";
import Menuhamburguer from "../components/Menuhamburguer";

export default function inicio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Menuhamburguer />

      <h1 className={styles.tituloApp}>Avaliação</h1>

      <div className={styles.central}>
        <div className={styles.subtituloApp}>Selecione a série do Projeto</div>

        <nav className={styles.buttons}>
          <Link to="/ESCOLHA"><button>1º Série</button></Link>
          <Link to="/ESCOLHA"><button>2º Série</button></Link>
          <Link to="/ESCOLHA"><button>3º Série</button></Link>
        </nav>
      </div>

      <img src={onda} alt="onda" className={styles.onda} />

      <div className={styles.Cientista}>
        <img src={Cientista} alt="cientista" />
      </div>

      <div>
        

        <nav
          className={`${styles.navigationMenu} ${
            menuOpen ? styles.visibilidade : ""
          }`}
        >
          <img src={labo} alt="Labo" className={styles.labo} />
          <ul>
            <li><Link to="/ranking">RANKING</Link></li>
            <li><Link to="/sobre">SOBRE NÓS</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
