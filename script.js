const button = document.getElementById("btn");

button.addEventListener("click", function () {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  let resultado = Math.floor(Math.random() * (max - min + 1)) + min;

  if (isNaN(resultado)) {
    resultado = "Valor inválido";
  }

  document.querySelector("#caixa-span > span").textContent = resultado;
});
