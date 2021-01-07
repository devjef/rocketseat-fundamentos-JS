const rangeDeNotas = [
    {
        idRange: 0,
        de: 10,
        ate: 20,
        valor: 'A'
    },
    {
        idRange: 2,
        de: 21,
        ate: 30,
        valor: 'B'
    },
    {
        idRange: 2,
        de: 31,
        ate: 40,
        valor: 'C'
    }
];

const notaAluno = 25;
let notaFinal;

for (let i = 0; i < rangeDeNotas.length; i++) {

    const rangeNota = rangeDeNotas[i];

    if (notaAluno >= rangeNota.de && notaAluno <= rangeNota.ate) {

        notaFinal = rangeNota.valor;
        break;
    }
    
    console.log(rangeNota);
}

notaFinal = notaFinal ? notaFinal : 'Nota inválida';

console.log(notaFinal);