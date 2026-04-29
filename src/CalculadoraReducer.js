const estadoInicial = {
    valorPantalla: '0',
    valorPrevio: '0',
    operador: null,
    esperandoOperando: false
};

function calculadoraReducer(estado, accion) {
    switch (accion.tipo) {
        case 'PRESIONAR_NUMERO': {
            if (estado.esperandoOperando) {
                return {
                    ...estado,
                    valorPantalla: accion.numero,
                    esperandoOperando: false,
                };
            } else {
                return {
                    ...estado,
                    valorPantalla: estado.valorPantalla === '0' ? accion.numero : estado.valorPantalla + accion.numero
                };
            }
        }
        case 'PRESIONAR_OPERADOR': {
            return {
                ...estado,
                valorPrevio: estado.valorPantalla,
                operador: accion.operador,
                esperandoOperando: true
            };
        }
        case 'CALCULAR_RESULTADO': {
            if (!estado.operador || estado.esperandoOperando) {
                return estado;
            }
            const nuevoValor = eval(`${estado.valorPrevio} ${estado.operador} ${estado.valorPantalla}`);
            return {
                ...estado,
                valorPantalla: String(Number.parseInt(nuevoValor)),
                operador: null,
                esperandoOperando: false
            };
        }
        case 'LIMPIAR': {
            console.log('Limpiando calculadora, estado actual:', estado);
            return { ...estadoInicial };
        }
        default: {
            return estado;
        }
    }
}

export { estadoInicial, calculadoraReducer };
