import { useContext, useState } from "react";
import calculadoraContext from "../CalculadoraContext";

function Pantalla() {
    const { valorPantalla, pantallaRef } = useContext(calculadoraContext);
    const [enfocado, setEnfocado] = useState(false);

    return (
        <div className="pantalla-wrapper">
            <input
                className={`pantalla-input${enfocado ? ' pantalla-enfocada' : ''}`}
                ref={pantallaRef}
                onFocus={() => setEnfocado(true)}
                onBlur={() => setEnfocado(false)}
                readOnly
                value={valorPantalla}
            />
        </div>
    );
}

export default Pantalla;