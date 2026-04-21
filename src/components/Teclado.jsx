import { useContext } from "react";
import calculadoraContext from "../src/CalculadoraContext";


function Teclado (){
  
      //Teclas
  const teclas = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+',
  ];
  
  const {presionarTecla} = useContext(calculadoraContext)

  return (
    <>
    {/* Teclado */}
      <div style={styles.teclado}>
        {teclas.map((tecla) => (
          <button
            key={tecla}
            style={styles.boton}
            onClick={() => presionarTecla(tecla)}
          >
            {tecla}
          </button>
        ))}
      </div>
    </>
  );


}

const styles = {
    boton:{
        padding: '15px',
        fontSize: '1.5rem',
        cursor: 'pointer',

    },
    teclado:{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '10px',
    },


}

export default Teclado;