const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

module.exports = { sum };

//-- programa cambio  monedas --//

const fromEuroToDollar = function (valueInEuro) {
    let valueInDollar = 1.07 * valueInEuro;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = 146.26 * valueInDollar;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen / 195.625;
    return valueInPound;
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
