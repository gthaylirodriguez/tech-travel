import React, {useEffect, useState} from "react";
const CounterFunction = () =>{
    const [count, setCount] = useState(5);
    const [nombre, setNombre] = useState("Thay");
    const sumOne = () =>{
        setCount(count +1)
    }

    useEffect(()=>{
        const newNombre = `${nombre} + ${count}`;
        setNombre(newNombre);

        return()=>{
            console.log("Terminé")
        }
    }, [count]);


    return (
        <div>
            <h1>{nombre}</h1>
            <p>{count}</p>
            <button onClick={()=>sumOne()}>
                Sumar 1
            </button>
        </div>

    )
};

export default CounterFunction;