//Exercício 3 - Aula de Variáveis

let nome = prompt("Insira seu nome completo: ")
let nascimento = prompt("Insira sua data de nascimento: (DD/MM/AAAA)")
let endereco = prompt("Insira seu endereço: (Rua, número)")
let cpf = Number(prompt("Insira seu cpf (Obs: somente números)"))
let escolaridade = prompt("Insira sua escolaridade: ")
let temCNH = prompt("Você possui CNH")
let qtdFilhos
let temFilhos = confirm("Você tem filho(s)")
let percentual

if (temFilhos){
    qtdFilhos = Number(prompt("Quantos filhos você possui?"))
}else{
    qtdFilhos = 0
}

let cargo = prompt("Qual o seu cargo atual? ")
let salario = Number(prompt("Qual o seu salário atual? "))
let temComissao = confirm("Você recebe comissão? ")

if (temComissao){
    percentual = Number(prompt("Qual a porcentagem da sua comissão? (Ex: 23)")) 
}else{
    percentual = 0
}

let anoAdmissao = prompt("Digite o ano da sua admissão")

console.log(`
Dados do funcionário:
    Nome completo: ${nome} \n
    Data de nascimento: ${nascimento} \n
    Endereço: ${endereco} \n
    CPF: ${cpf} \n
    Escolaridade: ${escolaridade} \n
    Tem CNH: ${temCNH} \n
    Filhos: ${qtdFilhos} \n
    Cargo atual: ${cargo} \n
    Salário atual: ${salario} \n
    Percentual Comissão: ${percentual}% \n
    Ano de admissão: ${anoAdmissao}\n\n\n`
)

//Exercício 3 - Aula de Operadores

//define os os valores de vendas nos primeiros seis meses do ano
const vendasJan = 5784.50
const vendasFev = 3418.41
const vendasMar = 4124.10
const vendasAbr = 1874.00
const vendasMai = 7000.00
const vendasJun = 9450.00

//define o benefício de auxílio creche
let auxilioCreche = 45.50 * qtdFilhos

//define o percentual de comissão em cada mês e o percentual de desconto do INSS
const percComiss = (percentual)/100
const percInss = 0.05

//define o valor ganho em comissão em cada mês
let comissJan = percComiss * vendasJan
let comissFev = percComiss * vendasFev
let comissMar = percComiss * vendasMar
let comissAbr = percComiss * vendasAbr
let comissMai = percComiss * vendasMai
let comissJun = percComiss * vendasJun

//define o valor descontado em cada mês referente ao INSS
let inssJan = ((comissJan + salario) * percInss)
let inssFev = ((comissFev + salario) * percInss)
let inssMar = ((comissMar + salario) * percInss)
let inssAbr = ((comissAbr + salario) * percInss)
let inssMai = ((comissMai + salario) * percInss)
let inssJun = ((comissJun + salario) * percInss)

//define o valor total que o funcionário recebeu em cada mês
let totalJan = salario + comissJan + auxilioCreche - inssJan
let totalFev = salario + comissFev + auxilioCreche - inssFev
let totalMar = salario + comissMar + auxilioCreche - inssMar
let totalAbr = salario + comissAbr + auxilioCreche - inssAbr
let totalMai = salario + comissMai + auxilioCreche - inssMai
let totalJun = salario + comissJun + auxilioCreche - inssJun

console.log(`
Dados financeiros:
    Comissão de Janeiro: ${comissJan.toFixed(2)}\n
    Desconto INSS Janeiro: ${inssJan.toFixed(2)}\n
    Salário Total:\n
        Janeiro: ${totalJan.toFixed(2)}\n
        Fevereiro: ${totalFev.toFixed(2)}\n
        Março: ${totalMar.toFixed(2)}\n
        Abril: ${totalAbr.toFixed(2)}\n
        Maio: ${totalMai.toFixed(2)}\n
        Junho: ${totalJun.toFixed(2)}\n
    Média Salarial: ${((totalJan+totalFev+totalMar+totalAbr+totalMai+totalJun)/6).toFixed(2)}\n
    `)
