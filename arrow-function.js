// terceira forma de criar função  - arrow functions - usa => "flecha" na sintaxe  - Ela sempre vem com uma const e o nome da nossa variável

//antes criávamos função abaixo .
/*function apresentar(nome) {
    return `meu nome é ${nome}`
} */

// Arrow function com 1 linha de instrução não precisa de parênteses para fechar parâmentros e nem parêntese para fechar o bloco de códigos que a função tem que fazer

/*const apresentarArrow = nome =>  `meu nome é ${nome}`  //não tem parênteses e nem chaves quando instruir uma só linha, não precisa de return e não pode ser nomeada, mas se tiver mais de 1 linha vai ter parâmetros e return
const soma = (num1, num2) => num1 + num2;  //aqui tem 2 parâmetyros, então precisa dos parêntes, mas não precisa de return porque está passando a instrução de 1 linha */


//Arrow function com + de 1 linha de instrução vai precisar usar chaves e return

/*const somaNumeroPequenos = (num1, num2) => {   // cria uma const, passa os parâmetros, passa uma setinha e abre chaves  e  //passar uma condição "if" abaixo com return

if (num1 > 10 || num2 > 10) {    
    return "somente números de 1 a 9"
} else {
    return num1 + num2;
    }
}  */

// Hoisting : arrow functions se comporta da mesma forma, ou seja, como expressão
 