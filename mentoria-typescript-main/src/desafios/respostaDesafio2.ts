// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

interface Person { 
    nome: string,
    idade: number,
    profissao: Trabalho

}

enum Trabalho {
    Atriz,
    Padeiro
}

const Pessoa1: Person ={
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz

}
const Pessoa2: Person ={
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro

}
const Pessoa3: Person ={
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz

}
const Pessoa4: Person ={
    nome: 'carlos',
    idade: 19,
    profissao: Trabalho.Padeiro

}