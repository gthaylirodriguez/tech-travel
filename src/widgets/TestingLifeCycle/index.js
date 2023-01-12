import { useEffect, useState } from "react";
const TestingLifeCycle = () => {
    const [counter, setCounter] = useState(null);


    useEffect(()=>{
        setCounter(0);

        setInterval(()=>{
            console.log ("Hello", counter);
            //c = c +1;
            setCounter(1)//c
        },1000);

        return() =>{
            alert("Goodbye");
        }
    }, []);

    useEffect(()=>{ 
        console.log("Counter Update");
    }, [counter]);
}