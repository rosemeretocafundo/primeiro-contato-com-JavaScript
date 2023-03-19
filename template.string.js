const nome = "Rosemere";
const idade = 2023-1969;
const cidadeDeNascimento = "Governador Valadares";

//const apresentacao = "meu nome é "  + nome ;
//const apresentacao = "meu nome é "  + nome + "minha idade é " + idade + "e nasci na cidade de " + cidadeDeNascimento;;

//console.log(apresentacao)

// apresentando com contanação de template string com $

//const apresentacao = "meu nome é xx, minha idade é xx, e nasci na cidade de xx;

// template-strings são strings entre acentos graves ao invés das aspas duplas, mas ne todas as strings que tem acento grave são templates-strings
//trocar aspas duplas por acento grave que é para escrever crase  e colocar as variáveis dentro do cifrão e chave

const apresentacao = `meu nome é ${nome}, minha idade é ${idade}, e nasci na cidade de ${cidadeDeNascimento}`;
console.log(apresentacao)
