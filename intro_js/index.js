// declarando constantes 
// em JavaScript 
// const nome = 'José'        // variável em js é um ponteiro, não tem valor. A variável aponta para um valor do tipo string 
// console.log(nome)          
// // nome = 'José Silva'     // não pode reatribuir valor, pois é constante, gera erro em tempo de execução
// // em Java
// // String nome "José

// console.log(typeof(nome))
// const idade = 17
// console.log(typeof(idade))

// declarando variáveis. Variável não tem tipo, mas pode mudar o valor. O objeto para o qual o ponteiro aponta pode mudar (vide objeto b abaixo)
// let a=2
// console.log(a)
// let passouDeAno = true
// console.log(passouDeAno)
// let b
// console.log(b)      // undefined
// b=1.5               // number
// console.log(b)

// e o var ? --> permite redeclaração (não usar)
//içamento (hoisting)
// var idade = 18
// console.log(`Oi, ${nome}`)          // Oi, undefined
// if (idade>=18){
//     var nome = 'João'
//     console.log('Parabéns, '+ nome + ". Você pode dirigir")     // Parabéns, João. Você pode dirigir
// }
// console.log('Até '+nome)            // Até João
// var linguagem = 'Javascript'
// console.log('Aprendendo '+linguagem)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem} agora`)     // equivale a uma f-string no python
// var c = 2
// c = 3
// console.log(c)
// // console.log('hello, world')

/**
 * Tipos primitivos (imutáveis):
 *      - boolean;
 *      - string;
 *      - null, 
 *      - number; 
 *      - undefined.
 * Objetos (mutáveis ou imutáveis):
 *      - JSON;
 *      - Array;
 *      - Classes Wrapper (String, Number, Boolean);
 *      - Date;
 *      - Math;
 *      - Funções.
 */
// Coerção: quando dois tipos primitivos estão envolvidos em uma mesma expressão, pode haver a substituição de um tipo por outro de interesse 
// const n1 = 2;
// const n2 = '3'
// console.log(typeof(n1))         //tipo do objeto para o qual a variável n1 aponta
// console.log(typeof(n2))

// //coerção implícita de n1, concatenação acontece
// const n3 = n1+n2;
// console.log(n3)

// //coerção explícita, soma acontece
// const n4 = n1 + Number(n2)
// console.log(n4)

//Operadores de comparação por igualdade: == e ===
// null -> variável exite, mas não aponta para ninguém; undefined -> variável não existe
// console.log([] == false)
// console.log ([] == [])
// console.log(1 == [1])
// console.log(true === 1)
// console.log(true == 1)
// console.log(1 == '1')            // ocorre coerção implícita. Leva em conta somente os valores envolvidos 
// console.log(1 === '1')             // não realzia coerção. Considera valores e tipos para a comparação --> utilizar apenas este
// console.log(1 == 1)

// **********Vetores**********
//declaração 
// v1 = [];
// v1[0] = 3.4
// v1[10] = 2;
// v1[2] = "abc"
// console.log(v1.length)          //v1 com comprimento 11
// //inicializando na declaração
// v2 = [2, "abc", true]
// console.log(v2)
// //iterando sobre o vetor 
// for(let i=0; i<v2.length; i++){
//     console.log(v2[i])
// }

// métodos utilitários
//  const nomes = ["Ana Maria","Antonio", "Rodrigo", "Alex", "Cristina"];
 //const apenasComA = nomes.filter((n) => n.startsWith("A"));      //retorna outro vetor, apenas com os nomes iniciados com "A"
 //console.log(apenasComA)
//  const iniciais = nomes.map(function (nome){return nome.charAt(0)})
//  console.log(iniciais)      

// const res = nomes.map((nome) => nome.charAt(0));                //primeiro caracter de cada nome
// console.log(res)

// const todosComecamComA = nomes.every((n) => n.startsWith("A"));  //retorna valor booleano true se todos os nomes começam com A
// console.log(todosComecamComA)                                    //false

// const valores = [1,2,3,4];
// const soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual);                    
// console.log(soma);

//***** Funções (function e arrow function) *****
// function hello(){
//     console.log(`Oi`)
// }
// hello()
// function hello(nome){
//     console.log(`Oi ${nome}`)
// }
// hello("Maria")
// function soma(a, b){
//     return a + b
// }
// const resultado = soma(2,3)
// console.log(resultado)

//função anônima
// const dobro = function  (n){
//     return 2*n;
// }
// console.log(dobro(6))
// const triplo = function (n=5){      // valor padrão 5, caso não seja passado parâmetro
//     return 3*n
// }
// console.log(triplo());
// console.log(triplo(10))

// // arrow function (preferível)
// const falarOi = () => {console.log('oi')}
// falarOi()
// const falarOi = nome => {console.log(`Oi, ${nome}`)}            // um parâmetro --> parênteses podem ser omitidos 
// falarOi('Carlos')
// const falarOi = nome => console.log(`Oi, ${nome}`)             // uma instrução no corpo --> chaves podem ser omitidas.
// const somar = (a,b) =>  a+b;                                   // return está implícito. Com chaves --> return obrigatório.
// let umaFuncao = function(){
//     console.log("Fui armazenada em uma variável")
//     return () => 'oi'
// }
// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())

// function f(funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log("Criada por g")
//         return () => 'A'
//     }
//     return outraFuncao()
// }
// const resultado = g()
// f(resultado)
// console.log(resultado())
//Closure
// function f(idade){
//     let nome = 'João'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
//     }
//     return g
// }

// const res = f(17)
// res()
// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// res.f1()
// res.f2()
// JSON: JavaScript Object Notation
//Uma pessoa que se chama joão e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }
// //acesso ao objeto
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
//Uma pessoa se chama Maria, tem 21 anos e mora na rua B, número 50
// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco:{
//         rua: 'Rua B',
//         numero: 50
//     }
// }
// console.log(pessoa.endereco.rua)
// console.log(pessoa['endereco']['numero'])

//Uma concessionária tem nome, cnpj e endereço (logradouro, número e bairro). Ela também tem seu estoque de veículos. A quantidade de veículos é arbitrária. A qualquer instante, ela pode ter 2 ou 5 ou 17 veículos. Cada veículo modelo, marca e placa.
// const concessionária = {
//     nome: 'Concessionária A',
//     cnpj: '12345678', 
//     endereco:{
//         logradouro: 'Rua A',
//         numero: '123', 
//         bairro: {
//             nome: 'Tatuapé',
//         }
//     },
//     estoque:[
//         {
//             modelo: 'Corsa',
//             marca: 'Chevrolet', 
//             placa: 'DDF-3578'
//         },
//         {
//             modelo: 'Ka',
//             marca: 'Ford', 
//             placa: 'ABC-1234'
//         }
//     ]
// }
// console.log(concessionária.estoque[0].modelo)
// console.log(concessionária['estoque'][1]['placa'])

//Uma calculadora realiza as quatro operações fundamentais
//soma: representada por uma arrow function que faz return
//subtração: representada por uma arrow function sem return
//multiplicação: function regular
//divisão: escolha 

// const calculadora = {
//     operacoes:{
//         soma:  (a, b) => {return a+b},
//         subtracao: (a,b) => console.log(a-b), 
//         multiplicacao: function (a, b){
//             return a*b
//         }, 
//         divisao: (a,b) => {return a/b}
//     }
// }
// console.log(calculadora.operacoes.soma(1,2))

//Execução Síncrona (bloqueante) e Assíncrona
// console.log('Eu primeiro')
// console.log("Agora eu")
// console.log("Sempre vou ser a última...:(")
// const a = 5+6;
// const b = 9+4;
// console.log(a+b)
// function demorada(tempo){
//     const dataAtualMaisTempoSegundos = new Date().getTime() + tempo;      //data atual deslocada de 2s
//     while(new Date().getTime() <= dataAtualMaisTempoSegundos);           //espera e não faz nada (espécie de espera ocupada)
//     const d =8+2*6;
//     console.log(`Demorada com tempo: ${tempo}`)
//     return d
// }

// setTimeout(() => {
//     demorada(5000)
// }, 5000)

// setTimeout(() => {
//     demorada(1000)
// }, 1000)           //entrou na fila após um segundo (antes).
// console.log('Fim do script principal')
// setTimeout(()=>{
//     console.log('Agendada pelo setTimeout')         //jamais termina antes do script que fez o agendamento acabar
// }, 0)
// const dataAtualMais5Segundos = new Date().getTime() + 5000;
// while(new Date().getTime() <= dataAtualMais5Segundos);
// console.log('Terminando o script principal...')

// const a = 2+3
// const b = 6*1;

// setTimeout(() => {
//     const d = demorada()
//     console.log(`d: ${d}`)
// }, 500)   //agenda a execução de outra função. Passados 500ms, execute a função demorada() e exiba o valor de d

// // const d = demorada()
// const e = a+b*2
// console.log(`e: ${e}`)

//CPU Bound: prediminantemente caracterizada por ciclos de CPU
//IO Bound: predominantemente caracterizada por operações de entrada e saída
// const fs = require('fs')
// const nomeArquivo = 'arquivo.txt'
// //função callback: 
// const exibirConteudo = (erro, conteudo) => {
//     console.log('A')
//     if(erro){
//         console.log(`Erro: ${erro}`)
//     }
//     else{
//         console.log(`Conteúdo: ${conteudo}`)
//         const dobro = Number(conteudo.toString())*2;
//         //função callback
//         const finalizar = (erro) => {
//             console.log(erro ? "Deu erro ao escrever o dobro" : "Ok, escreveu o dobro")
//             console.log("C")
//             const exibirDobro = (erro, conteudo) =>{
//                 console.log("E")
//                 console.log(erro ? "Deu erro lendo o dobro":`Dobro: ${conteudo.toString()}`)
//             }
//             fs.readFile('dobro.txt', exibirDobro)
//             console.log("F")
//         }
//         fs.writeFile('dobro.txt', dobro.toString(), finalizar)
//         console.log("D")
//     }
// }
// fs.readFile(nomeArquivo, exibirConteudo)
// console.log('B')

//Promisses
//1 + 2 + 3 + .... + n
//demorando:
const calculoDemorado = (n) => {
    let cont=0;
    for(let i=1; i<=n; i++)
        cont +=i;
    return cont
}
const res = calculoDemorado(1000)       //bloqueante
console.log(res)