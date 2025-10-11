import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Menuhamburguer from "../components/Menuhamburguer";
import ProjetoCard from "../components/card.jsx";
import styles from '../pages/escolha.module.css';
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Escolha() {
  const query = useQuery();
  const serie = localStorage.getItem("serie");

  // Use um estado para armazenar os projetos. Inicie com um array vazio para evitar erros com .map.
  const [projetos, setProjetos] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const buscarProjetos = async () => {
      try {
        const resposta = await axios.get(`http://localhost:3000/api/projetos/${serie}`);
         if (Array.isArray(resposta.data)) {
          setProjetos(resposta.data);
        } else {
          setProjetos([resposta.data]);
        }
      } catch (err) {
        setErro("Erro ao buscar projetos.");
        console.error(err);
      } finally {
        setCarregando(false);
      }
    }; 
    buscarProjetos();
  }, [serie]); 


  if (erro) {
    return <div>{erro}</div>;
  }
  
  if (!projetos || projetos.length === 0) {
    return <div>Nenhum projeto encontrado.</div>;
  }
  console.log(projetos)
  return (
    <div className={styles.principal}>
      <Menuhamburguer />
      <h1 className={styles.tituloEscolha}> {serie} ano</h1>
      <p className={styles.rodape}>VOTE NO SEU PROJETO FAVORITO</p>

      <div className={styles.grid}>
        {/* Renderiza apenas se 'projetos' for um array com dados */}
        { projetos.map((projeto) => (
          <ProjetoCard 
            key={projeto.id_projeto}
            id={projeto.id_projeto}
            titulo={projeto.nome_projeto}
            percentual={Math.round((projeto.votos.length / 10) * 100)}
            selecionado={false}
          />
        ))}
      </div>
    </div>
  );
}
