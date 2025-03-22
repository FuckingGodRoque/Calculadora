let numeroActual = '';
let numeroAnterior = '';
let operacion = null;

function agregarNumero(numero) {
    numeroActual += numero;
    actualizarPantalla();
}

function establecerOperacion(op) {
    if (numeroActual === '') return;
    if (numeroAnterior !== '') calcular();
    operacion = op;
    numeroAnterior = numeroActual;
    numeroActual = '';
}

function calcular() {
    if (operacion === null || numeroActual === '' || numeroAnterior === '') return;
    const anterior = parseFloat(numeroAnterior);
    const actual = parseFloat(numeroActual);
    let resultado;

    switch (operacion) {
        case '+':
            resultado = anterior + actual;
            break;
        case '-':
            resultado = anterior - actual;
            break;
        case '*':
            resultado = anterior * actual;
            break;
        case '/':
            resultado = actual !== 0 ? anterior / actual : 'Error';
            break;
        default:
            return;
    }

    numeroActual = resultado.toString();
    operacion = null;
    numeroAnterior = '';
    actualizarPantalla();
}

function limpiarPantalla() {
    numeroActual = '';
    numeroAnterior = '';
    operacion = null;
    actualizarPantalla();
}

function actualizarPantalla() {
    document.getElementById('pantalla').value = numeroActual;
}
