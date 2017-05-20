const PI = 3.1416;

let sumar = (x1, x2) => x1 + x2;

let restar = (x1, x2) => x1 - x2;

let multiplicar = (x1, x2) => x1 * x2;

let dividir = (x1, x2) => {
  if (x2 === 0) {
    mostrarErrorDivision();
  } else {
    return x1 / x2;
  }
};

let mostrarErrorDivision = () => {
  console.log('No se puede dividir por Cero');
}

exports.sumar = sumar;
exports.restar = restar;
exports.multiplicar= multiplicar;
exports.dividir = dividir;
exports.PI = PI;
