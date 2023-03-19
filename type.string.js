// criar string = "texto" ou "palavra'

const texto1 = "Olá mundo";
const texto2 = 'Olá mundo';
const senhaForte = "Senha12345";
const citacao = texto1 + senhaForte;
const citacaoComAspasSimples = "O Leo disse: 'Olá'";
const chamarMeuNome = "meu nome é:";
const meuNome = "Rosemere";

console.log(chamarMeuNome + meuNome)

console.log(citacao)
console.log(citacaoComAspasSimples)

const cifrao  = '\u0024';
const aMaiusculo = '\u0041';

console.log(cifrao)
console.log(aMaiusculo)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade===input)
console.log(input === inputMinusculo)
console.log(cidade === inputMinusculo)