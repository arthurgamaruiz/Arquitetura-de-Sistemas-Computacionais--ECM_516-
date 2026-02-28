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
// const nomes = ["Ana Maria","Antonio", "Rodrigo", "Alex", "Cristina"];
// const apenasComA = nomes.filter((n) => n.startsWith("A"));      //retorna outro vetor, apenas com os nomes iniciados com "A"
// console.log(apenasComA)

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
// const falarOi = nome => {console.log(`Oi, ${nome}`)}        // um parâmetro --> parênteses podem ser omitidos 
// falarOi('Carlos')
// const falarOi = nome => console.log(`Oi, ${nome}`)          // uma instrução no corpo --> chaves podem ser omitidas.
// const somar = (a,b) =>  a+b;                                   // return está implícito. Com chaves --> return obrigatório.
