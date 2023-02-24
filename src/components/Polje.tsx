import React from 'react'

import './Polje.css'

type Props = {boja: boolean, modificirajStanje: Function}

const Polje = ({boja,modificirajStanje }: Props) => {
  return (
    <div onClick={()=>modificirajStanje()} className={boja? 'crveno':'bijelo'}>Polje</div>
  )
}

export default Polje