import React, { useState } from "react";
import { Link } from "react-router-dom";
import labo from "../img/labo.png";
import '../components/MenuHamburguer.css'
export default function MenuHamburguer() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav id="navigation-menu" className={menuOpen ? "visibilidade" : ""}>
        <img src={labo} alt="Labo" className="labo" />
        <ul>
          <li><Link to="/ranking">RANKING</Link></li>
          <li><Link to="/sobre">SOBRE NÓS</Link></li>
        </ul>
      </nav>
    </>
  );
}
