import React, {useState, useRef} from 'react'

type Props = {
    prezime: string,
    changePrezime: Function
}

type StateForma = {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    confirmPassword?: string,
    pravila: boolean
}

const VjezbamForme = ({prezime, changePrezime}: Props) => {
    const [ime,setIme] = useState("");
    const [forma,setForma] = useState<StateForma>({pravila: false});
    const mojaReferenca1 = useRef<HTMLInputElement>(null);
    const mojaReferenca2 = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.SyntheticEvent )=>{
        const elem = e.target as HTMLInputElement;

        const value = (elem.type === "checkbox") ? elem.checked : elem.value;

        setForma((old)=>{
            return {...old, [elem.id]: value}
        });
    }

    const handleSubmit = () => {
        if(mojaReferenca1.current?.value?.length  && mojaReferenca1.current?.value?.length < 20)
        {
            return 1;
        }
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
        <label>
          Upoznat sam sa pravilima:
          <input
            name="pravila"
            type="checkbox"
            id="pravila"
            checked={forma.pravila}
            onChange={(e)=>handleChange(e)} />
        </label>
    </form>
    <form onSubmit={(e)=>handleSubmit()}>
        unesi ime: <input type="text" name="mojeIme" ref={mojaReferenca1} ></input>
        unesi prezime: <input type="text" name="mojePrezime" ref={mojaReferenca2}></input>
        <input type="submit"></input>
    </form>
    </div>
  )
}

export default VjezbamForme