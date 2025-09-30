import React from 'react';
import styles from '../pages/sobre.module.css';
import Menuhamburguer from "../components/Menuhamburguer";
import Sala from '../img/sala.png';
import Ana from '../img/Ana.png';
import Bruno from '../img/Bruno.png';
import Clara from '../img/Clara.png';
import Fernando from '../img/Fernando.png';
import Cabral from '../img/Cabral.png';
import Gabriel from '../img/Gabriel.png';
import Giovana from '../img/Giovana.png';
import Guilherme from '../img/Guilherme.png';
import Gustavo from '../img/Gustavo.png';
import Igor from '../img/Igor.png';
import Belga from '../img/Belga.png';
import Menino from '../img/Menino.png';
import Joao from '../img/Joao.png';
import Leonardo from '../img/Leonardo.png';
import Leticia from '../img/Leticia.png';
import Luana from '../img/Luana.png';
import Lucas from '../img/Lucas.png';
import Luis from '../img/Luis.png';
import Marcio from '../img/Marcio.png';
import Mariana from '../img/Mariana.png';
import Nicholas from '../img/Nicholas.png';
import Otavio from '../img/Otavio.png';
import Pamela from '../img/Pamela.png';
import Paulo from '../img/Paulo.png';
import Renan from '../img/Renan.png';
import Richarlison from '../img/Richarlison.png';
import Vitor from '../img/Vitor.png';
import Vinicius from '../img/Vinicius.png';
import Yasmin from '../img/Yasmin.png';

function Sobre() {
  const alunos = [
    { nome: 'Ana Lais Berto de Oliveira ', imagem: Ana },
    { nome: 'Bruno Henrique Ribeiro de Oliveira', imagem: Bruno },
    { nome: 'Clara Freitas Batista', imagem: Clara },
    { nome: 'Fernando Ribeiro Santos', imagem: Fernando },
    { nome: 'Gabriel Costa Cabral', imagem: Cabral },
    { nome: 'Gabriel Rodrigues Ramos', imagem: Gabriel },
    { nome: 'Giovanna Ribeiro de Jesus', imagem: Giovana },
    { nome: 'Guilherme Patrick Gimenes', imagem: Guilherme },
    { nome: 'Gustavo Santos de Brito', imagem: Gustavo },
    { nome: 'Igor Chinaide Fernandes', imagem: Igor },
    { nome: 'João Gabriel Antunes de Abreu', imagem: Belga },
    { nome: 'João Pedro Almeida Menino', imagem: Menino },
    { nome: 'João Vitor de Araújo Oliveira', imagem: Joao },
    { nome: 'Leonardo de Lima Vieira', imagem: Leonardo },
    { nome: 'Letícia Vitoria da Conceição Lemos', imagem: Leticia },
    { nome: 'Luana Vilela Muniz', imagem: Luana },
    { nome: 'Lucas Gomes Pereira', imagem: Lucas },
    { nome: 'Luis Fernando Ferreira Dantas Polastro', imagem: Luis },
    { nome: 'Márcio Souza Dias', imagem: Marcio },
    { nome: 'Mariany Vitória dos Santos Lima', imagem: Mariana },
    { nome: 'Nicholas Miguel Nascimento da Silva Pereira', imagem: Nicholas },
    { nome: 'Otavio Rogério Barbosa dos Santos', imagem: Otavio },
    { nome: 'Pamela Alves de Moura', imagem: Pamela },
    { nome: 'Paulo Victor da Silva Martins', imagem: Paulo },
    { nome: 'Renan Siqueira Campanelli', imagem: Renan },
    { nome: 'Richarlison Gustavo da Silva Mendonça', imagem: Richarlison },
    { nome: 'Victor dos Santos Silva Da Hora', imagem: Vitor },
    { nome: 'Vinicius Rodrigues Rocha', imagem: Vinicius },
    { nome: 'Yasmin de Oliveira Moreira', imagem: Yasmin },
  ];

  return (
    <div className={styles.importante}>
      <Menuhamburguer />
      
      <header className={styles.header}>
        <h1>Sobre Nós</h1>
      </header>

      <div className={styles['turma-foto']}>
        <img src={Sala} alt="Foto da turma" />
      </div>

      <h2 className={styles.serie}>Terceiro DS</h2>

      <div className={styles.galeria}>
        {alunos.map((aluno, index) => (
          <div className={styles.aluno} key={index}>
            <img src={aluno.imagem} alt={`Foto de ${aluno.nome}`} />
            <p>{aluno.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sobre;
