let contador = 0;

const numero = document.getElementById("contador");
const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const zerar = document.getElementById("zerar");

aumentar.addEventListener("click", () => {
    contador++;
    numero.textContent = contador;
});

diminuir.addEventListener("click", () => {
    contador--;
    numero.textContent = contador;
});

zerar.addEventListener("click", () => {
    contador = 0;
    numero.textContent = contador;
});
