import React,{ useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../styles/CamisaMarinho.module.css'
import {IoRemoveCircleSharp} from 'react-icons/io5'

function Marinho() {
  const [tamanhoCamisaMarinhoP,setTamanhoCamisaMarinhoP ]= useState(localStorage.getItem('camisaMarinhoP'));
  const [tamanhoCamisaMarinhoM,setTamanhoCamisaMarinhoM]= useState(localStorage.getItem('camisaMarinhoM'));
  const [tamanhoCamisaMarinhoG,setTamanhoCamisaMarinhoG]= useState(localStorage.getItem('camisaMarinhoG'));
  const [tamanhoCamisaMarinhoGg,setTamanhoCamisaMarinhoGg]= useState(localStorage.getItem('camisaMarinhoGg'));
  const [tamanhoCamisaMarinhoXg,setTamanhoCamisaMarinhoXg]= useState(localStorage.getItem('camisaMarinhoXg'));
  const [tamanhoCamisaMarinhoXxg,setTamanhoCamisaMarinhoXxg]= useState(localStorage.getItem('camisaMarinhoXxg'));
  const [tamanhoCamisaMarinhoXxgg,setTamanhoCamisaMarinhoXxgg]= useState(localStorage.getItem('camisaMarinhoXxgg'));

  let adicionarCamisaMarinhoP = () => {
    localStorage.setItem('camisaMarinhoP', Number (tamanhoCamisaMarinhoP) +1);
    let camisaMarinhoP = localStorage.getItem('camisaMarinhoP');
    setTamanhoCamisaMarinhoP(Number(camisaMarinhoP));
    console.log('Adicionei ' + camisaMarinhoP);
  }
  
  let adicionarCamisaMarinhoM = () => {
    localStorage.setItem('camisaMarinhoM', Number (tamanhoCamisaMarinhoM) +1);
    let camisaMarinhoM = localStorage.getItem('camisaMarinhoM');
    setTamanhoCamisaMarinhoM(Number(camisaMarinhoM));
    console.log('Adicionei ' + camisaMarinhoM);
  }
  
  let adicionarcamisaMarinhoG = (e) => {
    localStorage.setItem('camisaMarinhoG', Number (tamanhoCamisaMarinhoG) +1);
    let camisaMarinhoG = localStorage.getItem('camisaMarinhoG');
    setTamanhoCamisaMarinhoG(Number(camisaMarinhoG));
    console.log('Adicionei ' + camisaMarinhoG);
  }  
  
  let adicionarCamisaMarinhoGg = (e) => { 
    localStorage.setItem('camisaMarinhoGg', Number (tamanhoCamisaMarinhoGg) +1);
    let camisaMarinhoGg = localStorage.getItem('camisaMarinhoGg');
    setTamanhoCamisaMarinhoGg(Number(camisaMarinhoGg));
    console.log('Adicionei ' + camisaMarinhoGg);
  } 
  
  let adicionarCamisaMarinhoXg = (e) => {
    localStorage.setItem('camisaMarinhoXg', Number (tamanhoCamisaMarinhoXg) +1);
    let camisaMarinhoXg = localStorage.getItem('camisaMarinhoXg');
    setTamanhoCamisaMarinhoXg(Number(camisaMarinhoXg));
    console.log('Adicionei ' + camisaMarinhoXg);
  }
  
  let adicionarCamisaMarinhoXxg = (e) => {
    localStorage.setItem('camisaMarinhoXxg', Number (tamanhoCamisaMarinhoXxg) +1);
    let camisaXxg = localStorage.getItem('camisaMarinhoXxg');
    setTamanhoCamisaMarinhoXxg(Number(camisaXxg));
    console.log('Adicionei ' + camisaXxg);
  }
  let adicionarCamisaMarinhoXxgg = (e) => {
    localStorage.setItem('camisaMarinhoXxgg', Number (tamanhoCamisaMarinhoXxgg) +1);
    let camisaMarinhoXxgg = localStorage.getItem('camisaMarinhoXxgg');
    setTamanhoCamisaMarinhoXxgg(Number(camisaMarinhoXxgg));
    console.log('Adicionei ' + camisaMarinhoXxgg);
  }


  let removerCamisaMarinhoP = () => {
    if(tamanhoCamisaMarinhoP < 1) {
      setTamanhoCamisaMarinhoP(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoP', tamanhoCamisaMarinhoP -1);
      let camisaMarinhoP = localStorage.getItem('camisaMarinhoP');
      setTamanhoCamisaMarinhoP(Number(camisaMarinhoP) );  
      console.log('Removi ' + camisaMarinhoP);
    }
  }


  let removerCamisaMarinhoM = () => {
    if(tamanhoCamisaMarinhoM < 1) {
      setTamanhoCamisaMarinhoM(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoM', tamanhoCamisaMarinhoM -1);
      let camisaMarinhoM = localStorage.getItem('camisaMarinhoM');
      setTamanhoCamisaMarinhoM(Number(camisaMarinhoM) );  
      console.log('Removi ' + camisaMarinhoM);
    }
  }

  let removerCamisaMarinhoG = () => {
    if(tamanhoCamisaMarinhoG < 1) {
      setTamanhoCamisaMarinhoG(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoG', tamanhoCamisaMarinhoG -1);
      let camisaMarinhoG = localStorage.getItem('camisaMarinhoG');
      setTamanhoCamisaMarinhoG(Number(camisaMarinhoG) );  
      console.log('Removi ' + camisaMarinhoG);
    }
  }  

  let removerCamisaMarinhoGg = () => {
    if(tamanhoCamisaMarinhoGg < 1) {
      setTamanhoCamisaMarinhoGg(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoGg', tamanhoCamisaMarinhoGg -1);
      let camisaMarinhoGg = localStorage.getItem('camisaMarinhoGg');
      setTamanhoCamisaMarinhoGg(Number(camisaMarinhoGg) );  
      console.log('Removi ' + camisaMarinhoGg);
    }
  } 
  
  let removerCamisaMarinhoXg = () => {
    if(tamanhoCamisaMarinhoXg < 1) {
      setTamanhoCamisaMarinhoXg(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoXg', tamanhoCamisaMarinhoXg -1);
      let camisaMarinhoXg = localStorage.getItem('camisaMarinhoXg');
      setTamanhoCamisaMarinhoXg(Number(camisaMarinhoXg) );  
      console.log('Removi ' + camisaMarinhoXg);
    }
  } 

  let removerCamisaMarinhoXxg = () => {
    if(tamanhoCamisaMarinhoXxg < 1) {
      setTamanhoCamisaMarinhoXxg(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoXxg', tamanhoCamisaMarinhoXxg -1);
      let camisaMarinhoXxg = localStorage.getItem('camisaMarinhoXxg');
      setTamanhoCamisaMarinhoXxg(Number(camisaMarinhoXxg) );  
      console.log('Removi ' + camisaMarinhoXxg);
    }
  }

  let removerCamisaMarinhoXxgg = (e) => {
    if(tamanhoCamisaMarinhoXxgg < 1) {
      setTamanhoCamisaMarinhoXxgg(0);
    } 
    else {
      localStorage.setItem('camisaMarinhoXxgg', tamanhoCamisaMarinhoXxgg -1);
      let camisaMarinhoXxgg = localStorage.getItem('camisaMarinhoXxgg');
      setTamanhoCamisaMarinhoXxgg(Number(camisaMarinhoXxgg) );  
      console.log('Removi ' + camisaMarinhoXxgg);
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
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>P</td>
            <td >{tamanhoCamisaMarinhoP < 1 ? 0 : tamanhoCamisaMarinhoP}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>2</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>M</td>
            <td >{tamanhoCamisaMarinhoM < 1 ? 0 : tamanhoCamisaMarinhoM}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>3</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>G</td>
            <td >{tamanhoCamisaMarinhoG < 1 ? 0 : tamanhoCamisaMarinhoG}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>4</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>GG</td>
            <td >{tamanhoCamisaMarinhoGg < 1 ? 0 : tamanhoCamisaMarinhoGg}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>5</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>XG</td>
            <td >{tamanhoCamisaMarinhoXg < 1 ? 0 : tamanhoCamisaMarinhoXg}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>6</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>XXG</td>
            <td>{tamanhoCamisaMarinhoXxg < 1 ? 0 : tamanhoCamisaMarinhoXxg}</td>
          </tr>

          <tr>
            <th scope="row" className={styles.texto}>7</th>
            <td className={styles.texto}>Camiseta</td>
            <td className={styles.texto}>Azul Marinho</td>
            <td className={styles.texto}>XXGG</td>
            <td >{tamanhoCamisaMarinhoXxgg < 1 ? 0 : tamanhoCamisaMarinhoXxgg}</td>
          </tr>
        </tbody>
      </table>

    <br /> <br />

 
      <FaPlusSquare className={styles.botaoP} onClick={adicionarCamisaMarinhoP} />{" "}
      <FaPlusSquare className={styles.botaoM} onClick={adicionarCamisaMarinhoM} />{" "}
      <FaPlusSquare className={styles.botaoG} onClick={adicionarcamisaMarinhoG} />{" "}
      <FaPlusSquare className={styles.botaoGg} onClick={adicionarCamisaMarinhoGg} /> {" "}
      <FaPlusSquare className={styles.botaoXg} onClick={adicionarCamisaMarinhoXg} /> {" "}
      <FaPlusSquare className={styles.botaoXxg} onClick={adicionarCamisaMarinhoXxg} />{" "}
      <FaPlusSquare className={styles.botaoXxxg} onClick={adicionarCamisaMarinhoXxgg} />{" "}
     

      <IoRemoveCircleSharp className={styles.botaoRemoverP}  onClick={removerCamisaMarinhoP} />
      <IoRemoveCircleSharp className={styles.botaoRemoverM}  onClick={removerCamisaMarinhoM} />
      <IoRemoveCircleSharp className={styles.botaoRemoverG}  onClick={removerCamisaMarinhoG} />
      <IoRemoveCircleSharp className={styles.botaoRemoverGg}  onClick={removerCamisaMarinhoGg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXg}  onClick={removerCamisaMarinhoXg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxg}  onClick={removerCamisaMarinhoXxg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxgg}  onClick={removerCamisaMarinhoXxgg} />
     
    </div>
  )
}

export default Marinho