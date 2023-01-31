import React, {useState} from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../styles/CamisaBranca.module.css' 
import {IoRemoveCircleSharp} from 'react-icons/io5'

function Branca() {
  const [tamanhoCamisaBrancoP,setTamanhoCamisaBrancoP ]= useState(localStorage.getItem('camisaBrancoP'));
  const [tamanhoCamisaBrancoM,setTamanhoCamisaBrancoM]= useState(localStorage.getItem('camisaBrancoM'));
  const [tamanhoCamisaBrancoG,setTamanhoCamisaBrancoG]= useState(localStorage.getItem('camisaBrancoG'));
  const [tamanhoCamisaBrancoGg,setTamanhoCamisaBrancoGg]= useState(localStorage.getItem('camisaBrancoGg'));
  const [tamanhoCamisaBrancoXg,setTamanhoCamisaBrancoXg]= useState(localStorage.getItem('camisaBrancoXg'));
  const [tamanhoCamisaBrancoXxg,setTamanhoCamisaBrancoXxg]= useState(localStorage.getItem('camisaBrancoXxg'));
  const [tamanhoCamisaBrancoXxgg,setTamanhoCamisaBrancoXxgg]= useState(localStorage.getItem('camisaBrancoXxgg'));

  let adicionarCamisaBrancoP = () => {
    localStorage.setItem('camisaBrancoP', Number (tamanhoCamisaBrancoP) +1);
    let camisaBrancoP = localStorage.getItem('camisaBrancoP');
    setTamanhoCamisaBrancoP(Number(camisaBrancoP));
    console.log('Adicionei ' + camisaBrancoP);
  }
  
  let adicionarCamisaBrancoM = () => {
    localStorage.setItem('camisaBrancoM', Number (tamanhoCamisaBrancoM) +1);
    let camisaBrancoM = localStorage.getItem('camisaBrancoM');
    setTamanhoCamisaBrancoM(Number(camisaBrancoM));
    console.log('Adicionei ' + camisaBrancoM);
  }
  
  let adicionarcamisaBrancoG = (e) => {
    localStorage.setItem('camisaBrancoG', Number (tamanhoCamisaBrancoG) +1);
    let camisaBrancoG = localStorage.getItem('camisaBrancoG');
    setTamanhoCamisaBrancoG(Number(camisaBrancoG));
    console.log('Adicionei ' + camisaBrancoG);
  }  
  
  let adicionarCamisaBrancoGg = (e) => { 
    localStorage.setItem('camisaBrancoGg', Number (tamanhoCamisaBrancoGg) +1);
    let camisaBrancoGg = localStorage.getItem('camisaBrancoGg');
    setTamanhoCamisaBrancoGg(Number(camisaBrancoGg));
    console.log('Adicionei ' + camisaBrancoGg);
  } 
  
  let adicionarCamisaBrancoXg = (e) => {
    localStorage.setItem('camisaBrancoXg', Number (tamanhoCamisaBrancoXg) +1);
    let camisaBrancoXg = localStorage.getItem('camisaBrancoXg');
    setTamanhoCamisaBrancoXg(Number(camisaBrancoXg));
    console.log('Adicionei ' + camisaBrancoXg);
  }
  
  let adicionarCamisaBrancoXxg = (e) => {
    localStorage.setItem('camisaBrancoXxg', Number (tamanhoCamisaBrancoXxg) +1);
    let camisaXxg = localStorage.getItem('camisaBrancoXxg');
    setTamanhoCamisaBrancoXxg(Number(camisaXxg));
    console.log('Adicionei ' + camisaXxg);
  }
  let adicionarCamisaBrancoXxgg = (e) => {
    localStorage.setItem('camisaBrancoXxgg', Number (tamanhoCamisaBrancoXxgg) +1);
    let camisaBrancoXxgg = localStorage.getItem('camisaBrancoXxgg');
    setTamanhoCamisaBrancoXxgg(Number(camisaBrancoXxgg));
    console.log('Adicionei ' + camisaBrancoXxgg);
  }


  let removerCamisaBrancoP = () => {
    if(tamanhoCamisaBrancoP < 1) {
      setTamanhoCamisaBrancoP(0);
    } 
    else {
      localStorage.setItem('camisaBrancoP', tamanhoCamisaBrancoP -1);
      let camisaBrancoP = localStorage.getItem('camisaBrancoP');
      setTamanhoCamisaBrancoP(Number(camisaBrancoP) );  
      console.log('Removi ' + camisaBrancoP);
    }
  }


  let removerCamisaBrancoM = () => {
    if(tamanhoCamisaBrancoM < 1) {
      setTamanhoCamisaBrancoM(0);
    } 
    else {
      localStorage.setItem('camisaBrancoM', tamanhoCamisaBrancoM -1);
      let camisaBrancoM = localStorage.getItem('camisaBrancoM');
      setTamanhoCamisaBrancoM(Number(camisaBrancoM) );  
      console.log('Removi ' + camisaBrancoM);
    }
  }

  let removerCamisaBrancoG = () => {
    if(tamanhoCamisaBrancoG < 1) {
      setTamanhoCamisaBrancoG(0);
    } 
    else {
      localStorage.setItem('camisaBrancoG', tamanhoCamisaBrancoG -1);
      let camisaBrancoG = localStorage.getItem('camisaBrancoG');
      setTamanhoCamisaBrancoG(Number(camisaBrancoG) );  
      console.log('Removi ' + camisaBrancoG);
    }
  }  

  let removerCamisaBrancoGg = () => {
    if(tamanhoCamisaBrancoGg < 1) {
      setTamanhoCamisaBrancoGg(0);
    } 
    else {
      localStorage.setItem('camisaBrancoGg', tamanhoCamisaBrancoGg -1);
      let camisaBrancoGg = localStorage.getItem('camisaBrancoGg');
      setTamanhoCamisaBrancoGg(Number(camisaBrancoGg) );  
      console.log('Removi ' + camisaBrancoGg);
    }
  } 
  
  let removerCamisaBrancoXg = () => {
    if(tamanhoCamisaBrancoXg < 1) {
      setTamanhoCamisaBrancoXg(0);
    } 
    else {
      localStorage.setItem('camisaBrancoXg', tamanhoCamisaBrancoXg -1);
      let camisaBrancoXg = localStorage.getItem('camisaBrancoXg');
      setTamanhoCamisaBrancoXg(Number(camisaBrancoXg) );  
      console.log('Removi ' + camisaBrancoXg);
    }
  } 

  let removerCamisaBrancoXxg = () => {
    if(tamanhoCamisaBrancoXxg < 1) {
      setTamanhoCamisaBrancoXxg(0);
    } 
    else {
      localStorage.setItem('camisaBrancoXxg', tamanhoCamisaBrancoXxg -1);
      let camisaBrancoXxg = localStorage.getItem('camisaBrancoXxg');
      setTamanhoCamisaBrancoXxg(Number(camisaBrancoXxg) );  
      console.log('Removi ' + camisaBrancoXxg);
    }
  }

  let removerCamisaBrancoXxgg = (e) => {
    if(tamanhoCamisaBrancoXxgg < 1) {
      setTamanhoCamisaBrancoXxgg(0);
    } 
    else {
      localStorage.setItem('camisaBrancoXxgg', tamanhoCamisaBrancoXxgg -1);
      let camisaBrancoXxgg = localStorage.getItem('camisaBrancoXxgg');
      setTamanhoCamisaBrancoXxgg(Number(camisaBrancoXxgg) );  
      console.log('Removi ' + camisaBrancoXxgg);
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
          <tr >
            <th scope="row" className={styles.texto}>1</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>P</td>
            <td >{tamanhoCamisaBrancoP < 1 ? 0 : tamanhoCamisaBrancoP}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>2</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>M</td>
            <td >{tamanhoCamisaBrancoM < 1 ? 0 : tamanhoCamisaBrancoM}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>3</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>G</td>
            <td >{tamanhoCamisaBrancoG < 1 ? 0 : tamanhoCamisaBrancoG}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>4</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>GG</td>
            <td >{tamanhoCamisaBrancoGg < 1 ? 0 : tamanhoCamisaBrancoGg}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>5</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>XG</td>
            <td >{tamanhoCamisaBrancoXg < 1 ? 0 : tamanhoCamisaBrancoXg}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>6</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>XXG</td>
            <td >{tamanhoCamisaBrancoXxg < 1 ? 0 : tamanhoCamisaBrancoXxg}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>7</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Branco</td>
            <td className={styles.texto}>XXGG</td>
            <td >{tamanhoCamisaBrancoXxgg < 1 ? 0 : tamanhoCamisaBrancoXxgg}</td>
          </tr>
        </tbody>
      </table>

      <br /> <br />

      <FaPlusSquare className={styles.botaoP} onClick={adicionarCamisaBrancoP} />{" "}
      <FaPlusSquare className={styles.botaoM} onClick={adicionarCamisaBrancoM} />{" "}
      <FaPlusSquare className={styles.botaoG} onClick={adicionarcamisaBrancoG} />{" "}
      <FaPlusSquare className={styles.botaoGg} onClick={adicionarCamisaBrancoGg} /> {" "}
      <FaPlusSquare className={styles.botaoXg} onClick={adicionarCamisaBrancoXg} /> {" "}
      <FaPlusSquare className={styles.botaoXxg} onClick={adicionarCamisaBrancoXxg} />{" "}
      <FaPlusSquare className={styles.botaoXxxg} onClick={adicionarCamisaBrancoXxgg} />{" "}
     

      <IoRemoveCircleSharp className={styles.botaoRemoverP}  onClick={removerCamisaBrancoP} />
      <IoRemoveCircleSharp className={styles.botaoRemoverM}  onClick={removerCamisaBrancoM} />
      <IoRemoveCircleSharp className={styles.botaoRemoverG}  onClick={removerCamisaBrancoG} />
      <IoRemoveCircleSharp className={styles.botaoRemoverGg}  onClick={removerCamisaBrancoGg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXg}  onClick={removerCamisaBrancoXg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxg}  onClick={removerCamisaBrancoXxg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxgg}  onClick={removerCamisaBrancoXxgg} />
     
    </div>
  )
}

export default Branca