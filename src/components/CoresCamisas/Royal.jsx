import React, { useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../styles/CamisaRoyal.module.css'
import {IoRemoveCircleSharp} from 'react-icons/io5'

function Royal() {
  const [tamanhoCamisaRoyalP,setTamanhoCamisaRoyalP ]= useState(localStorage.getItem('camisaRoyalP'));
  const [tamanhoCamisaRoyalM,setTamanhoCamisaRoyalM]= useState(localStorage.getItem('camisaRoyalM'));
  const [tamanhoCamisaRoyalG,setTamanhoCamisaRoyalG]= useState(localStorage.getItem('camisaRoyalG'));
  const [tamanhoCamisaRoyalGg,setTamanhoCamisaRoyalGg]= useState(localStorage.getItem('camisaRoyalGg'));
  const [tamanhoCamisaRoyalXg,setTamanhoCamisaRoyalXg]= useState(localStorage.getItem('camisaRoyalXg'));
  const [tamanhoCamisaRoyalXxg,setTamanhoCamisaRoyalXxg]= useState(localStorage.getItem('camisaRoyalXxg'));
  const [tamanhoCamisaRoyalXxgg,setTamanhoCamisaRoyalXxgg]= useState(localStorage.getItem('camisaRoyalXxgg'));

  let adicionarCamisaRoyalP = () => {
      localStorage.setItem('camisaRoyalP', Number (tamanhoCamisaRoyalP) +1);
        let camisaRoyalP = localStorage.getItem('camisaRoyalP');
      setTamanhoCamisaRoyalP(Number(camisaRoyalP));
    console.log('Adicionei ' + camisaRoyalP);
  }
  
  let adicionarCamisaRoyalM = () => {
     localStorage.setItem('camisaRoyalM', Number (tamanhoCamisaRoyalM) +1);
       let camisaRoyalM = localStorage.getItem('camisaRoyalM');
      setTamanhoCamisaRoyalM(Number(camisaRoyalM));
    console.log('Adicionei ' + camisaRoyalM);
  }
  
  let adicionarcamisaRoyalG = (e) => {
      localStorage.setItem('camisaRoyalG', Number (tamanhoCamisaRoyalG) +1);
       let camisaRoyalG = localStorage.getItem('camisaRoyalG');
      setTamanhoCamisaRoyalG(Number(camisaRoyalG));
    console.log('Adicionei ' + camisaRoyalG);
  }  
  
  let adicionarCamisaRoyalGg = (e) => { 
     localStorage.setItem('camisaRoyalGg', Number (tamanhoCamisaRoyalGg) +1);
       let camisaRoyalGg = localStorage.getItem('camisaRoyalGg');
     setTamanhoCamisaRoyalGg(Number(camisaRoyalGg));
    console.log('Adicionei ' + camisaRoyalGg);
  } 
  
  let adicionarCamisaRoyalXg = (e) => {
     localStorage.setItem('camisaRoyalXg', Number (tamanhoCamisaRoyalXg) +1);
        let camisaRoyalXg = localStorage.getItem('camisaRoyalXg');
      setTamanhoCamisaRoyalXg(Number(camisaRoyalXg));
    console.log('Adicionei ' + camisaRoyalXg);
  }
  
  let adicionarCamisaRoyalXxg = (e) => {
      localStorage.setItem('camisaRoyalXxg', Number (tamanhoCamisaRoyalXxg) +1);
        let camisaXxg = localStorage.getItem('camisaRoyalXxg');
      setTamanhoCamisaRoyalXxg(Number(camisaXxg));
    console.log('Adicionei ' + camisaXxg);
  }
  let adicionarCamisaRoyalXxgg = (e) => {
     localStorage.setItem('camisaRoyalXxgg', Number (tamanhoCamisaRoyalXxgg) +1);
       let camisaRoyalXxgg = localStorage.getItem('camisaRoyalXxgg');
      setTamanhoCamisaRoyalXxgg(Number(camisaRoyalXxgg));
    console.log('Adicionei ' + camisaRoyalXxgg);
  }


  let removerCamisaRoyalP = () => {
    if(tamanhoCamisaRoyalP < 1) {
      setTamanhoCamisaRoyalP(0);
    } 
    else {
       localStorage.setItem('camisaRoyalP', tamanhoCamisaRoyalP -1);
         let camisaRoyalP = localStorage.getItem('camisaRoyalP');
        setTamanhoCamisaRoyalP(Number(camisaRoyalP) );  
      console.log('Removi ' + camisaRoyalP);
    }
  }


  let removerCamisaRoyalM = () => {
    if(tamanhoCamisaRoyalM < 1) {
      setTamanhoCamisaRoyalM(0);
    } 
    else {
        localStorage.setItem('camisaRoyalM', tamanhoCamisaRoyalM -1);
         let camisaRoyalM = localStorage.getItem('camisaRoyalM');
        setTamanhoCamisaRoyalM(Number(camisaRoyalM) );  
      console.log('Removi ' + camisaRoyalM);
    }
  }

  let removerCamisaRoyalG = () => {
    if(tamanhoCamisaRoyalG < 1) {
      setTamanhoCamisaRoyalG(0);
    } 
    else {
        localStorage.setItem('camisaRoyalG', tamanhoCamisaRoyalG -1);
          let camisaRoyalG = localStorage.getItem('camisaRoyalG');
        setTamanhoCamisaRoyalG(Number(camisaRoyalG) );  
      console.log('Removi ' + camisaRoyalG);
    }
  }  

  let removerCamisaRoyalGg = () => {
    if(tamanhoCamisaRoyalGg < 1) {
      setTamanhoCamisaRoyalGg(0);
    } 
    else {
        localStorage.setItem('camisaRoyalGg', tamanhoCamisaRoyalGg -1);
          let camisaRoyalGg = localStorage.getItem('camisaRoyalGg');
        setTamanhoCamisaRoyalGg(Number(camisaRoyalGg) );  
      console.log('Removi ' + camisaRoyalGg);
    }
  } 
  
  let removerCamisaRoyalXg = () => {
    if(tamanhoCamisaRoyalXg < 1) {
      setTamanhoCamisaRoyalXg(0);
    } 
    else {
       localStorage.setItem('camisaRoyalXg', tamanhoCamisaRoyalXg -1);
         let camisaRoyalXg = localStorage.getItem('camisaRoyalXg');
        setTamanhoCamisaRoyalXg(Number(camisaRoyalXg) );  
      console.log('Removi ' + camisaRoyalXg);
    }
  } 

  let removerCamisaRoyalXxg = () => {
    if(tamanhoCamisaRoyalXxg < 1) {
      setTamanhoCamisaRoyalXxg(0);
    } 
    else {
        localStorage.setItem('camisaRoyalXxg', tamanhoCamisaRoyalXxg -1);
          let camisaRoyalXxg = localStorage.getItem('camisaRoyalXxg');
        setTamanhoCamisaRoyalXxg(Number(camisaRoyalXxg) );  
      console.log('Removi ' + camisaRoyalXxg);
    }
  }

  let removerCamisaRoyalXxgg = (e) => {
    if(tamanhoCamisaRoyalXxgg < 1) {
      setTamanhoCamisaRoyalXxgg(0);
    } 
    else {
        localStorage.setItem('camisaRoyalXxgg', tamanhoCamisaRoyalXxgg -1);
          let camisaRoyalXxgg = localStorage.getItem('camisaRoyalXxgg');
        setTamanhoCamisaRoyalXxgg(Number(camisaRoyalXxgg) );  
      console.log('Removi ' + camisaRoyalXxgg);
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
            <th scope="row" className={styles.texto}>1</th>
              <td className={styles.texto}>Camiseta</td>
                <td className={styles.texto}>Azul Royal</td>
              <td className={styles.texto}>P</td>
            <td  >
          {tamanhoCamisaRoyalP < 1 ? 0 : tamanhoCamisaRoyalP}
        </td>
       </tr>

          <tr>
               <th scope="row" className={styles.texto}>2</th>
                 <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Azul Royal</td>
                 <td className={styles.texto}>M</td>
               <td  >
              {tamanhoCamisaRoyalM < 1 ? 0 : tamanhoCamisaRoyalM}
            </td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>3</th>
                  <td className={styles.texto}>Camiseta</td>
                    <td className={styles.texto}>Azul Royal</td>
                   <td className={styles.texto}>G</td>
                 <td  >
              {tamanhoCamisaRoyalG < 1 ? 0 : tamanhoCamisaRoyalG}
            </td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>4</th>
                <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Azul Royal</td>
                    <td className={styles.texto}>GG</td>
                 <td  >
              {tamanhoCamisaRoyalGg < 1 ? 0 : tamanhoCamisaRoyalGg}
            </td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>5</th>
                <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Azul Royal</td>
                  <td className={styles.texto}>XG</td>
                <td  >
              {tamanhoCamisaRoyalXg < 1 ? 0 : tamanhoCamisaRoyalXg}
            </td>
          </tr>

          <tr>
               <th scope="row" className={styles.texto}>6</th>
                   <td className={styles.texto}>Camiseta</td>
                    <td className={styles.texto}>Azul Royal</td>
                  <td className={styles.texto}>XXG</td>
                <td  >
              {tamanhoCamisaRoyalXxg < 1 ? 0 : tamanhoCamisaRoyalXxg}
            </td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>7</th>
                  <td className={styles.texto}>Camiseta</td>
                    <td className={styles.texto}>Azul Royal</td>
                    <td className={styles.texto}>XXGG</td>
                  <td  >
                {tamanhoCamisaRoyalXxgg < 1 ? 0 : tamanhoCamisaRoyalXxgg}
            </td>
          </tr>
        </tbody>
      </table>

      <br /> <br />

     
      <FaPlusSquare className={styles.botaoP} onClick={adicionarCamisaRoyalP} />{" "}
      <FaPlusSquare className={styles.botaoM} onClick={adicionarCamisaRoyalM} />{" "}
      <FaPlusSquare className={styles.botaoG} onClick={adicionarcamisaRoyalG} />{" "}
      <FaPlusSquare className={styles.botaoGg} onClick={adicionarCamisaRoyalGg} /> {" "}
      <FaPlusSquare className={styles.botaoXg} onClick={adicionarCamisaRoyalXg} /> {" "}
      <FaPlusSquare className={styles.botaoXxg} onClick={adicionarCamisaRoyalXxg} />{" "}
      <FaPlusSquare className={styles.botaoXxxg} onClick={adicionarCamisaRoyalXxgg} />{" "}
     

      <IoRemoveCircleSharp className={styles.botaoRemoverP}  onClick={removerCamisaRoyalP} />
      <IoRemoveCircleSharp className={styles.botaoRemoverM}  onClick={removerCamisaRoyalM} />
      <IoRemoveCircleSharp className={styles.botaoRemoverG}  onClick={removerCamisaRoyalG} />
      <IoRemoveCircleSharp className={styles.botaoRemoverGg}  onClick={removerCamisaRoyalGg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXg}  onClick={removerCamisaRoyalXg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxg}  onClick={removerCamisaRoyalXxg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxgg}  onClick={removerCamisaRoyalXxgg} />
    </div>
  )
}

export default Royal