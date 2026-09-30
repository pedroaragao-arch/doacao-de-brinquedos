let caminhao = document.getElementById("caminhao-container");
let caminhaoEscondido = caminhao.querySelector(".caminhao-escondido");

caminhao.addEventListener("click", function () {
    caminhaoEscondido.style.display = "flex";
});