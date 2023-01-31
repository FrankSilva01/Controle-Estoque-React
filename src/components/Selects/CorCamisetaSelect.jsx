import React, { useState } from "react";
import Cinza from "../CoresCamisas/Cinza";
import Branca from "../CoresCamisas/Branca";
import Marinho from "../CoresCamisas/Marinho";
import Preto from "../CoresCamisas/Preto";
import Royal from "../CoresCamisas/Royal";



function CorCamisetaSelect(props) {

  const [selects, setSelects] = useState("");

  return (
    <div>
         
      <label>Cor</label> {' '}
      <select value={selects} onChange={(e) => setSelects(e.target.value)}>

       <option>- Nenhum -</option>

        <option>Cinza</option>

        <option>Azul Royal</option>

        <option>Azul Marinho</option>

        <option>Branco</option>

        <option>Preto</option>
      </select>

      <div>{selects === "Cinza" ? <Cinza /> : null }</div>

      <div>{selects === "Branco" ? <Branca /> : null}</div>

      <div>{selects === "Azul Royal" ? <Royal /> : null}</div>

      <div>{selects === "Azul Marinho" ? <Marinho /> : null}</div>

      <div>{selects === "Preto" ? <Preto /> : null}</div>
      
    </div>
  );
}

export default CorCamisetaSelect;
