//Tipos de Função

const sum = (x:number, y:number): number => {
    return x + y;
    }

//Função com tipo de retorno especificado
function somar(a: number, b: number): number {
    return a + b;
}
//Função que não retorna nada (void)
function log(mensagem: string): void {
    console.log(mensagem);
  }