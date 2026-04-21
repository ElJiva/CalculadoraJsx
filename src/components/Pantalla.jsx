import { useContext } from "react";
import calculadoraContext from "../CalculadoraContext";


function Pantalla(){
    const {valorPantalla} = useContext(calculadoraContext)
  return(
    <>
      <div style={styles.pantalla}>{valorPantalla}</div>
    </>
  )
};

const styles = {
  pantalla: {
    textAlign: 'right',
    color: '#fff',
    fontSize: '72px',
    fontWeight: '200',
    padding: '0 8px 16px',
    lineHeight: 1,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
};
export default Pantalla;