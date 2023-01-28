import React, {useState} from "react";

const FormControlado = () =>{
    const [value, setValue] = useState("");

    const onChange = (event)=>{
        setValue(event.currentTarget.value);
    }

    const enviarInformacion = (event) =>{
        event.preventDefault();
        console.log(value);
    }

    return(
        <form onSubmit={enviarInformacion}>
            <h1>Mi input</h1>
            <input value={value} onChange={onChange}/>
            <button type ="submit" >Continuar</button>
        </form>
    )
}

export default FormControlado;