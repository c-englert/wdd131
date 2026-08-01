// Array de produtos fornecido pela atividade — fonte de dados do campo "Nome do Produto"
const produtos = [
  { id: "fc-1888", nome: "capacitor de fluxo", classificacaomedia: 4.5 },
  { id: "fc-2050", nome: "fios elétricos", classificacaomedia: 4.7 },
  { id: "fs-1987", nome: "circuitos de tempo", classificacaomedia: 3.5 },
  { id: "ac-2000", nome: "reator de baixa tensão", classificacaomedia: 3.9 },
  { id: "jj-1969", nome: "equalizador de distorção", classificacaomedia: 5.0 }
];

// Preenche dinamicamente as opções do select: texto = nome, value = id
const productSelect = document.querySelector("#product-name");

produtos.forEach((produto) => {
  const option = document.createElement("option");
  option.value = produto.id;
  option.textContent = produto.nome;
  productSelect.appendChild(option);
});

// Rodapé: ano atual e última modificação
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  `Última modificação: ${document.lastModified}`;
