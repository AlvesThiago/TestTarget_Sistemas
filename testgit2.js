let faturamentoMensal = [
    {dia: 1, valor: 2000},
    {dia: 2, valor: 2500},
    {dia: 3, valor: 3000},
    {dia: 4, valor: 2800},
    {dia: 5, valor: 2900},
    {dia: 6, valor: 0},
    {dia: 7, valor: 0},
    {dia: 8, valor: 2700},
    {dia: 9, valor: 3200},
    {dia: 10, valor: 2800},
    {dia: 11, valor: 0},
    {dia: 12, valor: 3300},
    {dia: 13, valor: 3100},
    {dia: 14, valor: 0},
    {dia: 15, valor: 0},
    {dia: 16, valor: 2600},
    {dia: 17, valor: 3400},
    {dia: 18, valor: 3400},
    {dia: 19, valor: 0},
    {dia: 20, valor: 0},
    {dia: 21, valor: 3300},
    {dia: 22, valor: 3200},
    {dia: 23, valor: 2800},
    {dia: 24, valor: 3100},
    {dia: 25, valor: 0},
    {dia: 26, valor: 0},
    {dia: 27, valor: 3000},
    {dia: 28, valor: 3500},
    {dia: 29, valor: 3500},
    {dia: 30, valor: 0},
    {dia: 31, valor: 0},
]

let valoresFaturamento = []
for (let i = 0; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor > 0) {
        valoresFaturamento.push(faturamentoMensal[i].valor)
    }
}

let menorValor = Math.min(...valoresFaturamento)
let maiorValor = Math.max(...valoresFaturamento)

let somaFaturamento = 0
for (let i = 0; i < valoresFaturamento.length; i++) {
    somaFaturamento += valoresFaturamento[i]
}

let mediaMensal = somaFaturamento / valoresFaturamento.length

let diasAcimaMedia = 0
for (let i = 0; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor > mediaMensal) {
        diasAcimaMedia++
    }
}

console.log(`Menor valor de faturamento: ${menorValor}`)
console.log(`Maior valor de faturamento: ${maiorValor}`)
console.log(`Dias acima da média mensal: ${diasAcimaMedia}`)