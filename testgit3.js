const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

const percentualSP = (faturamentoSP/faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ/faturamentoTotal) * 100;
const percentualMG = (faturamentoMG/faturamentoTotal) * 100;
const percentualES = (faturamentoES/faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros/faturamentoTotal) * 100;

console.log(`O percentual de SP foi de ${percentualSP.toFixed(2)}%.`);
console.log(`O percentual de RJ foi de ${percentualRJ.toFixed(2)}%.`);
console.log(`O percentual de MG foi de ${percentualMG.toFixed(2)}%.`);
console.log(`O percentual de ES foi de ${percentualES.toFixed(2)}%.`);
console.log(`O percentual de Outros foi de ${percentualOutros.toFixed(2)}%.`);