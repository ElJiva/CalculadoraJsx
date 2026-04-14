import { useState, useEffect } from 'react';
import Pantalla from './Pantalla';
import Teclado from './Teclado';


const Calculadora = () => {
  //Estados
  const [valorPantalla, setValorPantalla] = useState(
    localStorage.getItem('ultimoValorPantalla') || '0'
  );
  const [valorPrevio, setValorPrevio] = useState(0);
  const [operador, setOperador] = useState(null);
  const [esperandoOperando, setEsperandoOperando] = useState(false);

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
      if (esperandoOperando) {
        setValorPantalla(tecla);
        setEsperandoOperando(false);
      } else {
        setValorPantalla(valorPantalla === '0' ? tecla : valorPantalla + tecla);
      }
      return;
    }

    // Operadores
    if (['+', '-', '*', '/'].includes(tecla)) {
      setValorPrevio(parseFloat(valorPantalla));
      setOperador(tecla);
      setEsperandoOperando(true);
      return;
    }

    // Resultado
    if (tecla === '=') {
      if (operador) {
        const resultado = eval(`${valorPrevio} ${operador} ${valorPantalla}`);
        setValorPantalla(String(parseInt(resultado)));
        setOperador(null);
        setEsperandoOperando(false);
      }
      return;
    }
    //Borrar
    if (tecla === 'C') {
      setValorPantalla('0');
      setValorPrevio(0);
      setOperador(null);
      setEsperandoOperando(false);
    }
  };


  return (
    <>
      <Pantalla valorPantalla={valorPantalla} />
      <Teclado presionarTecla={presionarTecla} />
    </>

  );
};

export default Calculadora;
