// Controla o número de avaliações concluídas usando localStorage
let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

reviewCount += 1;

window.localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#review-count").textContent = reviewCount;

// Rodapé
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  `Última modificação: ${document.lastModified}`;
