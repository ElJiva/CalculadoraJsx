import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import Pantalla from './Pantalla';
import Teclado from './Teclado';
import calculadoraContext from '../CalculadoraContext';
import { estadoInicial, calculadoraReducer } from '../CalculadoraReducer';

function Calculadora() {
    const [estado, despachador] = useReducer(calculadoraReducer, estadoInicial, (inicial) => {
        const guardado = localStorage.getItem('ultimoValorPantalla');
        return guardado ? { ...inicial, valorPantalla: guardado } : inicial;
    });

    const pantallaRef = useRef(null);

    useEffect(() => {
        document.title = `Calculadora - ${estado.valorPantalla}`;
    });

    useEffect(() => {
        localStorage.setItem('ultimoValorPantalla', estado.valorPantalla);
    }, [estado.valorPantalla]);

    const presionarTecla = (tecla) => {
        pantallaRef.current?.blur();
        if ('0123456789'.includes(tecla)) {
            despachador({ tipo: 'PRESIONAR_NUMERO', numero: tecla });
        } else if ('+-*/'.includes(tecla)) {
            despachador({ tipo: 'PRESIONAR_OPERADOR', operador: tecla });
        } else if (tecla === '=') {
            despachador({ tipo: 'CALCULAR_RESULTADO' });
            pantallaRef.current?.focus();
        } else if (tecla === 'C') {
            despachador({ tipo: 'LIMPIAR' });
        }
    };

    return (
        <calculadoraContext.Provider value={{ valorPantalla: estado.valorPantalla, presionarTecla, pantallaRef }}>
            <div className="calculadora">
                <Pantalla />
                <Teclado />
            </div>
        </calculadoraContext.Provider>
    );
}

export default Calculadora;
