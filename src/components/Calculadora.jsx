import { useState, useEffect, useRef, useReducer } from 'react';
import Pantalla from './Pantalla';
import Teclado from './Teclado';
import calculadoraContext from '../CalculadoraContext';
import {estadoInicial, calculadoraReducer} from "../calculadoraReducer"



const Calculadora = () => {
  //Estados
  const [estado, despachador] = useReducer(estadoInicial, calculadoraReducer)
  const [valorPantalla, setValorPantalla] = useState(
    localStorage.getItem('ultimoValorPantalla') || '0'
  );
  //const [valorPrevio, setValorPrevio] = useState(0);
  //const valorPrevio = useRef(0);
  //const [operador, setOperador] = useState(null);
  //const operador = useRef(null);
  //const [esperandoOperando, setEsperandoOperando] = useState(false);
  //const esperandoOperando = useRef(false);
  const pantallaRef = useRef(null);


  //Efectos
  useEffect(() => {
    document.title = `Calculadora: ${estado.valorPantalla}`;
  });
  useEffect(() => {
    localStorage.setItem('ultimoValorPantalla', estado.valorPantalla);
  }, [estado.valorPantalla]);

 
  //Logica
  const presionarTecla = (tecla) => {
    if (/[0-9.]/.test(tecla)) {
      pantallaRef.current.blur()
      despachador({tipo: 'PRESIONAR_NUMERO', numero: tecla})
    
    }

    // Operadores
    if (['+', '-', '*', '/'].includes(tecla)) {
      pantallaRef.current.blur()
      valorPrevio.current = valorPantalla;
      operador.current = tecla;
      esperandoOperando.current = true;
      return;
    }

    // Resultado
    if (tecla === '=') {
      if (operador) {
        pantallaRef.current.blur()
        const resultado = eval(`${valorPrevio.current} ${operador.current} ${valorPantalla}`);
        setValorPantalla(String(parseInt(resultado)));
        operador.current = null;
        esperandoOperando.current = false;
        pantallaRef.current.focus ()
      }
      return;
    }
    //Borrar
    if (tecla === 'C') {
      pantallaRef.current.blur()
      setValorPantalla('0');
      operador.current = null;
      esperandoOperando.current = false;
      return;
    }
  };


  return (
    <calculadoraContext.Provider value = {{presionarTecla, valorPantalla, pantallaRef}}>
    <div style={styles.calculadora}>
      <Pantalla/>
      <Teclado/>
    </div>
    </calculadoraContext.Provider>

  );
};

const styles = {
  calculadora: {
    background: '#000',
    borderRadius: '44px',
    padding: '28px 20px 20px',
    width: '320px',
    margin: '50px auto',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default Calculadora;
