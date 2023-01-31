import React from "react";
import { NavLink } from "react-router-dom";
import { IoShirtSharp } from 'react-icons/io5'
import CorCamisetaSelect from "./Selects/CorCamisetaSelect";
import styles from "../components/styles/CamisaNavLink.module.css"

function Camisetas(props) {


  return (
    <div>
      <h1>Controle de Estoque</h1>
       <br /> 
      <NavLink className={styles.navLink}  to="/">Inicio</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Camisetas">Camisetas</NavLink>{" "}
      <NavLink className={styles.navLink} to="/Calcas">Calças</NavLink>{" "}
      <NavLink className={styles.navLink} to="/Protetor">Protetores</NavLink>{" "}
      
    
        <h2><IoShirtSharp />  Camisetas</h2>
      
      <CorCamisetaSelect /> <br />   

    </div>
  );
}

export default Camisetas;
