// == comparação implícita

const numero =5;
const texto = "5";

console.log(numero == texto)  // vai sair resultado no console.log() true pq o js faz a conversão porque só compara o valor

// === comparação explícita

console.log(numero === texto)  // vai sair resultado false pq o js não faz a conversão porque ele compara o valor e o tipo: number, string ou booleano

// usar typeof

console.log (typeof numero)  // ele diz o tipo de dado que estamos comparando
console.log (typeof numero)  // ele diz o tipo de dado que estamos comparando

// Ao fazer conversão , as boas práticas diz para usar === "3" iguais e quando for fazer conversão fazer de modo explícito, então usar string(), number(),  etc