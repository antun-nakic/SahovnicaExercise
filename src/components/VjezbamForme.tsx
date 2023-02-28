import { type } from 'os'
import React, {useState} from 'react'

type Props = {
    prezime: string,
    changePrezime: Function
}

type StateForma = {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    confirmPassword?: string
}

const VjezbamForme = ({prezime, changePrezime}: Props) => {
    const [ime,setIme] = useState("");
    const [forma,setForma] = useState<StateForma>({});

    const handleChange = (e: React.SyntheticEvent )=>{
        const elem = e.target as HTMLInputElement;

        setForma((old)=>{
            return {...old, [elem.id]: elem.value}
        });
    }

  return (
    <div>
    <form>
        <label htmlFor="ime">Unesite svoje ime</label>
        <input type="text" id="ime" value={ime} onChange={(e)=>setIme(e.target.value)} />
        <label htmlFor="prezime">Unesite svoje prezime</label>
        <input type="text" id="prezime" value={prezime} onChange={(e)=>changePrezime(e.target.value)} />
    </form>
    <hr/>
    <form>
        <div className="username">
            <label className="form__label" htmlFor="firstName">First Name </label>
            <input className="form__input" onChange={(e)=>handleChange(e)} value={forma.firstName || ""} type="text" id="firstName" placeholder="First Name"/>
        </div>
        <div className="lastname">
            <label className="form__label" htmlFor="lastName">Last Name </label>
            <input  type="text" onChange={(e)=>handleChange(e)} value={forma.lastName || ""} name="" id="lastName"  className="form__input"placeholder="LastName"/>
        </div>
        <div className="email">
            <label className="form__label" htmlFor="email">Email </label>
            <input  type="email" onChange={(e)=>handleChange(e)} value={forma.email || ""} id="email" className="form__input" placeholder="Email"/>
        </div>
        <div className="password">
            <label className="form__label" htmlFor="password">Password </label>
            <input className="form__input" onChange={(e)=>handleChange(e)} value={forma.password || ""} type="password"  id="password" placeholder="Password"/>
        </div>
        <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
            <input className="form__input" onChange={(e)=>handleChange(e)} value={forma.confirmPassword || ""} type="password" id="confirmPassword" placeholder="Confirm Password"/>
        </div>
    </form>
    </div>
  )
}

export default VjezbamForme