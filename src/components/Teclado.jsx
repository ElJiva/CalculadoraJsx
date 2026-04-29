import { useContext } from "react";
import calculadoraContext from "../CalculadoraContext";

function Teclado() {
    const { presionarTecla } = useContext(calculadoraContext);

    // Lista de teclas para que se muestren
    const teclas = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        'C', '0', '=', '/'
    ];

    const obtenerClaseBoton = (tecla) => {
        if (tecla === 'C') return 'boton boton-clear';
        if (tecla === '=') return 'boton boton-igual';
        if ('+-*/'.includes(tecla)) return 'boton boton-operador';
        return 'boton boton-numero';
    };

    return (
        <div className="teclado">
            {teclas.map(
                tecla => (
                    <button
                        className={obtenerClaseBoton(tecla)}
                        key={tecla}
                        onClick={() => presionarTecla(tecla)}
                    >
                        {tecla}
                    </button>
                )
            )}
        </div>
    );
}

export default Teclado;