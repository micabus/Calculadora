import './App.css';
import logo from './Imagenes/logoblanco.png'; 
import Boton from './Componentes/Boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/BotonClear';
import { useState } from 'react'; 
import {evaluate} from 'mathjs'; 

function App() {

  const [input, setIput] = useState('');
  
  
  const agregarInput = valor => {
      setIput(input + valor);
  }; 

  const calcularResultado = () => {
    if (input) {
    setIput(evaluate(input))
    } else {
     alert("Por favor ingrese valores para realizar calculos") 
    }
  }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={logo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
         <Boton manejarClic={agregarInput}>1</Boton>
         <Boton manejarClic={agregarInput}>2</Boton>
         <Boton manejarClic={agregarInput}>3</Boton>
         <Boton manejarClic={agregarInput}>+</Boton>
        </div> 
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setIput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
