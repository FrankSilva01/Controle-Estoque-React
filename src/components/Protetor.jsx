import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { BsEarbuds, BsSearch } from 'react-icons/bs'
import { FaPlusSquare } from 'react-icons/fa'
import {RxReset} from 'react-icons/rx'
import {IoRemoveCircleSharp} from 'react-icons/io5'

import styles from '../components/styles/Protetor.module.css'

function Protetor() {

  let [estoqueProtetores, setEstoqueProtetores] = useState(localStorage.getItem('protetores'))
  
  let handleAdicionarProtetor = (e) => {
    localStorage.setItem('protetores', Number (estoqueProtetores) +1);
    let protetores = localStorage.getItem('protetores');
    setEstoqueProtetores(Number(protetores));
    console.log('Adicionei ' + protetores);
  }

  let handleRemoverProtetor = (e) => {
    if(estoqueProtetores < 1) {
      setEstoqueProtetores(0);
    } else {
      localStorage.setItem('protetores', estoqueProtetores -1);
      let protetores = localStorage.getItem('protetores');
      setEstoqueProtetores(Number(protetores) );  
      console.log('Removi ' + protetores);
      
    }
}

  let zerarEstoque = (e) => {
    localStorage.setItem('protetores',  estoqueProtetores = 0);  
    setEstoqueProtetores(estoqueProtetores)
    console.log( 'Zerei estoque '+ estoqueProtetores);
  }

  let valorDigitado = (e) => {
    setEstoqueProtetores(Number(e.target.value)  + Number(estoqueProtetores) )
  }

  return (
    
    <div>
      <h1> Controle de Estoque</h1>
    <br />
      <NavLink className={styles.navLink} to="/">Inicio</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Camisetas">Camisetas</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Calcas">Calças</NavLink> {' '}
      <NavLink className={styles.navLink} to="/Protetor">Protetores</NavLink> {' '}
 
    <br />

 
        <h2><BsEarbuds /> {' '}  Protetor Auricular</h2>
  

          <table  className={styles.tabela}>
            <thead >
              <tr >
                <th scope="col" >ID</th>
                <th scope="col" >Tipo</th>
                <th scope="col" >Quantidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" >1</th>
                <td className={styles.texto}>Protetor Auricular</td>
                <td > {estoqueProtetores}</td>
              </tr>

            </tbody>
          </table>      
          
          <br />
          <br />

          <FaPlusSquare className= {styles.botaoAdicionar}  onClick={handleAdicionarProtetor} /> 
          <label htmlFor="botaoAdicionar" onClick={handleAdicionarProtetor} className={styles.pointer}>Adicionar</label>  {' '}{' '}
         
          <IoRemoveCircleSharp className={styles.botaoRemover}  onClick={handleRemoverProtetor} />
          <label htmlFor="botaoRemover" onClick={handleRemoverProtetor} className={styles.pointer}>Retirar</label> {' '} {' '} 
         
          <RxReset  className={styles.botaoZerarEstoque} onClick={zerarEstoque} />
          <label htmlFor="botaoRemover" onClick={zerarEstoque} className={styles.pointer}>Zerar Estoque </label> {' '} {' '}
         
          <BsSearch className={styles.botaoConsultarEstoque} /> 
         <label htmlFor="ConsultarEstoque"className={styles.pointer}> Consultar Estoque</label>
         
          <br />
          <br />
         
          <div type="text" > Digite a quantidade
            <input type="text" onChange={valorDigitado} placeholder="Digite a quantia" />
          </div> 
            <br /> <br />
          <label > Total: {estoqueProtetores < 1 ? 'Estoque Zerado' : estoqueProtetores} </label>
    </div>
  )
}

export default Protetor