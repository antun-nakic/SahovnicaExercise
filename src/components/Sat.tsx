import React, {useState,useEffect} from 'react'


const Sat = () => {
    const [sat,setSat] = useState(new Date().getSeconds())

    /*
    useEffect(()=>{
        let mojInterval = setInterval(()=>{
            console.log("kucam")
            setSat((staro)=> staro + 1)
        },1000)

        return ()=>{
            clearInterval(mojInterval);
        }
    })
    */

    useEffect(()=>{
        console.log("Postavljen interval")

        let mojInterval = setInterval(()=>{
            setSat((staro)=> staro + 1)
        },1000);

        return ()=>{
            console.log("Umirem");
            clearInterval(mojInterval);
        }
    },[])

  return (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {sat}.</h2>
    </div>
  )
}

export default Sat

/*
    1. montiranje
    2. pokrece se use effect
    3. postavlja se prvi interval na 1 sekundu
    4. kad taj prvi interval prvi put otkuca mijenja se stanje
    5. ponovno iscrtavanje
    6. useEffect
*/

/*
    1. montiranje
    2. pokrece se use effect
    3. ceka 1 sekundu
    4. mjenja stanje
    5. ponovno iscrtavanje
    6. pokrece se use efect
    7. mijenja stanje
    8. ponovno iscrtavanje
*/