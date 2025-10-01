import React from "react";
import { useLocation } from "react-router-dom";
import Menuhamburguer from "../components/Menuhamburguer";
import ProjetoCard from "../components/card.jsx";
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
        <ProjetoCard titulo="" percentual={60} selecionado />
        <ProjetoCard titulo="" percentual={30} />
        <ProjetoCard titulo="" percentual={80} />
        <ProjetoCard titulo="" percentual={80} />
        <ProjetoCard titulo="" percentual={80} />
        <ProjetoCard titulo="" percentual={80} />
        <ProjetoCard titulo="" percentual={80} />
      </div>
    </div>
  );
}
