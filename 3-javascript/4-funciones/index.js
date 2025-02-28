function checkNumber(number) {
    if (number % 2 === 0) {
        return 'Número par';
    } else {
        return 'Número impar';
    }
};


const comprueba = (numero) => {
    if (numero % 2 == 0) {
        console.log('Número par');
    } else {
        console.log('Número impar');
    }
};

let value = comprueba(28);
console.log('value', value)