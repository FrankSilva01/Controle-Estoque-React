import React, {useState} from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import styles from '../styles/CamisaPreta.module.css'
import {IoRemoveCircleSharp} from 'react-icons/io5'

function Preto() {
  const [tamanhoCamisaPretoP,setTamanhoCamisaPretoP ]= useState(localStorage.getItem('camisaPretoP'));
  const [tamanhoCamisaPretoM,setTamanhoCamisaPretoM]= useState(localStorage.getItem('camisaPretoM'));
  const [tamanhoCamisaPretoG,setTamanhoCamisaPretoG]= useState(localStorage.getItem('camisaPretoG'));
  const [tamanhoCamisaPretoGg,setTamanhoCamisaPretoGg]= useState(localStorage.getItem('camisaPretoGg'));
  const [tamanhoCamisaPretoXg,setTamanhoCamisaPretoXg]= useState(localStorage.getItem('camisaPretoXg'));
  const [tamanhoCamisaPretoXxg,setTamanhoCamisaPretoXxg]= useState(localStorage.getItem('camisaPretoXxg'));
  const [tamanhoCamisaPretoXxgg,setTamanhoCamisaPretoXxgg]= useState(localStorage.getItem('camisaPretoXxgg'));

  let adicionarCamisaPretoP = () => {
      localStorage.setItem('camisaPretoP', Number (tamanhoCamisaPretoP) +1);
        let camisaPretoP = localStorage.getItem('camisaPretoP');
      setTamanhoCamisaPretoP(Number(camisaPretoP));
    console.log('Adicionei ' + camisaPretoP);
  }
  
  let adicionarCamisaPretoM = () => {
     localStorage.setItem('camisaPretoM', Number (tamanhoCamisaPretoM) +1);
       let camisaPretoM = localStorage.getItem('camisaPretoM');
      setTamanhoCamisaPretoM(Number(camisaPretoM));
    console.log('Adicionei ' + camisaPretoM);
  }
  
  let adicionarcamisaPretoG = (e) => {
      localStorage.setItem('camisaPretoG', Number (tamanhoCamisaPretoG) +1);
        let camisaPretoG = localStorage.getItem('camisaPretoG');
      setTamanhoCamisaPretoG(Number(camisaPretoG));
    console.log('Adicionei ' + camisaPretoG);
  }  
  
  let adicionarCamisaPretoGg = (e) => { 
      localStorage.setItem('camisaPretoGg', Number (tamanhoCamisaPretoGg) +1);
        let camisaPretoGg = localStorage.getItem('camisaPretoGg');
      setTamanhoCamisaPretoGg(Number(camisaPretoGg));
    console.log('Adicionei ' + camisaPretoGg);
  } 
  
  let adicionarCamisaPretoXg = (e) => {
      localStorage.setItem('camisaPretoXg', Number (tamanhoCamisaPretoXg) +1);
        let camisaPretoXg = localStorage.getItem('camisaPretoXg');
      setTamanhoCamisaPretoXg(Number(camisaPretoXg));
    console.log('Adicionei ' + camisaPretoXg);
  }
  
  let adicionarCamisaPretoXxg = (e) => {
      localStorage.setItem('camisaPretoXxg', Number (tamanhoCamisaPretoXxg) +1);
        let camisaXxg = localStorage.getItem('camisaPretoXxg');
      setTamanhoCamisaPretoXxg(Number(camisaXxg));
    console.log('Adicionei ' + camisaXxg);
  }
  let adicionarCamisaPretoXxgg = (e) => {
     localStorage.setItem('camisaPretoXxgg', Number (tamanhoCamisaPretoXxgg) +1);
       let camisaPretoXxgg = localStorage.getItem('camisaPretoXxgg');
      setTamanhoCamisaPretoXxgg(Number(camisaPretoXxgg));
    console.log('Adicionei ' + camisaPretoXxgg);
  }


  let removerCamisaPretoP = () => {
    if(tamanhoCamisaPretoP < 1) {
      setTamanhoCamisaPretoP(0);
    } 
    else {
       localStorage.setItem('camisaPretoP', tamanhoCamisaPretoP -1);
         let camisaPretoP = localStorage.getItem('camisaPretoP');
       setTamanhoCamisaPretoP(Number(camisaPretoP) );  
      console.log('Removi ' + camisaPretoP);
    }
  }


  let removerCamisaPretoM = () => {
    if(tamanhoCamisaPretoM < 1) {
      setTamanhoCamisaPretoM(0);
    } 
    else {
       localStorage.setItem('camisaPretoM', tamanhoCamisaPretoM -1);
          let camisaPretoM = localStorage.getItem('camisaPretoM');
        setTamanhoCamisaPretoM(Number(camisaPretoM) );  
      console.log('Removi ' + camisaPretoM);
    }
  }

  let removerCamisaPretoG = () => {
    if(tamanhoCamisaPretoG < 1) {
      setTamanhoCamisaPretoG(0);
    } 
    else {
        localStorage.setItem('camisaPretoG', tamanhoCamisaPretoG -1);
          let camisaPretoG = localStorage.getItem('camisaPretoG');
        setTamanhoCamisaPretoG(Number(camisaPretoG) );  
      console.log('Removi ' + camisaPretoG);
    }
  }  

  let removerCamisaPretoGg = () => {
    if(tamanhoCamisaPretoGg < 1) {
      setTamanhoCamisaPretoGg(0);
    } 
    else {
          localStorage.setItem('camisaPretoGg', tamanhoCamisaPretoGg -1);
            let camisaPretoGg = localStorage.getItem('camisaPretoGg');
          setTamanhoCamisaPretoGg(Number(camisaPretoGg) );  
       console.log('Removi ' + camisaPretoGg);
    }
  } 
  
  let removerCamisaPretoXg = () => {
    if(tamanhoCamisaPretoXg < 1) {
      setTamanhoCamisaPretoXg(0);
    } 

    else {
          localStorage.setItem('camisaPretoXg', tamanhoCamisaPretoXg -1);
            let camisaPretoXg = localStorage.getItem('camisaPretoXg');
          setTamanhoCamisaPretoXg(Number(camisaPretoXg) );  
        console.log('Removi ' + camisaPretoXg);
    }
  } 

  let removerCamisaPretoXxg = () => {
    if(tamanhoCamisaPretoXxg < 1) {
      setTamanhoCamisaPretoXxg(0);
    } 

    else {
        localStorage.setItem('camisaPretoXxg', tamanhoCamisaPretoXxg -1);
          let camisaPretoXxg = localStorage.getItem('camisaPretoXxg');
         setTamanhoCamisaPretoXxg(Number(camisaPretoXxg) );  
      console.log('Removi ' + camisaPretoXxg);
    }
  }

  let removerCamisaPretoXxgg = (e) => {
    if(tamanhoCamisaPretoXxgg < 1) {
      setTamanhoCamisaPretoXxgg(0);
    } 

    else {
       localStorage.setItem('camisaPretoXxgg', tamanhoCamisaPretoXxgg -1);
          let camisaPretoXxgg = localStorage.getItem('camisaPretoXxgg');
        setTamanhoCamisaPretoXxgg(Number(camisaPretoXxgg) );  
      console.log('Removi ' + camisaPretoXxgg);
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
                  <td className={styles.texto}>Preto</td>
              <td className={styles.texto}>P</td>
            <td>{tamanhoCamisaPretoP < 1 ? 0 : tamanhoCamisaPretoP}</td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>2</th>
                <td className={styles.texto}>Camiseta</td>
                 <td className={styles.texto}>Preto</td>
              <td className={styles.texto}>M</td>
            <td className={styles.texto}>{tamanhoCamisaPretoM < 1 ? 0 : tamanhoCamisaPretoM}</td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>3</th>
                <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Preto</td>
                <td className={styles.texto}>G</td>
              <td >{tamanhoCamisaPretoG < 1 ? 0 : tamanhoCamisaPretoG}</td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>4</th>
                <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Preto</td>
                <td className={styles.texto}>GG</td>
              <td >{tamanhoCamisaPretoGg < 1 ? 0 : tamanhoCamisaPretoGg}</td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>5</th>
                <td className={styles.texto}>Camiseta</td>
                 <td className={styles.texto}>Preto</td>
               <td className={styles.texto}>XG</td>
            <td >{tamanhoCamisaPretoXg < 1 ? 0 : tamanhoCamisaPretoXg}</td>
          </tr>

          <tr>
              <th scope="row" className={styles.texto}>6</th>
                <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Preto</td>
                <td className={styles.texto}>XXG</td>
              <td >{tamanhoCamisaPretoXxg < 1 ? 0 : tamanhoCamisaPretoXxg}</td>
          </tr>

          <tr>
             <th scope="row" className={styles.texto}>6</th>
                <td className={styles.texto}>Camiseta</td>
                  <td className={styles.texto}>Preto</td>
                <td className={styles.texto}>XXGG</td>
              <td >{tamanhoCamisaPretoXxgg < 1 ? 0 : tamanhoCamisaPretoXxgg}</td>
          </tr>
        </tbody>
      </table>

      <br /> <br />

   
      <FaPlusSquare className={styles.botaoP} onClick={adicionarCamisaPretoP} />{" "}
      <FaPlusSquare className={styles.botaoM} onClick={adicionarCamisaPretoM} />{" "}
      <FaPlusSquare className={styles.botaoG} onClick={adicionarcamisaPretoG} />{" "}
      <FaPlusSquare className={styles.botaoGg} onClick={adicionarCamisaPretoGg} /> {" "}
      <FaPlusSquare className={styles.botaoXg} onClick={adicionarCamisaPretoXg} /> {" "}
      <FaPlusSquare className={styles.botaoXxg} onClick={adicionarCamisaPretoXxg} />{" "}
      <FaPlusSquare className={styles.botaoXxxg} onClick={adicionarCamisaPretoXxgg} />{" "}
     

      <IoRemoveCircleSharp className={styles.botaoRemoverP}  onClick={removerCamisaPretoP} />
      <IoRemoveCircleSharp className={styles.botaoRemoverM}  onClick={removerCamisaPretoM} />
      <IoRemoveCircleSharp className={styles.botaoRemoverG}  onClick={removerCamisaPretoG} />
      <IoRemoveCircleSharp className={styles.botaoRemoverGg}  onClick={removerCamisaPretoGg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXg}  onClick={removerCamisaPretoXg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxg}  onClick={removerCamisaPretoXxg} />
      <IoRemoveCircleSharp className={styles.botaoRemoverXxgg}  onClick={removerCamisaPretoXxgg} />
     
    </div>
  )
}

export default Preto