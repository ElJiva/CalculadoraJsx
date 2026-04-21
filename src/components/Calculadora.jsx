import { useState, useEffect, useRef } from 'react';
import Pantalla from './Pantalla';
import Teclado from './Teclado';
import calculadoraContext from '../CalculadoraContext';



const Calculadora = () => {
  //Estados
  const [valorPantalla, setValorPantalla] = useState(
    localStorage.getItem('ultimoValorPantalla') || '0'
  );
  //const [valorPrevio, setValorPrevio] = useState(0);
  const valorPrevio = useRef(0);
  //const [operador, setOperador] = useState(null);
  const operador = useRef(null);
  //const [esperandoOperando, setEsperandoOperando] = useState(false);
  const esperandoOperando = useRef(false);


  //Efectos
  useEffect(() => {
    document.title = `Calculadora: ${valorPantalla}`;
  });
  useEffect(() => {
    localStorage.setItem('ultimoValorPantalla', valorPantalla);
  }, [valorPantalla]);

 
  //Logica
  const presionarTecla = (tecla) => {
    if (/[0-9.]/.test(tecla)) {
      if (esperandoOperando.current) {
        setValorPantalla(tecla);
        esperandoOperando.current = false;
      } else {
        setValorPantalla(valorPantalla === '0' ? tecla : valorPantalla + tecla);
      }
      return;
    }

    // Operadores
    if (['+', '-', '*', '/'].includes(tecla)) {
      valorPrevio.current = valorPantalla;
      operador.current = tecla;
      esperandoOperando.current = true;
      return;
    }

    // Resultado
    if (tecla === '=') {
      if (operador) {
        const resultado = eval(`${valorPrevio.current} ${operador.current} ${valorPantalla}`);
        setValorPantalla(String(parseInt(resultado)));
        operador.current = null;
        esperandoOperando.current = true;
      }
      return;
    }
    //Borrar
    if (tecla === 'C') {
      setValorPantalla('0');
      operador.current = null;
      esperandoOperando.current = false;
      return;
    }
  };


  return (
    <calculadoraContext.Provider value = {{presionarTecla, valorPantalla}}>
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
