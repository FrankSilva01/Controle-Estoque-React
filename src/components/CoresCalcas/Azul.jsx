import React, {useState} from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../styles/CalcaAzul.module.css'
import {IoRemoveCircleSharp} from 'react-icons/io5'

function Azul() {

  const [tamanhoCalcaP, setTamanhoCalcaP] = useState(localStorage.getItem('calcaP'));
  const [tamanhoCalcaM, setTamanhoCalcaM] = useState(localStorage.getItem('calcaM'));
  const [tamanhoCalcaG, setTamanhoCalcaG] = useState(localStorage.getItem('calcaG'));
  const [tamanhoCalcaGg, setTamanhoCalcaGg] = useState(localStorage.getItem('calcaGg'));
  const [tamanhoCalcaXg, setTamanhoCalcaXg] = useState(localStorage.getItem('calcaXg'));
  const [tamanhoCalcaXxg, setTamanhoCalcaXxg] = useState(localStorage.getItem('calcaXxg'));
  const [tamanhoCalcaXxgg, setTamanhoCalcaXxgg] = useState(localStorage.getItem('calcaXxgg'));

  let adicionarCalcaP = () => {
    localStorage.setItem('calcaP', Number (tamanhoCalcaP) +1);
    let calcaP = localStorage.getItem('calcaP');
    setTamanhoCalcaP(Number(calcaP));
  }
  
  let adicionarCalcaM = (e) => {
    localStorage.setItem('calcaM', Number (tamanhoCalcaM) +1);
    let calcaM = localStorage.getItem('calcaM');
    setTamanhoCalcaM(Number(calcaM) );
  }
  
  let adicionarCalcaG = (e) => {
    localStorage.setItem('calcaG', Number (tamanhoCalcaG) +1);
    let calcaG = localStorage.getItem('calcaG');
    setTamanhoCalcaG(Number(calcaG) ); 
  }  
  
  let adicionarCalcaGg = (e) => {
    localStorage.setItem('calcaGg', Number (tamanhoCalcaGg) +1);
    let calcaGg = localStorage.getItem('calcaGg');
    setTamanhoCalcaGg(Number(calcaGg) );
  } 
  
  let adicionarCalcaXg = (e) => {
    localStorage.setItem('calcaXg', Number (tamanhoCalcaXg) +1);
    let calcaXg = localStorage.getItem('calcaXg');
    setTamanhoCalcaXg(Number(calcaXg) );  
  }
  
  let adicionarCalcaXxg = (e) => {
    localStorage.setItem('calcaXxg', Number (tamanhoCalcaXxg) +1);
    let calcaXxg = localStorage.getItem('calcaXxg');
    setTamanhoCalcaXxg(Number(calcaXxg) );
  }

  let adicionarCalcaXxgg = (e) => {
    localStorage.setItem('calcaXxgg', Number (tamanhoCalcaXxgg) +1);
    let calcaXxgg = localStorage.getItem('calcaXxgg');
    setTamanhoCalcaXxgg(Number(calcaXxgg) );
  }

  let removerCalcaP = () => {
    if(tamanhoCalcaP < 1) {
      setTamanhoCalcaP(0);
    } else {
      localStorage.setItem('calcaP', tamanhoCalcaP -1);
      let calcaP = localStorage.getItem('calcaP');
      setTamanhoCalcaP(Number(calcaP) );  
    }
  }

  let removerCalcaM = () => {
    if(tamanhoCalcaM < 1) {
      setTamanhoCalcaM(0);
    } else {
      localStorage.setItem('calcaM', tamanhoCalcaM -1);
      let calcaM = localStorage.getItem('calcaM');
      setTamanhoCalcaM(Number(calcaM) );
    }
  }
  let removerCalcaG = (e) => {
    if(tamanhoCalcaG < 1) {
      setTamanhoCalcaG(0);
    } else {
      localStorage.setItem('calcaG', tamanhoCalcaG -1);
      let calcaG = localStorage.getItem('calcaG');
      setTamanhoCalcaG(Number(calcaG) );
    }
  }  

  let removerCalcaGg = (e) => {
    if(tamanhoCalcaGg < 1) {
      setTamanhoCalcaGg(0);
    } else {
      localStorage.setItem('calcaGg', tamanhoCalcaGg -1);
      let calcaGg = localStorage.getItem('calcaGg');
      setTamanhoCalcaGg(Number(calcaGg) );
    }  
  } 
  
  let removerCalcaXg = (e) => {
      if(tamanhoCalcaXg < 1) {
      setTamanhoCalcaXg(0);
    } else {
      localStorage.setItem('calcaXg', tamanhoCalcaXg -1);
      let calcaXg = localStorage.getItem('calcaXg');
      setTamanhoCalcaXg(Number(calcaXg) );
    }
  } 

  let removerCalcaXxg = (e) => {
    if(tamanhoCalcaXxg < 1) {
      setTamanhoCalcaXxg(0);
    } else {
      localStorage.setItem('calcaXxg', tamanhoCalcaXxg -1);
      let calcaXxg = localStorage.getItem('calcaXxg');
      setTamanhoCalcaXxg(Number(calcaXxg) );
    }
  }

  let removerCalcaXxgg = (e) => {
    
    if(tamanhoCalcaXxgg < 1) {
      setTamanhoCalcaXxgg(0);
    } else {
      localStorage.setItem('calcaXxgg', tamanhoCalcaXxgg -1);
      let calcaXxgg = localStorage.getItem('calcaXxgg');
      setTamanhoCalcaXxgg(Number(calcaXxgg) );
    }
  }
  return (

    <div>
      
         <table className={styles.tabela}>
        <thead>
          <tr>
            <th scope="col" className={styles.texto}>ID</th>
            <th scope="col" className={styles.texto}>Tipo</th>
            <th scope="col" className={styles.texto}>Cor</th>
            <th scope="col" className={styles.texto}>Tamanho</th>
            <th scope="col" className={styles.texto}>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className={styles.texto}>1</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>P</td>
            <td >
             {tamanhoCalcaP < 1 ? 0 : tamanhoCalcaP}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>2</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>M</td>
            <td >
            {tamanhoCalcaM < 1 ? 0 : tamanhoCalcaM}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>3</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>G</td>
            <td type="number">
            {tamanhoCalcaG < 1 ? 0 : tamanhoCalcaG}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>4</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>GG</td>
            <td type="number">
            {tamanhoCalcaGg < 1 ? 0 : tamanhoCalcaGg}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>5</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>XG</td>
            <td type="number">
            {tamanhoCalcaXg < 1 ? 0 : tamanhoCalcaXg}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>6</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>XXG</td>
            <td type="number">
            {tamanhoCalcaXxg < 1 ? 0 : tamanhoCalcaXxg}
            </td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>7</th>
            <td className={styles.texto}>Calças</td>
            <td className={styles.texto}>Azul</td>
            <td className={styles.texto}>XXGG</td>
            <td>
            {tamanhoCalcaXxgg < 1 ? 0 : tamanhoCalcaXxgg}
            </td>
          </tr>
        </tbody>
      </table>
      <br />
    
      <FaPlusSquare className={styles.botaoP} onClick={adicionarCalcaP} /> {" "}
      <FaPlusSquare className={styles.botaoM} onClick={adicionarCalcaM}  /> {" "}
      <FaPlusSquare className={styles.botaoG} onClick={adicionarCalcaG} />{" "}
      <FaPlusSquare className={styles.botaoGg} onClick={adicionarCalcaGg} /> {" "}
      <FaPlusSquare className={styles.botaoXg} onClick={adicionarCalcaXg} /> {" "}
      <FaPlusSquare className={styles.botaoXxg} onClick={adicionarCalcaXxg} />{" "}
      <FaPlusSquare className={styles.botaoXxxg}onClick={adicionarCalcaXxgg} /> 
   
      <IoRemoveCircleSharp className={styles.botaoRemoverP}  onClick={removerCalcaP} />
      <IoRemoveCircleSharp className={styles.botaoRemoverM}  onClick={removerCalcaM} />
      <IoRemoveCircleSharp className={styles.botaoRemoverG}  onClick={removerCalcaG} />
      <IoRemoveCircleSharp className={styles.botaoRemoverGg}  onClick={removerCalcaGg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXg}  onClick={removerCalcaXg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxg}  onClick={removerCalcaXxg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxgg}  onClick={removerCalcaXxgg} /> 

    </div>
  )
}

export default Azul