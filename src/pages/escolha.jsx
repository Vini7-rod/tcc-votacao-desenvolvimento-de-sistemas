import React from "react";
import Menuhamburguer from "../components/Menuhamburguer";
import '../pages/escolha.module.css'
export default function Escolha() {
  return (

    <div className="principal">
      <Menuhamburguer />
      <h1 className="tituloEscolha">Turma 1°A</h1>
      <p className="rodape">VOTE NO SEU PROJETO FAVORITO</p>

      <div className="grid">
        <div className="card selecionado">
          <h2>Bagulho que brilha</h2>
          <div className="progress">
            <div className="fill" style={{ width: "60%" }}></div>
          </div>
        </div>

        <div className="card">
          <h2>Bagulho que reluz</h2>
          <div className="progress">
            <div className="fill" style={{ width: "30%" }}></div>
          </div>
        </div>

        <div className="card">
          <h2>Bagulho que solta luz</h2>
          <div className="progress">
            <div className="fill" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}