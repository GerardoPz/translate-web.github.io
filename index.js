// Contador de caracteres
document.addEventListener("DOMContentLoaded", function () {
  let textarea = document.querySelector("textarea");

  function handleInput() {
    var texto = this.value;
    let contador = 0;
    for (let i = 1; i <= texto.length; i++) {
      contador++;
    }

    let contadorLetras = document.getElementById("contador");
    contadorLetras.innerHTML = contador + "/500";
  }

  textarea.addEventListener("input", handleInput);

  handleInput.call(textarea);
});
