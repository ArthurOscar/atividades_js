//atividade 1
function verificarPar(numero){
    if(numero % 2 === 0){
        console.log("par")
    }else{
        console.log("ímpar")
    }
}

let numeroUsuario = parseInt(prompt("Digite um número"))
verificarPar(numeroUsuario)

//atividade 2
function matematicaBasica(numero, numero2){
    const soma = numero + numero2;
    const subtracao = numero + numero2;
    const divisao = numero2 !== 0 ? numero / numero2: "Não pode ser dividido";
    const multiplicacao = numero * numero2;
    console.log(soma)
    console.log(subtracao)
    console.log(divisao)
    console.log(multiplicacao)
}

let numero = parseFloat(prompt("Digite o primeiro número"))
let numero2 = parseFloat(prompt("Digite o segundo número"))

matematicaBasica(numero, numero2)

//atividade 3