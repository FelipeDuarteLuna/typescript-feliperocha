"use strict";
//Tipos Básicos
//string → Cadeia de caracteres
const firstName = 'Felipe';
//boolean → Valores verdadeiro ou falso
const isValid = true;
//number → Números inteiros e decimais
let idade = 25;
//bigint → Números grandes (acima do Number.MAX_SAFE_INTEGER)
//let grande: bigint = 90071992547401n;
//symbol → Identificadores únicos
let id = Symbol("id");
// Tipos Especiais
//null → Representa a ausência de valor
let vazio = null;
//undefined → Variável sem valor definido
let indefinido = undefined;
//any → Pode receber qualquer tipo de valor (não recomendado)
let qualquer = 10;
qualquer = "Texto";
//unknown → Tipo desconhecido, mais seguro que any
let desconhecido;
desconhecido = "Teste";
desconhecido = 42;
//Tipos Estruturais
//object → Representa qualquer objeto não primitivo
let pessoa = { nome: "Maria", idade: 30 };
//Array (Array<T> ou T[]) → Lista de valores do mesmo tipo
let numeros = [1, 2, 3];
let nomes = ["Ana", "Carlos"];
//Tupla ([T1, T2, ...]) → Array com tipos fixos em cada posição
let tupla = ["João", 25];
//Lista de Tupla
const person = [[1, "Felipe"], [2, "Maria"], [3, "João"]];
//Intersections
const productId = "9001";
//Enum
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Verde"] = 1] = "Verde";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
let cor = Cores.Verde;
console.log(cor); // 1
//Type Assertions
let texto = "Teste";
//let tamanho = texto as string;
let tamanho = texto;
