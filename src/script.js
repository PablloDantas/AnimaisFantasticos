const hrefPagina = location.href;
console.log(hrefPagina);

const linguagem = navigator.language;
console.log(linguagem);

document.addEventListener("DOMContentLoaded", function () {
  const primeiroAtivo = document.querySelector(".ativo");
  console.log(primeiroAtivo);

  const todosAtivos = document.querySelectorAll(".ativo");
  console.log(todosAtivos);
});

function atualizarTamanhoDaJanela() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  return `Altura: ${height} / Largura: ${width}`;
}

window.addEventListener("resize", function () {
  let windowSize = atualizarTamanhoDaJanela();
  console.log(windowSize);
});

// Chame a função uma vez para exibir o tamanho da janela inicial
let windowSize = atualizarTamanhoDaJanela();
console.log(windowSize);
