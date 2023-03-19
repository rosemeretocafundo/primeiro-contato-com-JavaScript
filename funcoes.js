//

//let x = "";
//console.log(x);
//x= "oi";


//DECLARAÇÃO DE FUNÇÃO = tem a estrutura abaixo onde utiliza a palavra function, coloca nome, parentese, abre e fecha chaves
// 1°  momento da função é  declara a função e diz o que ela faz, aqui ela só imprime o texto

                    //string
/*function imprimeTexto(texto) {  // onde está a palavra reservada function é onde está a nossa declaração coloca o abre e fecha parenteses e dentro dele coloca os parâmetros
    console.log(texto)
}

// 2° momento é quando executa a função (1 ou + vezes) e executa chamando ela pelo nome colocando dentro do parentese o texto que vc quer

imprimeTexto("oi");  // momento que chamei o js e pedi para imprimir o texto passando para dentro dela o texto quye quero imprimir "oi"
imprimeTexto("outro texto");  // a mesma função pode ser escrita, criada pra funcionar com diveros tipos de texto, reaproveitando o código passando um outro texto "outro texto"
// e não precisa ficar repetindo o bloco de código várias vezes

// três formas de escrever funções no javaScript

function soma(){  //essa funçao está sendo criada sem parâmetros dentro dela e resolve dentro dos bloco de chaves e criou uma constante resultado que guarda 2+2, mas não retorna, não joga para fora do bloco a informação 2+2, 
    //return é que efetua esse procedimento de jogar para fora do código e retornar o resultado do código
   // const resultado = 2 + 2; - não precisa da const resultado, só colocar o return -pq tá chamando a função, a função está sendo executada, mas não está dando a resposta, não tem o que imprimir pq a função não está retornando nada, 
   //tem que especificar o que quer que volte na função como resposta nesse caso é a nossa conta, utilizando a palavra chave return. nesse caso não precisa declarar a variável resposta, só substituir a variável resposta por return.. 
   return 2 + 2; // deve pedir para a  //return tem que ser a última linha da função antes de fechar o bloco, pq depois que passou pela palavra return o js sai da função e não lê mais nada, antes da linha de return
   // pode ter outros códigos ou vários console.log e não é proibido escrever depois do return, mas tudo que escrever do retorno não será executado 
} 

   console.log(soma()) //está chamando a função, mas não tem o que imprimir, pq não tem o retorno- tem uma palavra chave que é o return */

   // fazendo uma função dentro de outra função  == passar o return da soma dentro do imprimir texto

                        //2 ->valor de soma()
   function imprimeTexto(texto) {
    console.log(texto)
   }
   imprimeTexto(soma())  //nome da função que queremos chamar = uma função dentro de outra função
   imprimeTexto(soma());
   function soma(){
    return 2+2;
   }