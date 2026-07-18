
document.querySelector('#ano').textContent = new Date().getFullYear();
document.querySelector('#ultima-modificacao').textContent =
    `Última modificação: ${document.lastModified}`;

// ===== Sensação Térmica =====
const temperatura = 8; // °C
const velocidadeVento = 12; // km/h

function calcularSensacaoTermica(temp, vento) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16)).toFixed(1);
}

const sensacao = document.querySelector('#sensacao');

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacao.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento)}°C`;
} else {
    sensacao.textContent = 'N/A';
}
