import React, {useState} from 'react'

import Polje from './Polje'
import './Sahovnica.css';

type Props = {}

const Sahovnica = (props: Props) => {
    const [polja, setPolja] = useState([true,false,false,true,true,false,false,true,false])

    const promijeniJednoPolje = (indexPolja: number) => {
        setPolja((trenutnoStanje)=>{
            let novoStanje = trenutnoStanje.map((clan)=>clan);
            novoStanje[indexPolja]=!novoStanje[indexPolja];
            return novoStanje;
        })
    }

    return (
    <div className="sahovnica">
        {polja.map(
            (polje, index)=>{
                return <Polje key={index} boja={polje} modificirajStanje={()=>promijeniJednoPolje(index)}/>
            }
            )
        }
    </div>
  )
}

export default Sahovnica