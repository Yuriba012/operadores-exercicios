let numero = Number(prompt("Insira um número par:"))

let resto = numero%2

console.log("Resto da Divisão:", resto)

if (resto === 0){
    console.log("É par")
}else{
    console.log("É impar")
}