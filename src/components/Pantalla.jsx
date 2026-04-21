import { useContext } from "react";
import calculadoraContext from "../src/CalculadoraContext";


function Pantalla(){
    const {valorPantalla} = useContext(calculadoraContext)
  return(
    <>
      <div style={styles.pantalla}>{valorPantalla}</div>
    </>
  )
};

const styles = {
    pantalla:{
        border: '1px solid gray',
        padding: '20px',
        textAlign: 'right',
        fontSize: '2rem',
    }
  };
export default Pantalla;