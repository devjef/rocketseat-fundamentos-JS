'use strict'

let notas = {
    A: (score) => score >=90 ? true : false,
    B: (score) => score >=80 && score <= 89 ? true : false,
    C: (score) => score >=70 && score <= 79 ? true : false,
    D: (score) => score >=60 && score <= 69 ? true : false,
    F: (score) => score < 60 ? true : false
};

let notaAluno = 80;

const validaNota = (notas, notaAluno) => {

    let notaFinal;
    for(let nota in notas) {
        notas[nota](notaAluno) ? notaFinal = nota : notaFinal;
    }; 
    return notaFinal;
};

console.log(validaNota(notas, notaAluno));