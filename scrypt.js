function iniciar (){
    var cont = document.getElementById("contador");
    const aumentara = document.getElementById("aumentar");
    const disminuira = document.getElementById("disminuir");
    
    aumentara.addEventListener.apply("click", aumentar(cont));
    disminuira.addEventListener.apply("click", disminuir(cont));
    
   

}

function aumentar(cont) {
    let temp = cont.innerHTML;
    cont.innerHTML = (parseInt(temp)+1);
    console.log(cont.innerHTML);
    console.log("aumentar");

}
function disminuir(cont) {
      let temp = cont.innerHTML;
    cont.innerHTML = (parseInt(temp)-1);
    console.log("disminuir");
    console.log(cont.innerHTML);

}



