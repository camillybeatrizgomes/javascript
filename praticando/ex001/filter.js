// Aprendendo a Filtrar Dados
const listaNotas = [7.5, 2.5, 7, 4, 3, 5, 7, 2, 8, 2.6, 4, 5.5];

const listaNotasCompletas = [
    { nota1: 8, nota2: 7 },
    { nota1: 4, nota2: 8 },
    { nota1: 5, nota2: 4 },
    { nota1: 7, nota2: 6 },
    { nota1: 9, nota2: 9.5 },
    { nota1: 10, nota2: 0 }
];

const mediasAlunosAprovados = listaNotasCompletas.filter(
    (notasAlunos) => (notasAlunos.nota1 + notasAlunos.nota2) / 2 >= 6
);

// const notasAprovadas = listaNotas.filter((nota) => nota >= 6);

console.log(listaNotasCompletas);
console.log(mediasAlunosAprovados);