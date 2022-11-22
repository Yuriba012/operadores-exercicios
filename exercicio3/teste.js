const percent = 0.1
const salarioBase = 5000
const percentInss = 0.05

let mesVendas = [5784.50, 3418.41, 4124.10, 1874.00, 7000.00, 9450.00]
let mesComiss = []
let descInss = []
let totalReceb = []
let soma

mesVendas.forEach(function(mes, index){
    mesComiss.push(mes*percent)
    descInss.push((salarioBase + mesComiss[index])*percentInss)
    totalReceb.push(salarioBase + mesComiss[index] - descInss[index])
})

totalReceb.forEach(function(mes, index){
    soma += mes
    console.log(`Total recebido no mês ${index + 1}:`,mes.toFixed(2))
})