import React, { useEffect, useState } from 'react'

const ComponentUseEffect = () => {
  const [state,setState] = useState(false);
  useEffect(()=>{
    console.log("Cambio a ",state)
  },[state])
  return (
    <div>
      <p>*Cada vez que cambia se muestra un console log</p>
      {/* mostrar parrafo con el estado */}
      <p>Estado: {state ? "Verdadero" : "Falso"}</p>
      <button onClick={()=>{
        setState(!state)
      }}>
        cambiar estado
      </button>
    </div>
  )
}

export default ComponentUseEffect