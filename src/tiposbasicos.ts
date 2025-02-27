//Tipos Básicos

//string → Cadeia de caracteres
const firstName: string = 'Felipe';
//boolean → Valores verdadeiro ou falso
const isValid: boolean = true;
//number → Números inteiros e decimais
let idade: number = 25;
//bigint → Números grandes (acima do Number.MAX_SAFE_INTEGER)
//let grande: bigint = 90071992547401n;
//symbol → Identificadores únicos
let id: symbol = Symbol("id");

// Tipos Especiais

//null → Representa a ausência de valor
let vazio: null = null;
//undefined → Variável sem valor definido
let indefinido: undefined = undefined;
//any → Pode receber qualquer tipo de valor (não recomendado)
let qualquer: any = 10;
qualquer = "Texto";
//unknown → Tipo desconhecido, mais seguro que any
let desconhecido: unknown;
desconhecido = "Teste";
desconhecido = 42;

//Tipos Estruturais

//object → Representa qualquer objeto não primitivo
let pessoa: object = { nome: "Maria", idade: 30 };
//Array (Array<T> ou T[]) → Lista de valores do mesmo tipo
let numeros: number[] = [1, 2, 3];
let nomes: Array<string> = ["Ana", "Carlos"];
//Tupla ([T1, T2, ...]) → Array com tipos fixos em cada posição
let tupla: [string, number] = ["João", 25];
//Lista de Tupla
const person:[number,string][] = [[1,"Felipe"],[2,"Maria"],[3,"João"]];


//Intersections
const productId: string | number = "9001";


//Enum
enum Cores {
    Vermelho,
    Verde,
    Azul
  }
  let cor: Cores = Cores.Verde;
  console.log(cor); // 1

  //Type Assertions
    let texto: unknown = "Teste";
    //let tamanho = texto as string;
    let tamanho = <string>texto;