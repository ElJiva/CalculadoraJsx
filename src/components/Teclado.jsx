import { useContext } from "react";
import calculadoraContext from "../CalculadoraContext";


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
  teclado: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    marginTop: '8px',
  },
  boton: {
    width: '64px',
    height: '64px',
    fontSize: '22px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '50%',
    background: '#333',
    color: '#fff',
  },
};
export default Teclado;