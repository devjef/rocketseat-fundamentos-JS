'use strict'

const celsiusScale = {
    C: 36,
};

const fahrenheitScale = {
    F: 125.60
};

const convertScale = (thermoScales) => {

    let scale;

    for (let key in thermoScales) {
        key === 'C' ?
            scale = `Celsius to Fahrenheit: C: ${thermoScales[key]} / F: ${thermoScales[key] * 9 / 5 + 32}` :
            scale = `Fahrenheit to Celsius: F: ${thermoScales[key]} / C: ${(thermoScales[key] - 32) * 5 / 9}`;
    };

    return scale;
};

console.log(convertScale(celsiusScale));
console.log(convertScale(fahrenheitScale));