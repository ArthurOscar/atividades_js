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
    const subtracao = numero - numero2;
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
let i = 10;
let delay = 0;
while (i >= 1){
    console.log(i);
    i--;
}

//atividade 4
function inverterTexto(conteudo){
    const inverter = conteudo.split("").reverse().join("");
    console.log(inverter);
}

inverterTexto("hello")

//atividade 5
function contarCaracteres(palavra){
    const contar = palavra.length;
    console.log(contar)
}

contarCaracteres("medicamento")

//atividade 6
let carro = {
    marca: "",
    modelo: "",
    ano: 0
}
carro.marca = prompt("Digita a marca do carro")
carro.modelo = prompt("Digita a modelo do carro")
carro.ano = prompt("Digita a ano do carro")

console.log(carro.modelo)