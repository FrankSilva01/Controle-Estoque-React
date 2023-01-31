import React, {useState} from 'react'

function TamanhoSelect() {

const [selects, setSelects] = useState("");

  return (
    <div>
        <label>Filtrar por tamanho</label> {' '}
      <select value={selects} onChange={(e) => setSelects(e.target.value)}>
        <option>
          P
        </option>
        <option>
          M
        </option>
        <option>
          G
        </option>
        <option>
          GG
        </option>
        <option>
          XG
        </option>
        <option>
          XXG
        </option>
        <option>
          XXGG
        </option>


      </select>
 <div>{selects === "P" ? '' : null }</div>

      <div>{selects === "M" ? '' : null}</div>

      <div>{selects === "G" ? '' : null}</div>

      <div>{selects === "GG" ? '' : null}</div>

      <div>{selects === "XG" ? '' : null}</div>

      <div>{selects === "XXG" ? '' : null}</div>

      <div>{selects === "XXGG" ? '' : null}</div>

    </div>
  )
}

export default TamanhoSelect