const lista: number[] = [1, 49, 39, 23, 53, 53, 34, 39, 80, 152, 323];
const answerA: number = lista.length;
const answerB: number = lista.reduce((a, b) => a + b, 0);
const answerC: number[] = lista.filter(item => item > 65);
const answerD: number[] = lista.filter(item => item != 53 && item != 80);
const answerE: number | undefined = lista.find(item => item == 152);
const answerF: number[] = lista.filter(item => item % 2 == 0);

lista.push(12);
const answerG: number[] = [...lista];

lista.unshift(25);
const answerH: number[] = [...lista];

lista.splice(lista.length - 1, 1);
const answerI: number[] = [...lista];

lista.splice(0, 1);
const answerJ: number[] = [...lista];

const answersList = {
    answerA,
    answerB,
    answerC,
    answerD,
    answerE,
    answerF,
    answerG,
    answerH,
    answerI,
    answerJ
};

export default answersList;