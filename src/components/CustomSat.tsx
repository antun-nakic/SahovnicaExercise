import React from 'react'

type Props = {
    customSat: number,
    handleClick: Function
}

const CustomSat = ({customSat,handleClick}: Props) => {
  return (
    <div>
        <h1>CustomSat {customSat}</h1>
        <button onClick={handleClick.bind(this, 8)}>Resetiraj sat na 8</button>
        <button onClick={handleClick.bind(this, 30)}>Resetiraj sat na 30</button>
    </div>
  )
}

export default CustomSat