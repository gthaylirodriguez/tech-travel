//import { Timer } from "./components";
import { CounterFunction} from "./components";
/*import { ListOption } from "./components";
import { useState } from "react";
import ListOption from "./components/ListOptions";
//import TestingLifeCycle from './widgets/TestingLifeCycle';
function App() {
const [mounted, setMounted]= useState(tra)
  return (
    <div className="App">
 |      <h1>Hola Mundo Thay!</h1>
      {(mounted)&& <TestingLifeCycle/>}
      <div>
        <button onClick={()=> setMounted (false)}
      </div>
    </div>
     
  );
}

export default App;*/
/*
import React from 'react';

const NuevoApp = React.createElement('p', null, "Hola Mundo 2");

export default NuevoApp;


const customStyle = (backColor = '#9090ff')=> ( {
  backgroundColor: backColor,
  margin: '20px 30px',
  color: '#ffffff'
})*/
/*
const List = () => {
  return (
    <ul>
    <ListOption  tiempo= "frío">Lunes</ListOption>
    <ListOption>Martes</ListOption>
    <ListOption>Miércoles</ListOption>
    <ListOption>Jueves</ListOption>
    <ListOption>Viernes</ListOption>
  </ul>
  )
};*/
/*
const ErrorMessage = () => {
  return (
    <p> No hay lista</p>
  )
};
*/
/*
function App(){
  const isList = true;
  if(isList === false){
    return <ErrorMessage/>
  }
const days =[
  {id: 1, nombre: "Lunes"}, 
  {id: 2, nombre: "Martes"}, 
  {id: 3, nombre: "Miércoles"}, 
  {id: 4, nombre: "Jueves"}, 
  {id: 5, nombre: "Viernes"}];
  return (
    <ul>
      {days.map(day=>
        <ListOption key= {days.id}>{day.nombre}</ListOption>
      )}
    </ul>

    <ul>
      <ListOption  tiempo= "frío">Lunes</ListOption>
      <ListOption>Martes</ListOption>
      <ListOption>Miércoles</ListOption>
      <ListOption>Jueves</ListOption>
      <ListOption>Viernes</ListOption>
    </ul>
  );
}*/
/*
function App (){
  return(
    <Timer/>
  );
}*/

function App(){
  return (
  <CounterFunction/>
  );
}

export default App;