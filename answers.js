"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lista = [1, 49, 39, 23, 53, 53, 34, 39, 80, 152, 323];
const answerA = lista.length;
const answerB = lista.reduce((a, b) => a + b, 0);
const answerC = lista.filter(item => item > 65);
const answerD = lista.filter(item => item != 53 && item != 80);
const answerE = lista.find(item => item == 152);
const answerF = lista.filter(item => item % 2 == 0);
lista.push(12);
const answerG = [...lista];
lista.unshift(25);
const answerH = [...lista];
lista.splice(lista.length - 1, 1);
const answerI = [...lista];
lista.splice(0, 1);
const answerJ = [...lista];
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
exports.default = answersList;
