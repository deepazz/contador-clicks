import React from 'react'
import '../hojas-de-estilo/Contador.css'

const Contador = ({numDeClicks}) => {

  return (
    <div className='contador'>
        {numDeClicks}
    </div>
    
  )
}

export default Contador