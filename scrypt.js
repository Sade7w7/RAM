let cont = document.getElementById("contador");



const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");

aumentar.addEventListener("click", aumentar);

function aumentar() {
    let temp = cont.innerHTML;
    cont.innerHTML = parseInt(temp) + 1;
}
