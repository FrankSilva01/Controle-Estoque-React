import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import {GiArmoredPants} from "react-icons/gi"
import styles from "../components/styles/CalcaAzul.module.css"


import Azul from "./CoresCalcas/Azul";

function Calcas(props) {

  const [tamanhoCalcaP]= useState(0);
  const [tamanhoCalcaM]= useState(0);
  const [tamanhoCalcaG]= useState(0);
  const [tamanhoCalcaGg]= useState(0);
  const [tamanhoCalcaXg]= useState(0);
  const [tamanhoCalcaXxg]= useState(0);
  const [tamanhoCalcaXxgg]= useState(0);

  return (
    <div>
      <h1>Controle de Estoque</h1>
        <br />  
      <NavLink className={styles.navLink} to="/">Inicio</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Camisetas">Camisetas</NavLink>{" "}
      <NavLink className={styles.navLink} to="/Calcas">Calças</NavLink>{" "}
      <NavLink className={styles.navLink} to="/Protetor">Protetores</NavLink>{" "}
      
    
        <h2> <GiArmoredPants />  Calças</h2>
        <p>Clique no botão adicionar para acrescentar ao estoque</p>
    
      <Azul 
          tamanhoCalcaP= {tamanhoCalcaP}
          tamanhoCalcaM= {tamanhoCalcaM}
          tamanhoCalcaG= {tamanhoCalcaG}
          tamanhoCalcaGg= {tamanhoCalcaGg}
          tamanhoCalcaXg= {tamanhoCalcaXg}
          tamanhoCalcaXxg= {tamanhoCalcaXxg}
          tamanhoCalcaXxgg= {tamanhoCalcaXxgg}  
      />
      <br />

    </div>
  );
}

export default Calcas;
