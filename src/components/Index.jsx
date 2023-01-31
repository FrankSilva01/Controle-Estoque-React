import React from "react";
import { NavLink } from "react-router-dom";
import styles from"../components/styles/IndexNavLink.module.css"

function Index() {
  return (
    <div>
  
  <br />   <br />   <br /> 
      <h2> Clique em um dos itens nas abas abaixo</h2>

      <NavLink className={styles.navLink} to="/Camisetas">Camisetas</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Calcas">Calças</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Protetor">Protetores</NavLink> {' '}
    </div>
  );
}

export default Index;
