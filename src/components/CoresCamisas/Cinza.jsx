import React, {useState} from "react";
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../styles/CamisaCinza.module.css'
import {IoRemoveCircleSharp} from 'react-icons/io5'

function Cinza() {
  const [tamanhoCamisaCinzaP,setTamanhoCamisaCinzaP ]= useState(localStorage.getItem('camisaCinzaP'));
  const [tamanhoCamisaCinzaM,setTamanhoCamisaCinzaM]= useState(localStorage.getItem('camisaCinzaM'));
  const [tamanhoCamisaCinzaG,setTamanhoCamisaCinzaG]= useState(localStorage.getItem('camisaCinzaG'));
  const [tamanhoCamisaCinzaGg,setTamanhoCamisaCinzaGg]= useState(localStorage.getItem('camisaCinzaGg'));
  const [tamanhoCamisaCinzaXg,setTamanhoCamisaCinzaXg]= useState(localStorage.getItem('camisaCinzaXg'));
  const [tamanhoCamisaCinzaXxg,setTamanhoCamisaCinzaXxg]= useState(localStorage.getItem('camisaCinzaXxg'));
  const [tamanhoCamisaCinzaXxgg,setTamanhoCamisaCinzaXxgg]= useState(localStorage.getItem('camisaCinzaXxgg'));

  let adicionarCamisaCinzaP = () => {
    localStorage.setItem('camisaCinzaP', Number (tamanhoCamisaCinzaP) +1);
    let camisaCinzaP = localStorage.getItem('camisaCinzaP');
    setTamanhoCamisaCinzaP(Number(camisaCinzaP));
    console.log('Adicionei ' + camisaCinzaP);
  }
  
  let adicionarCamisaCinzaM = () => {
    localStorage.setItem('camisaCinzaM', Number (tamanhoCamisaCinzaM) +1);
    let camisaCinzaM = localStorage.getItem('camisaCinzaM');
    setTamanhoCamisaCinzaM(Number(camisaCinzaM));
    console.log('Adicionei ' + camisaCinzaM);
  }
  
  let adicionarcamisaCinzaG = (e) => {
    localStorage.setItem('camisaCinzaG', Number (tamanhoCamisaCinzaG) +1);
    let camisaCinzaG = localStorage.getItem('camisaCinzaG');
    setTamanhoCamisaCinzaG(Number(camisaCinzaG));
    console.log('Adicionei ' + camisaCinzaG);
  }  
  
  let adicionarCamisaCinzaGg = (e) => { 
    localStorage.setItem('camisaCinzaGg', Number (tamanhoCamisaCinzaGg) +1);
    let camisaCinzaGg = localStorage.getItem('camisaCinzaGg');
    setTamanhoCamisaCinzaGg(Number(camisaCinzaGg));
    console.log('Adicionei ' + camisaCinzaGg);
  } 
  
  let adicionarCamisaCinzaXg = (e) => {
    localStorage.setItem('camisaCinzaXg', Number (tamanhoCamisaCinzaXg) +1);
    let camisaCinzaXg = localStorage.getItem('camisaCinzaXg');
    setTamanhoCamisaCinzaXg(Number(camisaCinzaXg));
    console.log('Adicionei ' + camisaCinzaXg);
  }
  
  let adicionarCamisaCinzaXxg = (e) => {
    localStorage.setItem('camisaCinzaXxg', Number (tamanhoCamisaCinzaXxg) +1);
    let camisaXxg = localStorage.getItem('camisaCinzaXxg');
    setTamanhoCamisaCinzaXxg(Number(camisaXxg));
    console.log('Adicionei ' + camisaXxg);
  }
  let adicionarCamisaCinzaXxgg = (e) => {
    localStorage.setItem('camisaCinzaXxgg', Number (tamanhoCamisaCinzaXxgg) +1);
    let camisaCinzaXxgg = localStorage.getItem('camisaCinzaXxgg');
    setTamanhoCamisaCinzaXxgg(Number(camisaCinzaXxgg));
    console.log('Adicionei ' + camisaCinzaXxgg);
  }


  let removerCamisaCinzaP = () => {
    if(tamanhoCamisaCinzaP < 1) {
      setTamanhoCamisaCinzaP(0);
    } 
    else {
      localStorage.setItem('camisaCinzaP', tamanhoCamisaCinzaP -1);
      let camisaCinzaP = localStorage.getItem('camisaCinzaP');
      setTamanhoCamisaCinzaP(Number(camisaCinzaP) );  
      console.log('Removi ' + camisaCinzaP);
    }
  }


  let removerCamisaCinzaM = () => {
    if(tamanhoCamisaCinzaM < 1) {
      setTamanhoCamisaCinzaM(0);
    } 
    else {
      localStorage.setItem('camisaCinzaM', tamanhoCamisaCinzaM -1);
      let camisaCinzaM = localStorage.getItem('camisaCinzaM');
      setTamanhoCamisaCinzaM(Number(camisaCinzaM) );  
      console.log('Removi ' + camisaCinzaM);
    }
  }

  let removerCamisaCinzaG = () => {
    if(tamanhoCamisaCinzaG < 1) {
      setTamanhoCamisaCinzaG(0);
    } 
    else {
      localStorage.setItem('camisaCinzaG', tamanhoCamisaCinzaG -1);
      let camisaCinzaG = localStorage.getItem('camisaCinzaG');
      setTamanhoCamisaCinzaG(Number(camisaCinzaG) );  
      console.log('Removi ' + camisaCinzaG);
    }
  }  

  let removerCamisaCinzaGg = () => {
    if(tamanhoCamisaCinzaGg < 1) {
      setTamanhoCamisaCinzaGg(0);
    } 
    else {
      localStorage.setItem('camisaCinzaGg', tamanhoCamisaCinzaGg -1);
      let camisaCinzaGg = localStorage.getItem('camisaCinzaGg');
      setTamanhoCamisaCinzaGg(Number(camisaCinzaGg) );  
      console.log('Removi ' + camisaCinzaGg);
    }
  } 
  
  let removerCamisaCinzaXg = () => {
    if(tamanhoCamisaCinzaXg < 1) {
      setTamanhoCamisaCinzaXg(0);
    } 
    else {
      localStorage.setItem('camisaCinzaXg', tamanhoCamisaCinzaXg -1);
      let camisaCinzaXg = localStorage.getItem('camisaCinzaXg');
      setTamanhoCamisaCinzaXg(Number(camisaCinzaXg) );  
      console.log('Removi ' + camisaCinzaXg);
    }
  } 

  let removerCamisaCinzaXxg = () => {
    if(tamanhoCamisaCinzaXxg < 1) {
      setTamanhoCamisaCinzaXxg(0);
    } 
    else {
      localStorage.setItem('camisaCinzaXxg', tamanhoCamisaCinzaXxg -1);
      let camisaCinzaXxg = localStorage.getItem('camisaCinzaXxg');
      setTamanhoCamisaCinzaXxg(Number(camisaCinzaXxg) );  
      console.log('Removi ' + camisaCinzaXxg);
    }
  }

  let removerCamisaCinzaXxgg = (e) => {
    if(tamanhoCamisaCinzaXxgg < 1) {
      setTamanhoCamisaCinzaXxgg(0);
    } 
    else {
      localStorage.setItem('camisaCinzaXxgg', tamanhoCamisaCinzaXxgg -1);
      let camisaCinzaXxgg = localStorage.getItem('camisaCinzaXxgg');
      setTamanhoCamisaCinzaXxgg(Number(camisaCinzaXxgg) );  
      console.log('Removi ' + camisaCinzaXxgg);
    }
  }

  return (
    <div>
         <table className={styles.tabela}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tipo</th>
            <th scope="col">Cor</th>
            <th scope="col">Tamanho</th>
            <th scope="col">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"className={styles.texto}>1</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>P</td>
            <td >
              {tamanhoCamisaCinzaP < 1 ? 0 : tamanhoCamisaCinzaP}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>2</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>M</td>
            <td  >
            {tamanhoCamisaCinzaM < 1 ? 0 : tamanhoCamisaCinzaM}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>3</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>G</td>
            <td  >
           {tamanhoCamisaCinzaG < 1 ? 0 : tamanhoCamisaCinzaG}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>4</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>Gg</td>
            <td  >
            {tamanhoCamisaCinzaGg < 1 ? 0 : tamanhoCamisaCinzaGg}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>5</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>Xg</td>
            <td  >
            {tamanhoCamisaCinzaXg < 1 ? 0 : tamanhoCamisaCinzaXg}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>6</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>XXG</td>
            <td  >
            {tamanhoCamisaCinzaXxg < 1 ? 0 : tamanhoCamisaCinzaXxg}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>7</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Cinza</td>
            <td className={styles.texto}>XXGG</td>
            <td >
            {tamanhoCamisaCinzaXxgg < 1 ? 0 : tamanhoCamisaCinzaXxgg}
            </td>
          </tr>
        </tbody>
      </table>

      <br /> <br />

      <FaPlusSquare className={styles.botaoP} onClick={adicionarCamisaCinzaP} />{" "}
      <FaPlusSquare className={styles.botaoM} onClick={adicionarCamisaCinzaM} />{" "}
      <FaPlusSquare className={styles.botaoG} onClick={adicionarcamisaCinzaG} />{" "}
      <FaPlusSquare className={styles.botaoGg} onClick={adicionarCamisaCinzaGg} /> {" "}
      <FaPlusSquare className={styles.botaoXg} onClick={adicionarCamisaCinzaXg} /> {" "}
      <FaPlusSquare className={styles.botaoXxg} onClick={adicionarCamisaCinzaXxg} />{" "}
      <FaPlusSquare className={styles.botaoXxxg} onClick={adicionarCamisaCinzaXxgg} />{" "}
     

      <IoRemoveCircleSharp className={styles.botaoRemoverP}  onClick={removerCamisaCinzaP} />
      <IoRemoveCircleSharp className={styles.botaoRemoverM}  onClick={removerCamisaCinzaM} />
      <IoRemoveCircleSharp className={styles.botaoRemoverG}  onClick={removerCamisaCinzaG} />
      <IoRemoveCircleSharp className={styles.botaoRemoverGg}  onClick={removerCamisaCinzaGg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXg}  onClick={removerCamisaCinzaXg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxg}  onClick={removerCamisaCinzaXxg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxgg}  onClick={removerCamisaCinzaXxgg} />
     
    </div>
  )
}

export default Cinza