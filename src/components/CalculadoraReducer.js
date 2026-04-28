const estaodInicial = {
    valorPantalla: '0',
    valorPrevio: 0,
    operador: null,
    esperandoOperando: false

}

function calculadoraReducer(estado, accion) {
    switch (accion.tipo) {
        case 'PRESIONAR_NUMERP': {
            if (estaodInicial.esperandoOperando) {
                //setValorPantalla(tecla);
                //esperandoOperando.current = false;
                return{
                    ...estado,
                    valorPantalla: accion.numero,
                    esperandoOperando: false
                }
            } else {
                setValorPantalla(valorPantalla === '0' ? tecla : valorPantalla + tecla);
            }
            return;

        }
        case 'PRESIONAR_OPERADOR': {

        }
        case 'CALCULAR_RESULTADO': {

        }
        case 'LIMPIAR': {

        }
    }
}

export { estaodInicial, calculadoraReducer }