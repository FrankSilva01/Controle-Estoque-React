import React from 'react'

import TamanhoSelect from './TamanhoSelect'


function CorCalcaSelect() {

  return (
    <div>
         <label>Cor</label>
        <select id="cor" aria-label="Default select example">
          <option value="Azul">Azul</option>
        </select>
    
        <TamanhoSelect />
       
      <br /><br />
     

    </div>
  )
}

export default CorCalcaSelect