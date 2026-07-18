// ===== Rodapé: ano atual e última modificação (crit. 9) =====
document.querySelector('#ano').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent =
    `Última modificação: ${document.lastModified}`;

// ===== Sensação Térmica (crit. 8) =====
// Valores estáticos, correspondendo ao conteúdo da seção de clima
const temperatura = 36; // °C
const velocidadeVento = 8; // km/h

// Função de UMA linha (fórmula de wind chill métrica - Celsius/km/h)
function calcularSensacaoTermica(temp, vento) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);
}

// Só chama a função se as condições forem atendidas:
// temperatura <= 10°C  E  vento > 4.8 km/h
const sensacao = document.querySelector('#sensacao');

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)}°C`;
} else {
    sensacao.textContent = 'N/A';
}