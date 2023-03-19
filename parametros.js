// parâmetros de função dentro dos parenteses - passa via parâmetro o numero que vai receber já que a função é de soma p/ reaproveitar o código e não criar muitas funções

/*function soma(numero1, numero2) {
    return numero1 + numero2;
}

 console.log(soma(2, 2))
 console.log(soma(245, 20))
 console.log(soma(-500, 60))*/


  // parâmetros x argumentos

  // ordem dos parâmetros = cuidado com a ordem que está passsando dos parâmetros


 /*function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
 }
   console.log(nomeIdade("Rosemere", 54)) */

   function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4,5), soma(3,3)))